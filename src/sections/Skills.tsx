import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
      <div className="bg-maroon/15 absolute top-1/3 left-1/2 size-[40rem] -translate-x-1/2 rounded-full blur-[140px]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="My Skills"
          title="What I"
          highlight="work with"
          description="The technologies and tools I use to build websites and create designs."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map(({ title, description, icon: Icon, skills }, i) => (
            <Reveal key={title} delay={i * 0.1} className="h-full">
              <article className="glass group hover:border-accent/40 relative h-full overflow-hidden rounded-3xl p-8 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgb(128_0_32/0.8)]">
                <div className="from-maroon/0 via-maroon/0 to-maroon/20 absolute inset-0 bg-gradient-to-br opacity-0 transition duration-500 group-hover:opacity-100" aria-hidden />
                <div className="relative">
                  <span className="from-maroon to-maroon-deep border-accent/30 mb-6 flex size-14 items-center justify-center rounded-2xl border bg-gradient-to-br shadow-[0_8px_24px_-8px_rgb(128_0_32/1)] transition group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="size-7" aria-hidden />
                  </span>
                  <h3 className="font-display text-xl font-semibold">{title}</h3>
                  <p className="text-muted mt-2 text-sm leading-relaxed">{description}</p>
                  <ul className="mt-6 space-y-3">
                    {skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-3">
                        <CheckCircle2 className="text-accent size-4 shrink-0" aria-hidden />
                        <span className="text-[0.95rem]">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
