"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { defaultTransition } from "@/lib/motion";

type SectionTone = "default" | "light" | "alt" | "surface";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: SectionTone;
  animate?: boolean;
};

const toneClasses: Record<SectionTone, string> = {
  default: "section-band-default",
  light: "section-band-light",
  alt: "section-band-alt",
  surface: "section-band-surface",
};

export function SectionWrapper({
  children,
  className,
  id,
  tone = "default",
  animate = true,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={animate ? { opacity: 0, y: 32 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...defaultTransition, duration: 0.65 }}
      className={cn("py-24 md:py-32", toneClasses[tone], className)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </motion.section>
  );
}
