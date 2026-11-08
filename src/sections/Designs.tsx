"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, FileText, X } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { designs, type Design } from "@/data/designs";
import { cn } from "@/lib/utils";

type Filter = "All" | Design["category"];
// Filter buttons are created from the categories that actually have items.
const filters: Filter[] = ["All", ...new Set(designs.map((d) => d.category))];
/** "slides" for presentations, "pages" for everything else */
const unit = (d: Design) => (d.category === "PowerPoint Slides" ? "slides" : "pages");

export function Designs() {
  const [filter, setFilter] = useState<Filter>("All");
  // Index (in the filtered list) of the design shown full-size, or null.
  const [open, setOpen] = useState<number | null>(null);

  const visible = filter === "All" ? designs : designs.filter((d) => d.category === filter);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length],
  );

  // Keyboard controls for the full-size viewer + stop the page scrolling behind it.
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  const current = open === null ? null : visible[open];

  return (
    <section id="designs" className="relative overflow-hidden py-24 sm:py-32">
      <div className="bg-maroon/15 absolute top-1/4 -left-40 size-120 rounded-full blur-[140px]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Design Work"
          title="Designs &"
          highlight="documents"
          description="Posters, social media posts, Microsoft Word documents and PowerPoint presentations I have created. Click any item to see it full size."
        />

        {/* Category filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter designs">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition",
                filter === f
                  ? "bg-maroon border-accent/40 text-white shadow-[0_8px_24px_-10px_rgb(128_0_32/1)]"
                  : "border-accent/20 text-muted hover:border-accent/50 hover:text-white",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry-style gallery (keeps each design's real shape) */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {visible.map((d, i) => (
            <Reveal key={d.image} delay={(i % 3) * 0.08} className="mb-6 break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group glass hover:border-accent/50 relative block w-full overflow-hidden rounded-3xl text-left transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgb(128_0_32/0.9)]"
                aria-label={`View ${d.title} full size`}
              >
                <Image
                  src={d.image}
                  alt={d.title}
                  width={d.width}
                  height={d.height}
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
                />
                {/* Hover overlay */}
                <div className="from-ink/95 via-ink/40 absolute inset-0 flex flex-col justify-end bg-linear-to-t to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="text-accent-soft text-xs font-semibold tracking-wider uppercase">{d.category}</span>
                  <span className="font-display mt-1 text-lg font-semibold">{d.title}</span>
                </div>
                {d.file && (
                  <span className="bg-ink/85 border-accent/40 text-accent-soft absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur">
                    <FileText className="size-3.5" aria-hidden />
                    PDF{d.pages ? ` · ${d.pages} ${unit(d)}` : ""}
                  </span>
                )}
                <span className="bg-ink/70 border-accent/30 absolute top-3 right-3 flex size-9 items-center justify-center rounded-full border opacity-0 backdrop-blur transition group-hover:opacity-100" aria-hidden>
                  <Expand className="size-4" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Full-size viewer */}
      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-ink/95 fixed inset-0 z-60 flex flex-col items-center justify-center p-4 backdrop-blur-md sm:p-8"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="glass absolute top-4 right-4 z-10 flex size-11 items-center justify-center rounded-full hover:bg-maroon/50"
            >
              <X className="size-5" aria-hidden />
            </button>

            {visible.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); step(-1); }}
                  aria-label="Previous design"
                  className="glass absolute left-2 z-10 flex size-11 items-center justify-center rounded-full hover:bg-maroon/50 sm:left-6"
                >
                  <ChevronLeft className="size-5" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); step(1); }}
                  aria-label="Next design"
                  className="glass absolute right-2 z-10 flex size-11 items-center justify-center rounded-full hover:bg-maroon/50 sm:right-6"
                >
                  <ChevronRight className="size-5" aria-hidden />
                </button>
              </>
            )}

            <motion.div
              key={current.image}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative flex max-h-full flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={current.image}
                alt={current.title}
                width={current.width}
                height={current.height}
                sizes="90vw"
                className="h-auto max-h-[78vh] w-auto rounded-2xl object-contain shadow-2xl"
              />
              <div className="mt-4 max-w-xl text-center">
                <p className="text-accent text-xs font-semibold tracking-wider uppercase">{current.category}</p>
                <h3 className="font-display mt-1 text-lg font-semibold">{current.title}</h3>
                <p className="text-muted mt-1 text-sm">{current.description}</p>
                {current.file && (
                  <a
                    href={current.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="from-maroon to-burgundy mt-4 inline-flex items-center gap-2 rounded-full bg-linear-to-r px-5 py-2.5 text-sm font-semibold shadow-[0_10px_28px_-10px_rgb(128_0_32/1)] transition hover:-translate-y-0.5"
                  >
                    <FileText className="size-4" aria-hidden />
                    View full PDF{current.pages ? ` (${current.pages} ${unit(current)})` : ""}
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
