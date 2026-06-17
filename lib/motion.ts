import type { Transition, Variants } from "framer-motion";

export const easeOut = [0.32, 0.72, 0, 1] as const;

export const defaultTransition: Transition = {
  duration: 0.55,
  ease: easeOut,
};

export const viewport = {
  once: true,
  margin: "-60px",
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};
