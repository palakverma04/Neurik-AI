"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "./SectionWrapper";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { defaultTransition, easeOut, scaleIn } from "@/lib/motion";

type CTA = {
  label: string;
  href: string;
  variant: "default" | "outline";
};

type FinalCTAProps = {
  title: string;
  description: string;
  ctas: readonly CTA[];
  tone?: "default" | "light";
};

export function FinalCTA({
  title,
  description,
  ctas,
  tone = "default",
}: FinalCTAProps) {
  const isLight = tone === "light";

  return (
    <SectionWrapper tone={isLight ? "light" : "default"}>
      <Reveal>
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ ...defaultTransition, duration: 0.7 }}
          whileHover={isLight ? { scale: 1.005 } : undefined}
          className={cn(
            "relative overflow-hidden rounded-2xl p-12 text-center md:p-16",
            isLight
              ? "section-inset-dark"
              : "glass-panel transition-[border-color,box-shadow] duration-500 hover:border-foreground/25 hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_20px_56px_rgb(0_0_0/0.45),0_0_48px_rgb(255_255_255/0.06)]",
          )}
        >
          {!isLight && (
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
              <motion.div
                animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-brand-white/[0.08] blur-3xl"
              />
              <motion.div
                animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-brand-white/[0.06] blur-3xl"
              />
            </div>
          )}

          <div
            className={cn(
              "pointer-events-none absolute inset-0 opacity-50",
              isLight ? "grid-bg-olive" : "grid-bg",
            )}
          />
          {!isLight && (
            <>
              <div className="pointer-events-none absolute inset-0 bg-brand-white/[0.03]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-white/30 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-white/20 to-transparent" />
            </>
          )}

          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold md:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              {description}
            </p>
            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...defaultTransition, delay: 0.2 }}
            >
              {ctas.map((cta) => (
                <motion.div
                  key={cta.label}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: easeOut }}
                >
                  <Button
                    href={cta.href}
                    variant={cta.variant}
                    size="lg"
                    className={
                      isLight && cta.variant === "default"
                        ? "bg-brand-black text-brand-white hover:bg-brand-black/90"
                        : undefined
                    }
                  >
                    {cta.label}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Reveal>
    </SectionWrapper>
  );
}
