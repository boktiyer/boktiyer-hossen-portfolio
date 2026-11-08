import { GraduationCap, MapPin, Code2, Palette, Mail } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/site";
import { skillCategories, totalSkills } from "@/data/skills";

const facts = [
  { icon: GraduationCap, label: "Education", value: "BSc in CSE · PCIU" },
  { icon: MapPin, label: "Location", value: siteConfig.location },
  { icon: Mail, label: "Email", value: siteConfig.email },
];

const stats = [
  { value: "2nd", label: "Year of CSE" },
  { value: `${skillCategories.length}`, label: "Skill areas" },
  { value: `${totalSkills}`, label: "Skills & tools" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Get to know"
          highlight="me"
          description="A CSE student who loves turning ideas into clean websites and beautiful designs."
        />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal from="left" className="glass rounded-3xl p-8 sm:p-10">
            <h3 className="font-display text-2xl font-semibold">
              Developer by passion, <span className="text-accent">designer</span> by heart.
            </h3>
            <div className="text-muted mt-6 space-y-4 leading-relaxed">
              <p>
                I&apos;m <strong className="text-white">Boktiyer Hossen</strong>, a 2nd year
                Computer Science &amp; Engineering student at Port City International University
                (PCIU). I enjoy building websites that are fast, responsive and easy to use.
              </p>
              <p>
                On the development side, I work with HTML5, CSS3, JavaScript, React.js, Next.js
                and Tailwind CSS. On the creative side, I design posters, social media graphics
                and presentations in Canva, and I create professionally formatted documents and
                presentations with Microsoft Word and PowerPoint.
              </p>
              <p>
                I&apos;m always learning, and I&apos;m excited to work on projects where good code
                and good design come together.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="bg-maroon/30 border-accent/20 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
                <Code2 className="text-accent size-4" aria-hidden /> Frontend Development
              </span>
              <span className="bg-maroon/30 border-accent/20 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
                <Palette className="text-accent size-4" aria-hidden /> Creative Design
              </span>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal from="right">
              <ul className="glass divide-accent/10 divide-y rounded-3xl px-6">
                {facts.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-center gap-4 py-5">
                    <span className="from-maroon to-maroon-deep flex size-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-muted text-xs tracking-wider uppercase">{label}</p>
                      <p className="font-medium break-all">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal from="right" delay={0.1}>
              <dl className="grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="glass flex flex-col-reverse rounded-2xl p-4 text-center">
                    <dt className="text-muted mt-1 text-xs">{s.label}</dt>
                    <dd className="font-display text-gradient text-3xl font-bold">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
