import type { Metadata } from "next";
import { aboutContent } from "@/lib/content/about";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "NEURIK is building the nervous system for Physical AI — eliminating physical hallucinations through deterministic, physics-grounded autonomy.",
};

export default function AboutPage() {
  const { hero, overview, values } = aboutContent;

  return (
    <>
      <HeroSection
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        compact
      />

      <SectionWrapper tone="surface">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            {overview.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {overview.description}
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Our values
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title}>
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}
