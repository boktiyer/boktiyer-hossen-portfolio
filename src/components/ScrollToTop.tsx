"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

/** Floating button that appears after scrolling down and jumps back to the top. */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#home"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className="bg-maroon hover:bg-burgundy border-accent/30 fixed right-5 bottom-5 z-40 flex size-12 items-center justify-center rounded-full border shadow-[0_10px_30px_-8px_rgb(128_0_32/1)] transition-colors sm:right-8 sm:bottom-8"
        >
          <ArrowUp className="size-5" aria-hidden />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
