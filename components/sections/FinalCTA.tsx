"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "./SectionWrapper";
import { Reveal } from "@/components/motion/Reveal";
import { finalCtaContent } from "@/lib/content/final-cta";
import { defaultTransition, easeOut, scaleIn } from "@/lib/motion";

export function FinalCTA() {
  const { title, description, ctas } = finalCtaContent;

  return (
    <SectionWrapper tone="light">
      <Reveal>
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ ...defaultTransition, duration: 0.7 }}
          whileHover={{ scale: 1.005 }}
          className="section-inset-dark relative overflow-hidden rounded-2xl p-12 text-center md:p-16"
        >
          <div className="pointer-events-none absolute inset-0 grid-bg-olive opacity-50" />

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
                      cta.variant === "default"
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
