export type CustomerTestimonial = {
  name: string;
  logo: string;
  project: string;
  quote: string;
  author: string;
  role: string;
  href: string;
};

export const customersContent = {
  label: "Our customers",
  featured: {
    name: "ABB Robotics",
    logo: "/customers/abb-robotics.svg",
    project: "Fashion Inductor with AI Robot Trainer",
    quote:
      "Truly appreciate the partnership with Neurik on Fashion Inductor with AI Robot Trainer. The innovation you bring is transforming what's possible in synthetic data for unstructured, complex garment and apparel sequences. Excited to keep accelerating our shared journey in Physical AI and explore more areas together.",
    author: "Sri Harsha",
    role: "Global Software R&D Manager, ABB Robotics",
    href: "https://www.linkedin.com/feed/update/urn:li:share:7475597363147878400/",
  },
} as const satisfies {
  label: string;
  featured: CustomerTestimonial;
};
