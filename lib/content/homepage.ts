export const homepageContent = {
  hero: {
    title: "The Nervous System for Physical AI",
    subtitle:
      "Eliminating physical hallucinations through deterministic, physics-grounded autonomy.",
    backgroundVideo: "/0615.mp4",
  },
  marquee: [
    "Synthetic Data",
    "Simulation",
    "Robotics",
    "Perception",
    "Edge Deploy",
    "Machine Tending",
    "Autonomy",
    "Physical AI",
    "Model Training",
    "Industrial Automation",
  ],
  approach: {
    badge: "Our Approach",
    title: "Unified Platform for Physical AI",
    description:
      "Build, train, simulate, and deploy intelligent systems that continuously adapt to the real world.",
    steps: [
      {
        title: "Generate",
        description: "Create physics-accurate synthetic environments.",
        href: "/products/forge",
        role: "featured",
        media: { type: "video", src: "/platform/forge.mp4", alt: "Synthetic simulation" },
      },
      {
        title: "Train",
        description: "Train segmentation and action models.",
        href: "/products/sentinel",
        role: "card",
        media: { type: "image", src: "/platform/sentinel.png", alt: "Model training" },
      },
      {
        title: "Deploy",
        description:
          "Accelerate training and inference across GPUs, TPUs, ASICs, CPUs, and NPUs.",
        href: "/products/runtime",
        role: "card",
        media: { type: "video", src: "/platform/runtime.mp4", alt: "Edge deployment" },
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
        bento: "featured",
      },
      {
        name: "Sentinel",
        tagline: "Domain-Specific Model Development",
        description:
          "Develop, retrain, and optimize perception and action models for industrial environments.",
        href: "/products/sentinel",
        bento: "standard",
      },
      {
        name: "Runtime",
        tagline: "Heterogeneous Edge Orchestration",
        description: "Deploy seamlessly across CPUs, GPUs, and NPUs.",
        href: "/products/runtime",
        bento: "standard",
      },
    ],
  },
} as const;
