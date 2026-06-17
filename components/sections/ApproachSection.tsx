"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  defaultTransition,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";

type StepRole = "featured" | "featured-bottom" | "card";

type Step = {
  title: string;
  description: string;
  href?: string;
  role?: StepRole;
  media?: {
    type: "image" | "video";
    src: string;
    alt?: string;
  };
};

type ApproachSectionProps = {
  badge: string;
  title: string;
  description: string;
  steps: readonly Step[];
};

const card = "surface-panel overflow-hidden rounded-2xl";

function StepMedia({ step }: { step: Step }) {
  if (!step.media) {
    return (
      <div className="flex h-full min-h-[200px] w-full items-center justify-center bg-brand-black">
        <div className="h-14 w-14 rounded-lg border border-brand-white/10 bg-brand-white/[0.04]" />
      </div>
    );
  }

  if (step.media.type === "video") {
    return (
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      >
        <source src={step.media.src} type="video/mp4" />
      </video>
    );
  }

  return (
    <img
      src={step.media.src}
      alt={step.media.alt ?? step.title}
      className="h-full w-full object-cover"
      loading="lazy"
    />
  );
}

function StepLink({ step }: { step: Step }) {
  if (!step.href) return null;

  return (
    <Link
      href={step.href}
      className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-black transition-colors hover:text-brand-black/65"
    >
      Explore {step.title.toLowerCase()}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

function FeaturedPanel({
  step,
  reversed = false,
}: {
  step: Step;
  reversed?: boolean;
}) {
  return (
    <motion.article variants={staggerItem} className={card}>
      <div
        className={cn(
          "grid md:grid-cols-2",
          reversed && "md:[&>*:first-child]:order-2",
        )}
      >
        <div className="min-h-[240px] bg-brand-black md:min-h-[360px]">
          <StepMedia step={step} />
        </div>
        <div
          className={cn(
            "flex flex-col justify-center px-8 py-10 md:px-12 md:py-14 lg:px-16",
            reversed && "md:order-1",
          )}
        >
          <h3 className="text-3xl font-normal leading-[1.15] tracking-tight text-brand-black md:text-4xl lg:text-[2.65rem]">
            {step.title}
          </h3>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--brand-muted-light)] md:text-[1.05rem]">
            {step.description}
          </p>
          <StepLink step={step} />
        </div>
      </div>
    </motion.article>
  );
}

function StackCard({ step }: { step: Step }) {
  const body = (
    <motion.article
      variants={staggerItem}
      className={cn(card, "flex h-full flex-col")}
    >
      <div className="aspect-[16/10] bg-brand-black">
        <StepMedia step={step} />
      </div>
      <div className="flex flex-1 flex-col px-6 py-7 md:px-8 md:py-9">
        <h3 className="text-2xl font-normal tracking-tight text-brand-black md:text-[1.65rem]">
          {step.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--brand-muted-light)] md:text-base">
          {step.description}
        </p>
        {step.href && (
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-black">
            Explore {step.title.toLowerCase()}
            <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </div>
    </motion.article>
  );

  if (!step.href) return body;

  return (
    <Link href={step.href} className="block h-full focus-visible:outline-none">
      {body}
    </Link>
  );
}

export function ApproachSection({
  badge,
  title,
  description,
  steps,
}: ApproachSectionProps) {
  const featured = steps.find((s) => s.role === "featured") ?? steps[0];
  const cards = steps.filter((s) => s.role === "card");
  const closing = steps.find((s) => s.role === "featured-bottom");

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...defaultTransition, duration: 0.65 }}
      className="section-band-surface py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={staggerItem}
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
          >
            {badge}
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mt-4 text-base leading-relaxed text-muted md:text-lg"
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-12 space-y-6 md:mt-14 md:space-y-8"
        >
          {featured && <FeaturedPanel step={featured} />}

          {cards.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              {cards.map((step) => (
                <StackCard key={step.title} step={step} />
              ))}
            </div>
          )}

          {closing && <FeaturedPanel step={closing} reversed />}
        </motion.div>
      </div>
    </motion.section>
  );
}
