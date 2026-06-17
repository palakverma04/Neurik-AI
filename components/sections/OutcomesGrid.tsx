import { SectionWrapper } from "./SectionWrapper";

type OutcomesGridProps = {
  title: string;
  items: string[];
};

export function OutcomesGrid({ title, items }: OutcomesGridProps) {
  return (
    <SectionWrapper className="py-16">
      <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">
        {title}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((item) => {
          const match = item.match(/^(\d+x?)\s+(.+)$/i);
          const stat = match ? match[1] : null;
          const label = match ? match[2] : item;

          return (
            <div key={item} className="glass-card rounded-xl p-6 text-center">
              {stat && (
                <div className="mb-2 text-3xl font-semibold text-foreground md:text-4xl">
                  {stat}
                </div>
              )}
              <p className="text-muted">{label}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
