export type ProductFeature = {
  title: string;
  description: string;
  capabilities?: string[];
  benefits?: string[];
  capabilitiesLabel?: string;
  benefitsLabel?: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  subtitle?: string;
  description: string;
  extendedDescription?: string;
  capabilities?: string[];
  outcomes?: string[];
  benefits?: string[];
  features?: ProductFeature[];
  supportedPlatforms?: string[];
  workflow?: string[];
  supportedEnvironments?: string[];
  views?: {
    title: string;
    subtitle: string;
    responsibilitiesLabel?: string;
    responsibilitiesHeading?: string;
    responsibilities: string[];
    description: string;
  }[];
  valueProposition?: {
    description: string;
    from: string;
    to: string;
    metric?: string;
    proof: string;
    media?: {
      type: "image" | "video";
      src: string;
      alt?: string;
    };
  };
  relatedProducts?: string[];
  tryHref?: string;
  showcaseVideo?: string;
};

import { FORGE_URL } from "./product-urls";

export const products: Record<string, Product> = {
  forge: {
    slug: "forge",
    name: "Forge",
    tagline: "Physics-Infused Synthetic Data Generation",
    tryHref: FORGE_URL,
    showcaseVideo: "/Fabric-Neurik.mp4",
    description:
      "Forge uses physics-grounded simulation to create realistic training environments and edge-case scenarios without requiring extensive manual data collection.",
    extendedDescription:
      "When operational failures occur, minimal telemetry is used to generate thousands of corrective training scenarios automatically.",
    capabilities: [
      "Physics-Based Environment Modeling",
      "Synthetic Data Generation",
      "Scenario Variation Generation",
      "Environmental Randomization",
      "Rare Event Simulation",
      "Automated Dataset Expansion",
    ],
    outcomes: [
      "10x Reduction in Data Collection Costs",
      "Faster Model Iteration",
      "Improved Model Robustness",
      "Rapid Recovery from Edge Failures",
    ],
    features: [
      {
        title: "Automated Imitation Learning",
        description:
          "Forge transforms traditional data collection workflows into automated synthetic learning pipelines. Instead of waiting weeks to collect new training examples, synthetic environments are generated automatically to accelerate model improvement.",
      },
      {
        title: "Haptic Intelligence",
        description:
          "Forge extends beyond visual perception. By incorporating physics-grounded interaction modeling, autonomous systems can learn not only how environments appear, but how they behave during physical interaction.",
      },
    ],
    relatedProducts: ["sentinel", "runtime"],
  },
  sentinel: {
    slug: "sentinel",
    name: "Sentinel",
    tagline: "Domain-Specific Intelligence for Physical AI",
    description:
      "Sentinel develops and retrains specialized models optimized for real-world industrial environments.",
    valueProposition: {
      description: "Increasing the F1 score of baseline models",
      from: "18%",
      to: "92%+",
      metric: "F1 score",
      proof: "Proven with top-tier robotic OEMs",
    },
    features: [
      {
        title: "Kinetic Action Models",
        description:
          "Low-latency action systems designed for autonomous operation.",
        capabilities: [
          "Motion Planning",
          "Manipulation Intelligence",
          "Vision-Language-Action Models",
          "Autonomous Decision Making",
          "Spatial Reasoning",
        ],
      },
      {
        title: "Advanced Segmentation Models",
        description:
          "Designed for resource-constrained hardware while maintaining high-fidelity spatial awareness.",
        capabilities: [
          "Environmental Classification",
          "Spatial Mapping",
          "Obstacle Identification",
          "Path Segmentation",
          "Scene Understanding",
        ],
      },
      {
        title: "Predictive World Models",
        description:
          "Sentinel incorporates predictive architectures that help systems understand how environments evolve over time. This enables more reliable planning and decision making in dynamic physical environments.",
      },
      {
        title: "Quantization-Aware Fine-Tuning",
        description: "Optimize models directly for deployment hardware.",
        benefits: [
          "Reduced Memory Footprint",
          "Lower Latency",
          "Hardware-Aware Optimization",
          "Edge Deployment Readiness",
        ],
      },
    ],
    relatedProducts: ["forge", "runtime"],
  },
  runtime: {
    slug: "runtime",
    name: "Runtime",
    tagline: "Heterogeneous Edge Runtime",
    subtitle: "Unified Deployment Across Any Hardware Environment",
    description:
      "The Runtime coordinates workloads across heterogeneous compute architectures without requiring specialized rewrites.",
    supportedPlatforms: ["CPU", "GPU", "NPU"],
    capabilities: [
      "Real-Time Inference",
      "Multi-Camera Processing",
      "Hardware Orchestration",
      "Low-Latency Execution",
      "Fleet Deployment",
      "Monitoring and Telemetry",
    ],
    relatedProducts: ["dual-view-intelligence", "sentinel"],
  },
  "dual-view-intelligence": {
    slug: "dual-view-intelligence",
    name: "Dual-View Intelligence",
    tagline: "Global Awareness. Local Action.",
    description:
      "Our runtime operates through two synchronized intelligence layers.",
    views: [
      {
        title: "Supervisory View",
        subtitle: "Global Awareness Layer",
        responsibilitiesLabel:
          "A system-level intelligence layer responsible for:",
        responsibilities: [
          "Environment Monitoring",
          "Functional Safety",
          "Predictive Failure Detection",
          "Geo-Fencing",
          "Multi-Camera Scene Analysis",
          "Anomaly Detection",
        ],
        description:
          "Supervisory View provides continuous global awareness across the full robotic system.",
      },
    ],
    relatedProducts: ["runtime", "sentinel"],
  },
};

export const productSlugs = Object.keys(products);

export function getProduct(slug: string): Product | undefined {
  return products[slug];
}
