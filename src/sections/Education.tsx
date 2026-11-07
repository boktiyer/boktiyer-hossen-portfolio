import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading eyebrow="Education" title="My academic" highlight="journey" />

        <ol className="border-accent/20 relative space-y-10 border-l-2 pl-8 sm:pl-12">
          {education.map((edu) => (
            <li key={edu.institution} className="relative">
              {/* Timeline dot */}
              <span className="from-maroon to-burgundy border-ink absolute top-8 -left-[calc(2rem+13px)] flex size-6 items-center justify-center rounded-full border-4 bg-gradient-to-br shadow-[0_0_0_4px_rgb(192_128_145/0.25)] sm:-left-[calc(3rem+13px)]" aria-hidden />

              <Reveal from="right">
                <article className="glass hover:border-accent/40 rounded-3xl p-7 transition duration-300 sm:p-9">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <span className="from-maroon to-maroon-deep border-accent/30 flex size-14 shrink-0 items-center justify-center rounded-2xl border bg-gradient-to-br">
                      <GraduationCap className="size-7" aria-hidden />
                    </span>
                    <div>
                      <span className="bg-maroon/40 border-accent/30 text-accent-soft inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium">
                        <Calendar className="size-3.5" aria-hidden />
                        {edu.status}
                      </span>
                      <h3 className="font-display mt-3 text-xl font-semibold sm:text-2xl">{edu.degree}</h3>
                      <p className="text-accent mt-1 font-medium">{edu.field}</p>
                      <p className="mt-3 font-medium">
                        {edu.institution} <span className="text-muted">({edu.shortName})</span>
                      </p>
                      <p className="text-muted mt-1 flex items-center gap-1.5 text-sm">
                        <MapPin className="size-4" aria-hidden />
                        {edu.location}
                      </p>
                      <p className="text-muted mt-4 leading-relaxed">{edu.description}</p>
                      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Areas of study">
                        {edu.focus.map((f) => (
                          <li key={f} className="bg-card border-accent/15 rounded-full border px-3 py-1 text-xs">
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
