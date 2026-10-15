import { motion } from "framer-motion";
import type { ReactNode } from "react";
import logo from "@/assets/ocrepino-logo.png";

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
  return <img src={logo} alt="Ôcrepino" width={1485} height={484} className={`h-10 w-auto object-contain ${className}`} />;
}
