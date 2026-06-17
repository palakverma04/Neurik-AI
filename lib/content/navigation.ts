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
    slug: "runtime",
    name: "Runtime",
    description: "Heterogeneous Edge Orchestration",
    href: "/products/runtime",
  },
] as const;

export const industries = [
  {
    slug: "fashion",
    name: "Fashion",
    description:
      "Physically accurate synthetic data for fashion inspection and handling workflows.",
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
      "CAD-to-data synthetic scenes for electronics inspection and defect coverage.",
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
