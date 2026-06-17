import { HeroSection } from "./HeroSection";
import { SectionWrapper } from "./SectionWrapper";
import { IndustryShowcase } from "./IndustryShowcase";
import { RelatedProducts } from "./RelatedProducts";
import { FinalCTA } from "./FinalCTA";
import type { Industry } from "@/lib/content/industries";
import { getStartedCta } from "@/lib/content/navigation";
import { CheckCircle2 } from "lucide-react";

type IndustryPageTemplateProps = {
  industry: Industry;
};

export function IndustryPageTemplate({ industry }: IndustryPageTemplateProps) {
  return (
    <>
      <HeroSection
        badge={industry.name}
        title={industry.name}
        pills={[...industry.pills]}
        description={industry.description}
        ctas={[
          { label: getStartedCta.label, href: getStartedCta.href, variant: "default" },
        ]}
        compact
      />

      {industry.showcase && <IndustryShowcase showcase={industry.showcase} />}

      <SectionWrapper tone="alt" className="py-14 md:py-20">
          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Pipeline
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {industry.details.map((detail) => (
                <div
                  key={detail.title}
                  className="flex items-start gap-4 rounded-xl border border-surface-border bg-background/40 p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground/70" />
                  <div>
                    <h3 className="text-sm font-semibold">{detail.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {detail.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </SectionWrapper>

      <RelatedProducts slugs={industry.relatedProducts} />

      <FinalCTA />
    </>
  );
}
