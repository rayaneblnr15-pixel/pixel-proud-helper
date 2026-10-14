import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 text-2xl font-semibold lowercase tracking-tight ${className}`}>
      leafwise
      <svg viewBox="0 0 24 24" className="h-4 w-4 -translate-y-1.5" aria-hidden="true" fill="currentColor">
        <path d="M20 4C10 4 4 9 4 16c0 1.5.3 2.8.8 4 .9-4 3.7-7.6 8.2-9.5-3.6 2.4-5.8 5.6-6.6 9.3C7.9 20.6 9.4 21 11 21c7 0 10-7 9-17z" />
      </svg>
    </span>
  );
}
