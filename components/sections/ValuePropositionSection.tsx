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
    <SectionWrapper tone="surface" className="py-14 md:py-20">
      <div className="max-w-3xl">
        <h2 className="text-2xl leading-snug tracking-tight md:text-3xl">
          {valueProposition.description}
        </h2>

        <div className="mt-10 flex flex-col items-start gap-8 sm:flex-row sm:gap-12">
          <div>
            <p className="font-mono text-4xl tabular-nums text-muted md:text-5xl">
              {valueProposition.from}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">
              Baseline {metric}
            </p>
          </div>

          <div
            className="hidden h-px w-12 shrink-0 self-center bg-black/15 sm:block sm:h-16 sm:w-px"
            aria-hidden
          />

          <div>
            <p className="font-mono text-4xl tabular-nums md:text-5xl">
              {valueProposition.to}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">
              With NEURIK {metric}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
