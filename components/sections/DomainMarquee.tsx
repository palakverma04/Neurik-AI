"use client";

type DomainMarqueeProps = {
  terms: readonly string[];
};

export function DomainMarquee({ terms }: DomainMarqueeProps) {
  const track = [...terms, ...terms];

  return (
    <section
      className="section-band-default overflow-hidden border-y border-surface-border py-5 md:py-6"
      aria-hidden
    >
      <div className="relative flex">
        <div className="marquee-track flex shrink-0 items-center gap-10 md:gap-16">
          {track.map((term, index) => (
            <span
              key={`${term}-${index}`}
              className="shrink-0 font-display text-xl tracking-tight text-foreground/80 md:text-2xl lg:text-3xl"
            >
              {term}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
