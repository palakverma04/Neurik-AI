import { HeroSection } from "./HeroSection";
import { SectionWrapper } from "./SectionWrapper";
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

      <SectionWrapper className="py-0">
        <div className="relative border-y border-surface-border py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.15]" />

          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Pipeline
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {industry.details.map((detail) => (
                <div
                  key={detail.title}
                  className="flex items-start gap-4 rounded-xl border border-surface-border bg-foreground/[0.02] p-5"
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
