"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionTone = "default" | "light" | "alt";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: SectionTone;
};

const toneClasses: Record<SectionTone, string> = {
  default: "section-band-default",
  light: "section-band-light",
  alt: "section-band-alt",
};

export function SectionWrapper({
  children,
  className,
  id,
  tone = "default",
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn("py-24 md:py-32", toneClasses[tone], className)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </motion.section>
  );
}
