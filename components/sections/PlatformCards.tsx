"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionWrapper } from "./SectionWrapper";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "lucide-react";
import {
  easeOut,
  staggerContainer,
  staggerItem,
  viewport,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

type Component = {
  name: string;
  tagline: string;
  description: string;
  href: string;
};

type PlatformCardsProps = {
  badge: string;
  title: string;
  description: string;
  components: readonly Component[];
};

function PlatformBentoCard({
  component,
  index,
}: {
  component: Component;
  index: number;
}) {
  return (
    <motion.div
      variants={staggerItem}
      custom={index}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: easeOut }}
    >
      <Link
        href={component.href}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-xl border border-surface-border bg-foreground/[0.03] p-5 transition-[border-color,background-color,box-shadow] duration-300 hover:border-foreground/25 hover:bg-foreground/[0.05] hover:shadow-[0_12px_40px_rgb(0_0_0/0.35)] md:p-6",
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <h3
            className={cn(
              "font-display tracking-tight transition-transform duration-300 group-hover:translate-x-0.5",
              "text-xl md:text-2xl",
            )}
          >
            {component.name}
          </h3>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </div>

        <p
          className={cn(
            "mt-3 font-medium leading-snug text-foreground/85",
            "text-sm md:text-base",
          )}
        >
          {component.tagline}
        </p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {component.description}
        </p>
      </Link>
    </motion.div>
  );
}

export function PlatformCards({
  badge,
  title,
  description,
  components,
}: PlatformCardsProps) {
  return (
    <SectionWrapper tone="default" className="py-16 md:py-24" animate={false}>
      <Reveal className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {badge}
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted leading-relaxed">
          {description}
        </p>
      </Reveal>

      <motion.div
        className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {components.map((component, index) => (
          <PlatformBentoCard
            key={component.name}
            component={component}
            index={index}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
