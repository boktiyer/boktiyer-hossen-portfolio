import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="How I can"
          highlight="help you"
          description="From websites to visual designs and professional documents."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.1} className="h-full">
              <article className="group bg-card/70 border-accent/10 hover:border-accent/40 relative h-full overflow-hidden rounded-3xl border p-8 transition duration-300 hover:-translate-y-1.5">
                {/* Top gradient line that grows on hover */}
                <span className="from-maroon via-accent to-maroon absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r transition duration-500 group-hover:scale-x-100" aria-hidden />
                <span className="text-accent/10 font-display absolute top-4 right-6 text-6xl font-bold select-none" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="bg-maroon/25 border-accent/20 text-accent group-hover:bg-maroon flex size-12 items-center justify-center rounded-xl border transition group-hover:text-white">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="font-display mt-6 text-lg font-semibold">{title}</h3>
                <p className="text-muted mt-3 text-sm leading-relaxed">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
