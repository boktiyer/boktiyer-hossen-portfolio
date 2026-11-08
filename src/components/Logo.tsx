import { siteConfig } from "@/data/site";

/** The "BH" monogram used in the navbar and footer. */
export function Logo() {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label={`${siteConfig.name} — home`}>
      <span className="from-maroon to-maroon-deep border-accent/40 font-display flex size-10 items-center justify-center rounded-xl border bg-linear-to-br text-sm font-bold shadow-[0_0_20px_-4px_rgb(128_0_32/0.9)] transition group-hover:rotate-6">
        {siteConfig.initials}
      </span>
      <span className="font-display hidden text-lg font-semibold tracking-tight sm:block">
        {siteConfig.name}
        <span className="text-accent">.</span>
      </span>
    </a>
  );
}
