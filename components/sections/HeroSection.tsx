"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  defaultTransition,
  easeOut,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";
import { ChevronDown } from "lucide-react";

type CTA = {
  label: string;
  href: string;
  variant: "default" | "outline";
};

type HeroSectionProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  secondarySubtitle?: string;
  description?: string;
  extendedDescription?: string;
  backgroundVideo?: string;
  ctas?: CTA[];
  pills?: string[];
  compact?: boolean;
  centered?: boolean;
};

export function HeroSection({
  badge,
  title,
  subtitle,
  secondarySubtitle,
  description,
  extendedDescription,
  backgroundVideo,
  ctas,
  pills,
  compact = false,
  centered = false,
}: HeroSectionProps) {
  const showScrollHint = !compact && backgroundVideo;

  return (
    <section
      className={`relative overflow-hidden ${compact ? "pt-20 pb-10 md:pt-28 md:pb-12" : "min-h-[90vh] flex items-center py-24 md:py-32"}`}
    >
      {backgroundVideo ? (
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: easeOut }}
            className="relative h-[min(74vh,720px)] w-full max-w-7xl overflow-hidden rounded-2xl border border-foreground/10 shadow-[0_20px_64px_rgba(0,0,0,0.4)]"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-background/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-background/25 to-background/55" />
          </motion.div>
        </div>
      ) : (
        <>
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/[0.03] via-transparent to-transparent" />
          <motion.div
            animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.08, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-foreground/[0.04] blur-3xl"
          />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className={`max-w-4xl ${centered ? "mx-auto text-center" : ""}`}
        >
          {badge && (
            <motion.div variants={staggerItem}>
              <Badge className={centered ? "mb-6 mx-auto" : "mb-6"}>
                {badge}
              </Badge>
            </motion.div>
          )}
          <motion.h1
            variants={staggerItem}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={staggerItem}
              className={`mt-6 text-xl md:text-2xl text-foreground/85 font-normal leading-snug max-w-2xl ${centered ? "mx-auto" : ""}`}
            >
              {subtitle}
            </motion.p>
          )}
          {secondarySubtitle && (
            <motion.p
              variants={staggerItem}
              className="mt-3 text-lg md:text-xl text-muted font-medium"
            >
              {secondarySubtitle}
            </motion.p>
          )}
          {pills && pills.length > 0 && (
            <motion.div
              variants={staggerItem}
              className={`mt-6 flex flex-wrap gap-2 ${centered ? "justify-center" : ""}`}
            >
              {pills.map((pill) => (
                <Badge key={pill} variant="secondary">
                  {pill}
                </Badge>
              ))}
            </motion.div>
          )}
          {description && (
            <motion.p
              variants={staggerItem}
              className={`mt-6 text-[1.05rem] text-muted leading-[1.7] max-w-3xl ${centered ? "mx-auto" : ""}`}
            >
              {description}
            </motion.p>
          )}
          {extendedDescription && (
            <motion.p
              variants={staggerItem}
              className={`mt-4 text-base text-muted/90 leading-[1.7] max-w-3xl ${centered ? "mx-auto" : ""}`}
            >
              {extendedDescription}
            </motion.p>
          )}
          {ctas && ctas.length > 0 && (
            <motion.div
              variants={staggerItem}
              className={`mt-10 flex flex-wrap gap-4 ${centered ? "justify-center" : ""}`}
            >
              {ctas.map((cta) => (
                <Button
                  key={cta.label}
                  href={cta.href}
                  variant={cta.variant}
                  size="lg"
                >
                  {cta.label}
                </Button>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {showScrollHint && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className={`absolute bottom-8 z-10 flex flex-col items-center gap-2 ${centered ? "left-1/2 -translate-x-1/2" : "left-6 lg:left-8"}`}
        >
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
            Scroll
          </span>
          <ChevronDown className="scroll-hint h-5 w-5 text-muted" />
        </motion.div>
      )}
    </section>
  );
}
