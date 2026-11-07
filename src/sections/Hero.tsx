"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Code2, Palette, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "@/components/SocialLinks";
import { ProfileImage } from "@/components/ProfileImage";

const roles = ["Frontend Web Developer", "Canva Designer", "Microsoft Office Specialist"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle through the roles every 2.6 seconds.
  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Background decoration */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" aria-hidden />
      <div className="bg-maroon/30 absolute -top-40 -left-40 size-[32rem] rounded-full blur-[120px]" aria-hidden />
      <div className="bg-burgundy/30 absolute -right-32 bottom-0 size-[28rem] rounded-full blur-[120px]" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        {/* LEFT: text */}
        <motion.div variants={container} initial="hidden" animate="show" className="order-2 text-center lg:order-1 lg:text-left">
          <motion.p
            variants={item}
            className="glass text-accent-soft mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm"
          >
            <span className="relative flex size-2">
              <span className="bg-accent absolute inline-flex size-full animate-ping rounded-full opacity-75" />
              <span className="bg-accent relative inline-flex size-2 rounded-full" />
            </span>
            CSE Student at PCIU
          </motion.p>

          <motion.p variants={item} className="text-muted text-lg sm:text-xl">
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-gradient mt-2 text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl xl:text-7xl"
          >
            BOKTIYER
            <br />
            HOSSEN
          </motion.h1>

          <motion.p variants={item} className="font-display mt-6 text-xl font-semibold sm:text-2xl">
            {siteConfig.shortRole}
          </motion.p>

          {/* Rotating role */}
          <motion.div variants={item} className="text-accent mt-2 flex h-8 items-center justify-center gap-2 text-base sm:text-lg lg:justify-start">
            <Sparkles className="size-4 shrink-0" aria-hidden />
            <span className="sr-only">{siteConfig.role}</span>
            <span className="overflow-hidden leading-8" aria-hidden>
              {/* Changing the key re-runs the slide-up animation for each new role */}
              <motion.span
                key={roleIndex}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="inline-block font-medium"
              >
                {roles[roleIndex]}
              </motion.span>
            </span>
          </motion.div>

          <motion.p variants={item} className="text-muted mx-auto mt-6 max-w-xl text-base leading-relaxed sm:text-lg lg:mx-0">
            {siteConfig.intro}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#projects"
              className="group from-maroon to-burgundy inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r px-7 py-3.5 font-semibold shadow-[0_12px_32px_-10px_rgb(128_0_32/1)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-8px_rgb(128_0_32/1)] sm:w-auto"
            >
              View My Projects
              <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href={siteConfig.cvFile}
              download="Boktiyer-Hossen-CV.pdf"
              className="glass hover:border-accent/60 hover:bg-maroon/20 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold transition hover:-translate-y-0.5 sm:w-auto"
            >
              <Download className="size-4" aria-hidden />
              Download CV
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex justify-center lg:justify-start">
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* RIGHT: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="animate-float relative">
            {/* Glow */}
            <div className="bg-maroon/50 absolute inset-6 rounded-full blur-3xl" aria-hidden />
            {/* Spinning gradient ring */}
            <div
              className="animate-spin-slow absolute -inset-3 rounded-full bg-[conic-gradient(from_0deg,#800020,#C08091,#4A0E20,#651C32,#800020)] opacity-90"
              aria-hidden
            />
            <div className="bg-ink absolute -inset-1 rounded-full" aria-hidden />

            <div className="border-accent/30 bg-card relative size-64 overflow-hidden rounded-full border-2 sm:size-80 lg:size-[22rem] xl:size-[26rem]">
              <ProfileImage />
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="glass absolute top-8 -left-4 flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium shadow-xl sm:-left-10"
            >
              <span className="bg-maroon/60 flex size-8 items-center justify-center rounded-lg">
                <Code2 className="size-4" aria-hidden />
              </span>
              Developer
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="glass absolute -right-4 bottom-10 flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium shadow-xl sm:-right-8"
            >
              <span className="bg-maroon/60 flex size-8 items-center justify-center rounded-lg">
                <Palette className="size-4" aria-hidden />
              </span>
              Designer
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
