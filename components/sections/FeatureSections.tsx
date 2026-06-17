import { SectionWrapper } from "./SectionWrapper";
import { CheckCircle2 } from "lucide-react";
import type { ProductFeature } from "@/lib/content/products";

type FeatureSectionsProps = {
  features: ProductFeature[];
};

function ItemGrid({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
      </h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item}
            className="surface-panel flex items-start gap-3 rounded-xl px-4 py-3.5"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-black/45" />
            <span className="text-sm leading-snug text-brand-black">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeatureSections({ features }: FeatureSectionsProps) {
  return (
    <>
      {features.map((feature) => (
        <SectionWrapper key={feature.title} className="py-14 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              {feature.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              {feature.description}
            </p>
          </div>

          {feature.capabilities && feature.capabilities.length > 0 && (
            <ItemGrid
              label={feature.capabilitiesLabel ?? "Capabilities"}
              items={feature.capabilities}
            />
          )}

          {feature.applications && feature.applications.length > 0 && (
            <ItemGrid
              label={feature.applicationsLabel ?? "Applications"}
              items={feature.applications}
            />
          )}

          {feature.benefits && feature.benefits.length > 0 && (
            <ItemGrid
              label={feature.benefitsLabel ?? "Benefits"}
              items={feature.benefits}
            />
          )}

          {feature.impact && (
            <div className="surface-panel mt-8 max-w-3xl rounded-xl px-5 py-4 md:px-6 md:py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Impact
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-black md:text-base">
                {feature.impact}
              </p>
            </div>
          )}
        </SectionWrapper>
      ))}
    </>
  );
}
