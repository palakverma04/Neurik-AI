import type { Metadata } from "next";
import { technologyContent } from "@/lib/content/technology";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Dot } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "A software nervous system for Physical AI — synthetic data, domain-specific models, and heterogeneous edge orchestration.",
};

export default function TechnologyPage() {
  const { hero, coreTechnologies, unifiedStack } = technologyContent;

  return (
    <>
      <HeroSection
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        compact
      />

      <SectionWrapper tone="surface">
        <div className="space-y-6 md:space-y-8">
          {coreTechnologies.map((technology) => (
            <article
              key={technology.name}
              className="surface-panel rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                    {technology.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.08em] text-muted">
                    {technology.subtitle}
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-5xl text-sm leading-relaxed text-muted md:text-base">
                {technology.description}
              </p>

              {"workflow" in technology && technology.workflow ? (
                <p className="mt-5 text-sm font-medium text-foreground/85">
                  Workflow: {technology.workflow.join(" -> ")}
                </p>
              ) : null}

              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-foreground/80">
                  Capabilities
                </h4>
                <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {technology.capabilities.map((capability) => (
                    <div
                      key={capability}
                      className="glass-card flex items-center gap-2 rounded-lg px-4 py-2 text-sm"
                    >
                      <Dot className="h-4 w-4 shrink-0" />
                      <span>{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-surface-border bg-background/60 p-4 md:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                  Impact
                </p>
                <p className="mt-2 text-sm leading-relaxed md:text-base">
                  {technology.impact}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            {unifiedStack.title}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            {unifiedStack.description}
          </p>

          <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-3">
            {unifiedStack.stages.map((stage) => (
              <div
                key={stage.name}
                className="glass-card flex h-full flex-col justify-center rounded-xl p-5 text-center"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-muted">
                  {stage.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed">{stage.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-base leading-relaxed text-foreground/90 md:text-lg">
            {unifiedStack.conclusion}
          </p>
        </div>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}
