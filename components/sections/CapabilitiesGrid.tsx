import { SectionWrapper } from "./SectionWrapper";
import { CheckCircle2 } from "lucide-react";

type CapabilitiesGridProps = {
  title: string;
  items: string[];
};

export function CapabilitiesGrid({ title, items }: CapabilitiesGridProps) {
  return (
    <SectionWrapper className="py-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
        {title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded-lg border border-surface-border bg-foreground/[0.02] p-4"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0 text-accent mt-0.5" />
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
