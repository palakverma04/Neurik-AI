import { SectionWrapper } from "./SectionWrapper";
import { CheckCircle2 } from "lucide-react";
import type { ProductFeature } from "@/lib/content/products";

type FeatureSectionsProps = {
  features: ProductFeature[];
};

export function FeatureSections({ features }: FeatureSectionsProps) {
  return (
    <>
      {features.map((feature) => (
        <SectionWrapper key={feature.title}>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              {feature.title}
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              {feature.description}
            </p>
          </div>

          {feature.capabilities && feature.capabilities.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">
                {feature.capabilitiesLabel ?? "Capabilities"}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {feature.capabilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-surface-border bg-foreground/[0.02] p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {feature.benefits && feature.benefits.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">
                {feature.benefitsLabel ?? "Benefits"}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {feature.benefits.map((item) => (
                  <div
                    key={item}
                    className="glass-card rounded-xl p-5 text-center"
                  >
                    <p className="text-muted">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </SectionWrapper>
      ))}
    </>
  );
}
