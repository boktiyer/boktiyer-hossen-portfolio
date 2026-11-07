import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
};

/** The small label + big title shown at the top of every section. */
export function SectionHeading({ eyebrow, title, highlight, description }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="text-accent mb-3 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase">
        <span className="bg-accent/60 h-px w-8" aria-hidden />
        {eyebrow}
        <span className="bg-accent/60 h-px w-8" aria-hidden />
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-muted mt-4 text-base leading-relaxed sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
