import { FORGE_URL } from "./product-urls";

export const homepageContent = {
  hero: {
    title: "The Nervous System for Physical AI",
    subtitle:
      "Eliminating physical hallucinations through deterministic, physics-grounded autonomy.",
    backgroundVideo: "/0615.mp4",
  },
  approach: {
    badge: "Our Approach",
    title: "Unified Platform for Physical AI",
    description:
      "Build, train, simulate, and deploy intelligent systems that continuously adapt to the real world.",
    steps: [
      {
        title: "Generate",
        description: "Create physics-accurate synthetic environments.",
        media: { type: "video", src: "/platform/forge.mp4", alt: "Synthetic simulation" },
        tone: "mint",
      },
      {
        title: "Train",
        description: "Train segmentation and action models.",
        media: { type: "image", src: "/platform/sentinel.png", alt: "Model training" },
        tone: "slate",
      },
      {
        title: "Deploy",
        description:
          "Accelerate training and inference across GPUs, TPUs, ASICs, CPUs, and NPUs.",
        media: { type: "video", src: "/platform/runtime.mp4", alt: "Edge deployment" },
        tone: "sky",
      },
      {
        title: "Adopt",
        description: "Improved QAFT, Kernel Coding Agent",
        media: { type: "image", src: "/platform/dual-view.png", alt: "Live adaptation" },
        tone: "sand",
      },
    ],
  },
  platform: {
    badge: "Platform Overview",
    title: "The Complete Physical AI Stack",
    description:
      "A unified platform for synthetic data generation, model training, simulation, and edge deployment.",
    components: [
      {
        name: "Forge",
        tagline: "Physics-Infused Synthetic Data Generation",
        description:
          "Generate thousands of training scenarios from minimal real-world telemetry.",
        href: "/products/forge",
        tryHref: FORGE_URL,
        layer: "Synthetic data",
        bento: "featured",
      },
      {
        name: "Sentinel",
        tagline: "Domain-Specific Model Development",
        description:
          "Develop, retrain, and optimize perception and action models for industrial environments.",
        href: "/products/sentinel",
        layer: "Model training",
        bento: "standard",
      },
      {
        name: "Runtime",
        tagline: "Heterogeneous Edge Orchestration",
        description: "Deploy seamlessly across CPUs, GPUs, and NPUs.",
        href: "/products/runtime",
        layer: "Edge deployment",
        bento: "standard",
      },
      {
        name: "Dual-View Intelligence",
        tagline: "Supervisory awareness combined with real-time robotic execution.",
        description:
          "Global monitoring synchronized with local robot execution — two intelligence layers, one coordinated stack.",
        href: "/products/dual-view-intelligence",
        layer: "Supervisory control",
        bento: "wide",
      },
    ],
  },
  finalCta: {
    title: "Build the Future of Autonomous Systems",
    description:
      "Accelerate the journey from synthetic worlds to real-world deployment with a platform designed for continuous learning, adaptation, and scale.",
    ctas: [
      { label: "Get Started", href: FORGE_URL, variant: "default" as const },
    ],
  },
} as const;
