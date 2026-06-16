import { HeroSection } from "./HeroSection";
import { SectionWrapper } from "./SectionWrapper";
import { RelatedProducts } from "./RelatedProducts";
import { FinalCTA } from "./FinalCTA";
import type { Industry } from "@/lib/content/industries";
import { getStartedCta } from "@/lib/content/navigation";
import { CheckCircle2, TrendingUp } from "lucide-react";

type IndustryPageTemplateProps = {
  industry: Industry;
};

export function IndustryPageTemplate({ industry }: IndustryPageTemplateProps) {
  return (
    <>
      <HeroSection
        badge={industry.name}
        title={industry.title}
        description={industry.description}
        ctas={[
          { label: getStartedCta.label, href: getStartedCta.href, variant: "default" },
        ]}
        compact
      />

      <SectionWrapper>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
          Use Cases
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industry.useCases.map((useCase) => (
            <div
              key={useCase}
              className="glass-card flex items-center gap-3 rounded-xl p-5"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm font-medium">{useCase}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-foreground/[0.02]">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
          Business Benefits
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {industry.benefits.map((benefit) => (
            <div
              key={benefit}
              className="glass-card rounded-xl p-6 text-center"
            >
              <TrendingUp className="h-8 w-8 text-accent mx-auto mb-3" />
              <p className="text-muted">{benefit}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <RelatedProducts slugs={industry.relatedProducts} />

      <FinalCTA
        title="Build Autonomous Systems That Operate Reliably In The Real World"
        description="From synthetic world generation to edge deployment and continuous adaptation, our platform provides the software nervous system required for Physical AI."
        ctas={[
          { label: getStartedCta.label, href: getStartedCta.href, variant: "default" },
        ]}
      />
    </>
  );
}
