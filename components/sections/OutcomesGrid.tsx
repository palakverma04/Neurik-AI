import { SectionWrapper } from "./SectionWrapper";

type OutcomesGridProps = {
  title: string;
  items: string[];
};

export function OutcomesGrid({ title, items }: OutcomesGridProps) {
  return (
    <SectionWrapper className="py-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
        {title}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((item) => {
          const match = item.match(/^(\d+x?)\s+(.+)$/i);
          const stat = match ? match[1] : null;
          const label = match ? match[2] : item;

          return (
            <div
              key={item}
              className="glass-card rounded-xl p-6 text-center"
            >
              {stat && (
                <div className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
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
