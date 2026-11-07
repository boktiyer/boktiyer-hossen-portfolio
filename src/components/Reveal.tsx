"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Direction the element slides in from */
  from?: "bottom" | "left" | "right";
};

const offsets = {
  bottom: { x: 0, y: 32 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
};

/** Fades + slides its children into view when they scroll onto the screen. */
export function Reveal({ children, className, delay = 0, from = "bottom" }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
