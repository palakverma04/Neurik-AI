import type { Metadata } from "next";
import Link from "next/link";
import { technologyContent } from "@/lib/content/technology";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "A software nervous system for Physical AI — synthetic data, domain-specific models, and heterogeneous edge orchestration.",
};

export default function TechnologyPage() {
  const { hero, components, hardware } = technologyContent;

  return (
    <>
      <HeroSection
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        compact
      />

      <SectionWrapper tone="surface">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight md:text-3xl">
          Four Core Components
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {components.map((component) => (
            <Link
              key={component.name}
              href={component.href}
              className="surface-panel group block rounded-2xl p-6 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgb(0_0_0/0.1)] md:p-8"
            >
              <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-black/70 md:text-xl">
                {component.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {component.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
                Explore <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            {hardware.title}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{hardware.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {hardware.platforms.map((platform) => (
              <div
                key={platform}
                className="glass-card rounded-xl px-8 py-4 text-lg font-semibold"
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}
