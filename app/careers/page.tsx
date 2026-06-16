import type { Metadata } from "next";
import { careersContent } from "@/lib/content/careers";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join NEURIK and help build the nervous system for Physical AI.",
};

export default function CareersPage() {
  const { badge, title, description, email } = careersContent;

  return (
    <HeroSection
      badge={badge}
      title={title}
      description={description}
      ctas={[
        {
          label: "Email Us",
          href: `mailto:${email}`,
          variant: "default",
        },
      ]}
      compact
    />
  );
}
