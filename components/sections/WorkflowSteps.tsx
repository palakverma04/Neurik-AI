import { SectionWrapper } from "./SectionWrapper";

type WorkflowStepsProps = {
  title: string;
  description?: string;
  steps: string[];
};

export function WorkflowSteps({ title, description, steps }: WorkflowStepsProps) {
  return (
    <SectionWrapper tone="surface" className="py-14 md:py-20">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step) => (
          <div
            key={step}
            className="surface-panel rounded-xl px-4 py-4 text-sm font-medium leading-snug text-brand-black"
          >
            {step}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
