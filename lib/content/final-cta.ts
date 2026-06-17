import { FORGE_URL } from "./product-urls";

export const finalCtaContent = {
  title: "Build the Future of Physical AI Systems",
  description:
    "Accelerate the journey from synthetic worlds to real-world deployment with a platform designed for continuous learning, adaptation, and scale.",
  ctas: [
    { label: "Get Started", href: FORGE_URL, variant: "default" as const },
  ],
} as const;
