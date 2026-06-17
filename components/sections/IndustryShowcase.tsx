import { cn } from "@/lib/utils";
import { SectionWrapper } from "./SectionWrapper";
import type { IndustryShowcase as IndustryShowcaseContent } from "@/lib/content/industries";

type IndustryShowcaseProps = {
  showcase: IndustryShowcaseContent;
};

export function IndustryShowcase({ showcase }: IndustryShowcaseProps) {
  const isSingle = showcase.images.length === 1;

  return (
    <SectionWrapper tone="surface" className="py-14 md:py-20">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          {showcase.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          {showcase.description}
        </p>
      </div>

      <div
        className={cn(
          "mt-10 grid gap-4",
          isSingle ? "max-w-5xl" : "sm:grid-cols-2",
        )}
      >
        {showcase.images.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-2xl border border-surface-border bg-black"
          >
            <img
              src={image.src}
              alt={image.alt}
              className={cn(
                "w-full bg-black object-contain",
                isSingle ? "aspect-video" : "aspect-[4/3]",
              )}
              loading="lazy"
            />
            <figcaption className="border-t border-surface-border bg-brand-white px-4 py-3 text-sm text-muted">
              {image.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionWrapper>
  );
}
