import { SectionWrapper } from "./SectionWrapper";
import { Eye, Bot } from "lucide-react";

type View = {
  title: string;
  subtitle: string;
  responsibilitiesLabel?: string;
  responsibilitiesHeading?: string;
  responsibilities: string[];
  description: string;
};

type DualViewSplitProps = {
  views: View[];
};

const viewIcons = [Eye, Bot];

export function DualViewSplit({ views }: DualViewSplitProps) {
  const isSingleView = views.length === 1;

  return (
    <SectionWrapper className="py-16 md:py-20">
      <div className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Intelligence Layer
        </h2>
        <p className="mt-4 text-lg text-muted leading-relaxed">
          Real-time awareness and decision support for safe, reliable robotic operation.
        </p>
      </div>

      <div className={`grid gap-8 ${isSingleView ? "" : "lg:grid-cols-2"}`}>
        {views.map((view, i) => {
          const Icon = viewIcons[i % viewIcons.length];
          return (
            <div
              key={view.title}
              className="relative overflow-hidden rounded-2xl border border-surface-border bg-foreground/[0.03]"
            >
              <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

              <div className="relative p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/15 bg-foreground/[0.04] text-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold md:text-2xl">{view.title}</h3>
                    <p className="text-sm text-muted">{view.subtitle}</p>
                  </div>
                </div>

                {view.responsibilitiesLabel && (
                  <p className="text-sm text-muted mb-5">{view.responsibilitiesLabel}</p>
                )}

                {view.responsibilitiesHeading && (
                  <p className="text-sm font-semibold text-foreground mb-4">
                    {view.responsibilitiesHeading}
                  </p>
                )}

                <ul className="grid gap-3 sm:grid-cols-2">
                  {view.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-surface-border bg-foreground/[0.02] px-4 py-3 text-sm text-foreground/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-8 border-t border-surface-border pt-6 text-sm text-muted">
                  {view.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
