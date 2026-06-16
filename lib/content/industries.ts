export type Industry = {
  slug: string;
  name: string;
  title: string;
  description: string;
  useCases: string[];
  benefits: string[];
  relatedProducts: string[];
};

export const industries: Record<string, Industry> = {
  fashion: {
    slug: "fashion",
    name: "Fashion",
    title: "AI Solutions for Fashion & Apparel",
    description:
      "Automate quality inspection, inventory tracking, product classification, and retail analytics.",
    useCases: [
      "Apparel Classification",
      "Product Tagging",
      "Fabric Defect Detection",
      "Inventory Management",
      "Visual Search",
      "Shelf Analytics",
    ],
    benefits: [
      "Reduce manual effort",
      "Improve inventory accuracy",
      "Increase operational efficiency",
    ],
    relatedProducts: ["forge", "sentinel"],
  },
  food: {
    slug: "food",
    name: "Food",
    title: "AI Solutions for Food Processing & Retail",
    description:
      "Improve food quality, packaging inspection, and operational efficiency using computer vision.",
    useCases: [
      "Packaging Inspection",
      "Shelf Monitoring",
      "Product Classification",
      "Automated Checkout",
      "Inventory Tracking",
    ],
    benefits: [
      "Reduce waste",
      "Improve quality control",
      "Enhance customer experience",
    ],
    relatedProducts: ["sentinel", "runtime"],
  },
  electronics: {
    slug: "electronics",
    name: "Electronics",
    title: "AI-Powered Electronics Inspection",
    description:
      "Detect defects, improve quality, and automate production line inspection.",
    useCases: [
      "PCB Inspection",
      "Component Detection",
      "Assembly Verification",
      "Solder Inspection",
      "Surface Defect Detection",
    ],
    benefits: [
      "Higher product quality",
      "Faster inspections",
      "Reduced production costs",
    ],
    relatedProducts: ["forge", "sentinel"],
  },
  "machine-tending": {
    slug: "machine-tending",
    name: "Machine Tending",
    title: "AI Solutions for Industrial Automation",
    description:
      "Enable intelligent robotic systems and automated manufacturing processes.",
    useCases: [
      "Robotic Picking",
      "Part Detection",
      "CNC Monitoring",
      "Tool Detection",
      "Worker Safety Monitoring",
      "Quality Inspection",
    ],
    benefits: [
      "Increased productivity",
      "Reduced downtime",
      "Improved safety",
    ],
    relatedProducts: ["sentinel", "runtime", "dual-view-intelligence"],
  },
};

export const industrySlugs = Object.keys(industries);

export function getIndustry(slug: string): Industry | undefined {
  return industries[slug];
}
