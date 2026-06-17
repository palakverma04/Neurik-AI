import { SectionWrapper } from "./SectionWrapper";
import { ArrowRight } from "lucide-react";

type WorkflowStepsProps = {
  title: string;
  steps: string[];
};

export function WorkflowSteps({ title, steps }: WorkflowStepsProps) {
  return (
    <SectionWrapper className="py-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10 text-center">
        {title}
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2 md:gap-4">
            <div className="glass-card rounded-lg px-6 py-3 text-sm font-semibold text-accent">
              {step}
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="h-5 w-5 text-muted hidden md:block" />
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
