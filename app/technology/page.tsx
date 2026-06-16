import type { Metadata } from "next";
import Link from "next/link";
import { technologyContent } from "@/lib/content/technology";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getStartedCta } from "@/lib/content/navigation";
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

      <SectionWrapper>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-center">
          Four Core Components
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {components.map((component) => (
            <Link key={component.name} href={component.href} className="group">
              <Card className="h-full group-hover:glow-border">
                <CardHeader>
                  <CardTitle className="group-hover:text-accent transition-colors">
                    {component.name}
                  </CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="h-4 w-4" />
                  </span>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            {hardware.title}
          </h2>
          <p className="mt-4 text-muted leading-relaxed">{hardware.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {hardware.platforms.map((platform) => (
              <div
                key={platform}
                className="glass-card rounded-xl px-8 py-4 text-lg font-semibold text-accent"
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <FinalCTA
        title="Explore the full NEURIK platform"
        description="From synthetic world generation to edge deployment and continuous adaptation."
        ctas={[
          { label: getStartedCta.label, href: getStartedCta.href, variant: "default" },
        ]}
      />
    </>
  );
}
