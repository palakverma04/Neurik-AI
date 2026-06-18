export type ProductFeature = {
  title: string;
  description: string;
  capabilities?: string[];
  applications?: string[];
  benefits?: string[];
  impact?: string;
  capabilitiesLabel?: string;
  applicationsLabel?: string;
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
  workflowTitle?: string;
  workflowDescription?: string;
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
  showcaseVideo?: string | readonly string[];
};

import { FORGE_URL } from "./product-urls";

export const products: Record<string, Product> = {
  forge: {
    slug: "forge",
    name: "Forge",
    tagline: "Physics-Infused Synthetic Data Generation",
    tryHref: FORGE_URL,
    showcaseVideo: "/platform/forge.mp4",
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
      "Reduction in Data Collection Costs",
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
    relatedProducts: ["sentinel", "axion"],
  },
  sentinel: {
    slug: "sentinel",
    name: "Sentinel",
    tagline: "Domain-Specific Intelligence for Physical AI",
    showcaseVideo: [
      "/platform/training-progress.mp4",
      "/platform/val-seg-loss-progress.mp4",
    ],
    description:
      "Develops and continuously retrains perception and action models for real-world industrial environments.",
    extendedDescription:
      "Built for resource-constrained edge hardware — segmentation, predictive world modeling, and autonomous action in one framework.",
    valueProposition: {
      description: "Increasing the F1 score of baseline models",
      from: "18%",
      to: "92%+",
      metric: "F1 score",
      proof: "Proven with top-tier robotic OEMs",
    },
    features: [
      {
        title: "Advanced Segmentation Models",
        description:
          "High-fidelity spatial understanding at real-time speed on edge hardware — built for industrial environments.",
        capabilities: [
          "Environmental Understanding",
          "Pixel-Level Classification",
          "Obstacle Detection",
          "Spatial Mapping",
          "Path Identification",
          "Volumetric Scene Understanding",
        ],
        applications: [
          "Quality Inspection",
          "Surface Defect Detection",
          "Warehouse Monitoring",
          "Industrial Automation",
        ],
      },
      {
        title: "Kinetic Action Models",
        description:
          "Low-latency control systems that ingest visual, spatial, and telemetry data — turning perception into action in dynamic environments.",
        capabilities: [
          "Motion Planning",
          "Robot Manipulation",
          "Spatial Reasoning",
          "Autonomous Navigation",
          "Real-Time Decision Making",
        ],
      },
      {
        title: "JEPA-Powered World Models",
        description:
          "Joint Embedding Predictive Architectures (JEPA) build predictive representations of environments — anticipating future states instead of reacting only to the current frame.",
        capabilities: [
          "Predictive World Modeling",
          "Environment Forecasting",
          "Context-Aware Decision Making",
          "Long-Horizon Planning",
          "Physical State Understanding",
        ],
        impact:
          "Reason about what happens next — not just what is visible now.",
      },
      {
        title: "Vision-Language-Action Models (VLA)",
        description:
          "Connect perception, language, and execution — robots interpret instructions, understand surroundings, and act autonomously.",
        capabilities: [
          "Instruction-Based Robotics",
          "Task Planning",
          "Multi-Modal Understanding",
          "Adaptive Action Generation",
          "Autonomous Execution",
        ],
        impact:
          "Bridge general intelligence and real-world physical action.",
      },
      {
        title: "Quantization-Aware Fine-Tuning (QAFT)",
        description:
          "Inject quantization behavior into training so models ship ready for deployment hardware.",
        benefits: [
          "Up to 75% Memory Reduction",
          "Edge Deployment Readiness",
          "Reduced Latency",
          "Hardware-Aware Optimization",
          "Accuracy Preservation Across INT8 and INT4 Deployments",
        ],
      },
    ],
    relatedProducts: ["forge", "axion", "dual-view-intelligence"],
  },
  axion: {
    slug: "axion",
    name: "Axion",
    tagline: "Heterogeneous Edge Orchestration",
    subtitle: "Unified Deployment Across Any Hardware Environment",
    description:
      "Axion coordinates workloads across heterogeneous compute architectures without requiring specialized rewrites.",
    supportedPlatforms: ["CPU", "GPU", "NPU"],
    capabilities: [
      "Real-Time Inference",
      "Multi-Camera Processing",
      "Hardware Orchestration",
      "Low-Latency Execution",
      "Fleet Deployment",
      "Monitoring and Telemetry",
    ],
    relatedProducts: ["sentinel"],
  },
  "dual-view-intelligence": {
    slug: "dual-view-intelligence",
    name: "Dual-View Intelligence",
    tagline: "Global Awareness. Local Action.",
    description:
      "Axion operates through two synchronized intelligence layers.",
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
    relatedProducts: ["axion", "sentinel"],
  },
};

export const productSlugs = Object.keys(products);

export function getProduct(slug: string): Product | undefined {
  return products[slug];
}
