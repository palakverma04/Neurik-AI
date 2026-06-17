export const technologyContent = {
  hero: {
    badge: "Technology",
    title: "The Core Technologies Powering Physical AI",
    description:
      "Building reliable autonomous systems requires more than perception models. Our platform combines physics-grounded simulation, world modeling, hardware optimization, and edge-native intelligence to enable Physical AI that performs reliably in real-world environments.",
  },
  coreTechnologies: [
    {
      name: "Physics-Informed Neural Networks (PINNs)",
      subtitle: "Physics-Grounded Synthetic World Generation",
      description:
        "PINNs model the underlying physical behavior of environments. By embedding physical laws directly into neural networks, PINNs enable the generation of physics-accurate synthetic environments that capture how objects move, deform, interact, and respond to real-world forces.",
      capabilities: [
        "Physics-Based Environment Modeling",
        "Synthetic Data Generation",
        "Material Behavior Simulation",
        "Environmental Variations",
        "Rare Event Generation",
        "Real-World Constraint Modeling",
      ],
      impact:
        "Generate thousands of realistic training scenarios from minimal real-world telemetry while dramatically reducing manual data collection requirements.",
      href: "/products/forge",
    },
    {
      name: "Autonomous Kernel Agent",
      subtitle: "AI-Powered Hardware Optimization",
      description:
        "Modern AI systems must operate across diverse hardware architectures, including GPUs, NPUs, and edge accelerators. Our Autonomous Kernel Agent automatically develops, validates, benchmarks, and optimizes low-level compute kernels, eliminating the need for extensive manual hardware tuning.",
      workflow: ["Plan", "Build", "Validate", "Benchmark", "Debug"],
      capabilities: [
        "Automatic Kernel Generation",
        "Hardware-Aware Optimization",
        "CUDA & Triton Support",
        "NPU Acceleration",
        "Performance Benchmarking",
        "Self-Healing Compilation",
      ],
      impact:
        "Accelerate deployment across heterogeneous hardware while maximizing performance, efficiency, and throughput.",
      href: "/products/sentinel",
    },
    {
      name: "JEPA & Vision-Language-Action Models",
      subtitle: "From Perception to Autonomous Action",
      description:
        "Most AI systems understand what they see. Physical AI must understand what happens next. JEPA (Joint Embedding Predictive Architectures) enables predictive world modeling by learning how environments evolve over time. Combined with Vision-Language-Action (VLA) models, systems can reason about context, predict outcomes, and execute actions in dynamic environments.",
      capabilities: [
        "Predictive World Modeling",
        "Spatial Reasoning",
        "Task Planning",
        "Multi-Modal Understanding",
        "Robot Manipulation",
        "Autonomous Decision Making",
      ],
      impact:
        "Enable systems to move beyond perception and develop the ability to reason, plan, and act within the physical world.",
      href: "/products/runtime",
    },
    {
      name: "Quantization-Aware Fine-Tuning (QAFT)",
      subtitle: "Edge-Native Model Optimization",
      description:
        "Deploying advanced AI models at the edge requires balancing performance, memory consumption, and latency. QAFT injects hardware-specific quantization behavior directly into the training process, enabling models to maintain accuracy while operating efficiently on resource-constrained hardware.",
      capabilities: [
        "INT8 Optimization",
        "INT4 Optimization",
        "Memory Compression",
        "Hardware-Aware Training",
        "Low-Latency Inference",
        "Edge Deployment Optimization",
      ],
      impact:
        "Reduce model memory requirements by up to 75% while preserving production-grade accuracy and real-time performance.",
    },
  ],
  unifiedStack: {
    title: "Unified Physical AI Stack",
    description:
      "Together, PINNs, Autonomous Kernel Agents, JEPA & VLA architectures, and QAFT form the foundation of our Physical AI platform.",
    stages: [
      {
        name: "Generate",
        description: "Physics-grounded synthetic worlds with PINNs.",
      },
      {
        name: "Learn",
        description: "Predictive world models using JEPA and VLA architectures.",
      },
      {
        name: "Deploy",
        description: "Efficient edge execution with QAFT.",
      },
    ],
    conclusion:
      "The result is a complete software nervous system that enables autonomous systems to see, reason, act, and continuously adapt in the real world.",
  },
} as const;
