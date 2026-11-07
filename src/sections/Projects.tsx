import Image from "next/image";
import { ExternalLink, FolderGit2, Plus } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { GithubIcon } from "@/components/BrandIcons";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-32">
      <div className="bg-burgundy/15 absolute right-0 bottom-0 size-[30rem] rounded-full blur-[140px]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've"
          highlight="built"
          description="A selection of my work. More projects are on the way as I keep learning and building."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const isExternal = project.liveUrl?.startsWith("http");
            return (
              <Reveal key={project.title} delay={i * 0.1} className="h-full">
                <article className="glass group hover:border-accent/40 flex h-full flex-col overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgb(128_0_32/0.8)]">
                  {/* Preview */}
                  <div className="from-maroon-deep via-burgundy to-maroon relative aspect-video overflow-hidden bg-gradient-to-br">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        fill
                        sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="bg-grid flex size-full items-center justify-center">
                        <span className="font-display text-5xl font-bold text-white/90 drop-shadow-lg transition duration-500 group-hover:scale-110">
                          {siteConfig.initials}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display flex items-center gap-2 text-xl font-semibold">
                      <FolderGit2 className="text-accent size-5 shrink-0" aria-hidden />
                      {project.title}
                    </h3>
                    <p className="text-muted mt-3 flex-1 text-sm leading-relaxed">{project.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                      {project.tags.map((tag) => (
                        <li key={tag} className="bg-maroon/25 border-accent/20 text-accent-soft rounded-full border px-3 py-1 text-xs">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <div className="border-accent/10 mt-6 flex gap-3 border-t pt-5">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                          className="bg-maroon hover:bg-burgundy inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition"
                        >
                          <ExternalLink className="size-4" aria-hidden />
                          Live Demo
                        </a>
                      )}
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-accent/30 hover:bg-maroon/30 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition"
                        >
                          <GithubIcon className="size-4" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}

          {/* "More coming soon" card */}
          <Reveal delay={projects.length * 0.1} className="h-full">
            <div className="border-accent/25 flex h-full min-h-72 flex-col items-center justify-center rounded-3xl border-2 border-dashed p-8 text-center">
              <span className="bg-maroon/25 text-accent flex size-14 items-center justify-center rounded-2xl">
                <Plus className="size-7" aria-hidden />
              </span>
              <h3 className="font-display mt-5 text-lg font-semibold">More projects coming soon</h3>
              <p className="text-muted mt-2 max-w-xs text-sm">
                I&apos;m currently working on new projects. Follow me on GitHub to see what I build next.
              </p>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-soft mt-5 inline-flex items-center gap-2 text-sm font-medium transition"
              >
                <GithubIcon className="size-4" />
                Visit my GitHub
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
