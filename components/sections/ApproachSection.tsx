"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "./SectionWrapper";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = {
  title: string;
  description: string;
  media?: {
    type: "image" | "video";
    src: string;
    alt?: string;
  };
  tone?: "mint" | "slate" | "sky" | "sand";
};

type ApproachSectionProps = {
  badge: string;
  title: string;
  description: string;
  steps: readonly Step[];
};

const toneStyles: Record<
  NonNullable<Step["tone"]>,
  { bg: string; pattern: string; accent: string }
> = {
  mint: {
    bg: "bg-[#1a2420]",
    pattern:
      "repeating-linear-gradient(0deg, rgba(120,200,160,0.08) 0px, rgba(120,200,160,0.08) 1px, transparent 1px, transparent 10px)",
    accent: "text-[#8fd4b0]",
  },
  slate: {
    bg: "bg-[#1e1e22]",
    pattern:
      "repeating-linear-gradient(0deg, rgba(180,180,190,0.07) 0px, rgba(180,180,190,0.07) 1px, transparent 1px, transparent 10px)",
    accent: "text-[#b8b8c4]",
  },
  sky: {
    bg: "bg-[#1a2028]",
    pattern:
      "repeating-linear-gradient(0deg, rgba(120,160,210,0.08) 0px, rgba(120,160,210,0.08) 1px, transparent 1px, transparent 10px)",
    accent: "text-[#8eb8e8]",
  },
  sand: {
    bg: "bg-[#24201a]",
    pattern:
      "repeating-linear-gradient(0deg, rgba(210,180,130,0.08) 0px, rgba(210,180,130,0.08) 1px, transparent 1px, transparent 10px)",
    accent: "text-[#d4b888]",
  },
};

const defaultTones: NonNullable<Step["tone"]>[] = [
  "mint",
  "slate",
  "sky",
  "sand",
];

function StepVisual({ step }: { step: Step }) {
  if (!step.media) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-24 w-24 rounded-2xl border border-foreground/10 bg-foreground/[0.04]" />
      </div>
    );
  }

  if (step.media.type === "video") {
    return (
      <video
        className="h-full w-full object-cover opacity-80"
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
      className="h-full w-full object-cover opacity-80"
      loading="lazy"
    />
  );
}

export function ApproachSection({
  badge,
  title,
  description,
  steps,
}: ApproachSectionProps) {
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper className="bg-foreground/[0.02]">
      <div className="mx-auto max-w-3xl text-center">
        <Badge>{badge}</Badge>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{title}</h2>
        <p className="mt-4 text-base text-muted leading-relaxed md:text-lg">
          {description}
        </p>
      </div>

      <div className="mt-12 md:mt-14">
        <div
          className="flex h-[420px] gap-3 overflow-x-auto pb-2 snap-x snap-mandatory md:h-[460px] md:overflow-visible md:pb-0"
          onMouseLeave={() => setActive(0)}
        >
          {steps.map((step, index) => {
            const isActive = active === index;
            const tone = step.tone ?? defaultTones[index % defaultTones.length];
            const styles = toneStyles[tone];

            return (
              <motion.button
                key={step.title}
                type="button"
                layout
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                aria-expanded={isActive}
                aria-label={`${step.title}: ${step.description}`}
                className={cn(
                  "group relative shrink-0 snap-center overflow-hidden rounded-2xl border border-surface-border text-left transition-colors hover:border-foreground/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40",
                  styles.bg,
                  isActive
                    ? "w-[min(88vw,640px)] md:flex-[2.8] md:min-w-0"
                    : "w-[72px] md:w-[88px] md:flex-[0.45] md:min-w-0"
                )}
                transition={{
                  layout: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-60"
                  style={{ backgroundImage: styles.pattern }}
                />

                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="relative flex h-full flex-col"
                    >
                      <div className="absolute inset-0 overflow-hidden">
                        <StepVisual step={step} />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" />
                        <span
                          className={cn(
                            "absolute left-5 top-5 font-mono text-xs tracking-widest",
                            styles.accent
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="relative mt-auto p-5 md:p-6">
                        <h3 className="font-display text-2xl text-foreground md:text-3xl">
                          {step.title}
                        </h3>
                        <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted md:text-base">
                          {step.description}
                        </p>
                        <span
                          className={cn(
                            "mt-3 inline-flex items-center gap-2 text-sm font-medium",
                            styles.accent
                          )}
                        >
                          Step {index + 1} of {steps.length}
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="relative flex h-full items-end justify-center p-4"
                    >
                      <span
                        className={cn(
                          "font-display text-sm tracking-wide [writing-mode:vertical-rl] rotate-180 whitespace-nowrap",
                          styles.accent
                        )}
                      >
                        {step.title}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
