import { SectionWrapper } from "./SectionWrapper";
import type { Product } from "@/lib/content/products";

type ValuePropositionSectionProps = {
  valueProposition: NonNullable<Product["valueProposition"]>;
};

export function ValuePropositionSection({
  valueProposition,
}: ValuePropositionSectionProps) {
  const metric = valueProposition.metric ?? "F1 score";

  return (
    <SectionWrapper className="py-0">
      <div className="relative border-y border-surface-border py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.18]" />

        <div className="relative max-w-3xl">
          <h2 className="text-2xl leading-snug tracking-tight md:text-3xl">
            {valueProposition.description}
          </h2>

          <div className="mt-10 flex flex-col items-start gap-8 sm:flex-row sm:gap-12">
            <div>
              <p className="font-mono text-4xl tabular-nums text-muted/55 md:text-5xl">
                {valueProposition.from}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">
                Baseline {metric}
              </p>
            </div>

            <div
              className="hidden h-14 w-px shrink-0 bg-surface-border sm:block"
              aria-hidden
            />

            <div>
              <p className="font-mono text-4xl tabular-nums md:text-5xl">
                {valueProposition.to}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">
                With Sentinel
              </p>
            </div>
          </div>

          <p className="mt-10 text-sm text-muted">{valueProposition.proof}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
