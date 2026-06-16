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
  {
    slug: "dual-view-intelligence",
    name: "Dual-View Intelligence",
    description: "Supervisory + Robot execution layers",
    href: "/products/dual-view-intelligence",
  },
] as const;

export const industries = [
  {
    slug: "fashion",
    name: "Fashion",
    description: "Quality inspection & retail analytics",
    href: "/industries/fashion",
  },
  {
    slug: "food",
    name: "Food",
    description: "Food processing & retail solutions",
    href: "/industries/food",
  },
  {
    slug: "electronics",
    name: "Electronics",
    description: "Production line inspection",
    href: "/industries/electronics",
  },
  {
    slug: "machine-tending",
    name: "Machine Tending",
    description: "Industrial automation & robotics",
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
