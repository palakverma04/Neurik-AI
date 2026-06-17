import { FORGE_URL } from "./product-urls";

export const products = [
  {
    slug: "forge",
    name: "Forge",
    description: "Physics-Infused Synthetic Data Generation",
    href: "/products/forge",
  },
  {
    slug: "sentinel",
    name: "Sentinel",
    description: "Domain-Specific Model Development",
    href: "/products/sentinel",
  },
  {
    slug: "axion",
    name: "Axion",
    description: "Heterogeneous Edge Orchestration",
    href: "/products/axion",
  },
] as const;

export const industries = [
  {
    slug: "fashion",
    name: "Fashion",
    description:
      "Poly-bagged apparel in fulfillment boxes with layout and SKU variation.",
    href: "/industries/fashion",
  },
  {
    slug: "food",
    name: "Food",
    description:
      "Individually wrapped packages in ventilated crates with RGB and depth outputs.",
    href: "/industries/food",
  },
  {
    slug: "electronics",
    name: "Electronics",
    description:
      "Dark-field machined components with CAD-accurate geometry and batch grids.",
    href: "/industries/electronics",
  },
  {
    slug: "machine-tending",
    name: "Machine tending",
    description:
      "Bin picking scenes with random part orientations and multi-modal training outputs.",
    href: "/industries/machine-tending",
  },
] as const;

export const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Technology", href: "/technology" },
] as const;

export const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
] as const;

export const getStartedCta = {
  label: "Get Started",
  href: FORGE_URL,
} as const;
