"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Send, LoaderCircle, CircleCheck, CircleAlert } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import { siteConfig } from "@/data/site";
import {
  validateContact,
  hasErrors,
  LIMITS,
  type ContactErrors,
  type ContactInput,
} from "@/lib/validation";
import { cn } from "@/lib/utils";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

const emptyForm: ContactInput = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<ContactInput>(emptyForm);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactInput, boolean>>>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });
  // Hidden "honeypot" field: real people leave it empty, spam bots fill it in.
  const [website, setWebsite] = useState("");

  const update = (field: keyof ContactInput, value: string) => {
    const next = { ...form, [field]: value };
    setForm(next);
    // Re-check a field as the visitor types once they've left it at least once.
    if (touched[field]) setErrors(validateContact(next));
  };

  const blur = (field: keyof ContactInput) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validateContact(form));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validateContact(form);
    setErrors(found);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (hasErrors(found)) {
      // Move keyboard focus to the first field with a problem.
      const first = Object.keys(found)[0];
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }

    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        message?: string;
        errors?: ContactErrors;
      };

      if (res.ok) {
        setStatus({ state: "success", message: data.message ?? "Thank you! Your message has been sent." });
        setForm(emptyForm);
        setTouched({});
        setErrors({});
      } else {
        if (data.errors) setErrors(data.errors);
        setStatus({
          state: "error",
          message: data.message ?? "Something went wrong. Please try again later.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        message: "Network error. Please check your internet connection and try again.",
      });
    }
  }

  const fieldClass = (field: keyof ContactInput) =>
    cn(
      "bg-ink/60 placeholder:text-muted/50 w-full rounded-xl border px-4 py-3 text-white transition outline-none focus:ring-2",
      errors[field] && touched[field]
        ? "border-red-400/70 focus:ring-red-400/30"
        : "border-accent/15 focus:border-accent/60 focus:ring-maroon/40",
    );

  const renderError = (field: keyof ContactInput) =>
    errors[field] && touched[field] ? (
      <p id={`contact-${field}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-300">
        <CircleAlert className="size-3.5 shrink-0" aria-hidden />
        {errors[field]}
      </p>
    ) : null;

  const aria = (field: keyof ContactInput) => ({
    id: `contact-${field}`,
    name: field,
    "aria-invalid": Boolean(errors[field] && touched[field]),
    "aria-describedby": errors[field] && touched[field] ? `contact-${field}-error` : undefined,
    onBlur: () => blur(field),
  });

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="bg-maroon/20 absolute bottom-0 left-1/2 size-144 -translate-x-1/2 rounded-full blur-[150px]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact Me"
          title="Let's work"
          highlight="together"
          description="Have a project, a design idea or a question? Send me a message and I'll get back to you."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.5fr]">
          {/* Info */}
          <Reveal from="left" className="h-full">
            <div className="glass flex h-full flex-col rounded-3xl p-8 sm:p-10">
              <h3 className="font-display text-2xl font-semibold">Get in touch</h3>
              <p className="text-muted mt-3 leading-relaxed">
                I&apos;m happy to hear about website projects, design work, or opportunities to
                learn and collaborate.
              </p>
              <ul className="mt-8 space-y-5">
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-4">
                    <span className="from-maroon to-maroon-deep flex size-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br transition group-hover:scale-105">
                      <Mail className="size-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="text-muted block text-xs tracking-wider uppercase">Email</span>
                      <span className="group-hover:text-accent block truncate font-medium transition">
                        {siteConfig.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="from-maroon to-maroon-deep flex size-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br">
                    <MapPin className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="text-muted block text-xs tracking-wider uppercase">Location</span>
                    <span className="font-medium">{siteConfig.location}</span>
                  </span>
                </li>
              </ul>
              <div className="mt-auto pt-10">
                <p className="text-muted mb-4 text-sm">Find me on</p>
                <SocialLinks showEmail />
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal from="right">
            <form noValidate onSubmit={handleSubmit} className="glass rounded-3xl p-8 sm:p-10" aria-label="Contact form">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
                    Your name <span className="text-accent" aria-hidden>*</span>
                  </label>
                  <input
                    {...aria("name")}
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={LIMITS.name.max}
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={fieldClass("name")}
                    placeholder="John Doe"
                  />
                  {renderError("name")}
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
                    Your email <span className="text-accent" aria-hidden>*</span>
                  </label>
                  <input
                    {...aria("email")}
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={fieldClass("email")}
                    placeholder="john@example.com"
                  />
                  {renderError("email")}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium">
                  Subject <span className="text-accent" aria-hidden>*</span>
                </label>
                <input
                  {...aria("subject")}
                  type="text"
                  required
                  maxLength={LIMITS.subject.max}
                  value={form.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  className={fieldClass("subject")}
                  placeholder="Website project"
                />
                {renderError("subject")}
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-baseline justify-between">
                  <label htmlFor="contact-message" className="block text-sm font-medium">
                    Message <span className="text-accent" aria-hidden>*</span>
                  </label>
                  <span className="text-muted text-xs" aria-live="polite">
                    {form.message.length}/{LIMITS.message.max}
                  </span>
                </div>
                <textarea
                  {...aria("message")}
                  required
                  rows={6}
                  maxLength={LIMITS.message.max}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={cn(fieldClass("message"), "resize-y")}
                  placeholder="Tell me about your project..."
                />
                {renderError("message")}
              </div>

              {/* Honeypot (hidden from people and screen readers) */}
              <div className="hidden" aria-hidden>
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={status.state === "sending"}
                className="from-maroon to-burgundy mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r px-8 py-3.5 font-semibold shadow-[0_12px_32px_-10px_rgb(128_0_32/1)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status.state === "sending" ? (
                  <>
                    <LoaderCircle className="size-4 animate-spin" aria-hidden />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-4" aria-hidden />
                    Send Message
                  </>
                )}
              </button>

              <div aria-live="polite">
                <AnimatePresence>
                  {(status.state === "success" || status.state === "error") && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={cn(
                        "mt-5 flex items-start gap-2 rounded-xl border px-4 py-3 text-sm",
                        status.state === "success"
                          ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                          : "border-red-400/30 bg-red-400/10 text-red-200",
                      )}
                    >
                      {status.state === "success" ? (
                        <CircleCheck className="mt-0.5 size-4 shrink-0" aria-hidden />
                      ) : (
                        <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden />
                      )}
                      {status.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
