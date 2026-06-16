export const technologyContent = {
  hero: {
    badge: "Technology",
    title: "A Software Nervous System for Physical AI",
    description:
      "Our platform enables machines to continuously perceive, learn, and adapt by combining synthetic world generation, domain-specific intelligence, and real-time deployment infrastructure.",
  },
  components: [
    {
      name: "Forge",
      description: "Physics-Infused Synthetic Data Generation",
      href: "/products/forge",
    },
    {
      name: "Sentinel",
      description: "Domain-Specific Model Development",
      href: "/products/sentinel",
    },
    {
      name: "Runtime",
      description: "Heterogeneous Edge Orchestration",
      href: "/products/runtime",
    },
    {
      name: "Dual-View Intelligence",
      description: "Supervisory + Robot execution layers",
      href: "/products/dual-view-intelligence",
    },
  ],
  hardware: {
    title: "Supported Hardware",
    platforms: ["CPU", "GPU", "NPU"],
    description:
      "Deploy seamlessly across heterogeneous compute architectures without requiring specialized rewrites.",
  },
} as const;
