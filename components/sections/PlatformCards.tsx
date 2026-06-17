import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "./SectionWrapper";
import { ArrowUpRight, Box, Cpu, Layers, ScanEye } from "lucide-react";
import { cn } from "@/lib/utils";

type BentoSize = "featured" | "standard" | "wide";

type Component = {
  name: string;
  tagline: string;
  description: string;
  href: string;
  tryHref?: string;
  layer?: string;
  bento: BentoSize;
};

type PlatformCardsProps = {
  badge: string;
  title: string;
  description: string;
  components: readonly Component[];
};

const icons = {
  Forge: Box,
  Sentinel: ScanEye,
  Runtime: Cpu,
  "Dual-View Intelligence": Layers,
} as const;

const bentoClasses: Record<BentoSize, string> = {
  featured: "md:col-span-2",
  standard: "md:col-span-1",
  wide: "md:col-span-4",
};

function PlatformBentoCard({ component }: { component: Component }) {
  const Icon = icons[component.name as keyof typeof icons] ?? Box;
  const isFeatured = component.bento === "featured";
  const isWide = component.bento === "wide";

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border border-surface-border bg-foreground/[0.03] p-5 transition-[border-color,box-shadow] duration-300 hover:border-foreground/25 hover:shadow-[0_12px_36px_rgba(0,0,0,0.2)] md:p-6",
        bentoClasses[component.bento],
        isFeatured && "md:border-foreground/20",
      )}
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.14] transition-opacity duration-300 group-hover:opacity-25" />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className={cn(
              "flex shrink-0 items-center justify-center rounded-lg border border-surface-border bg-background/50 text-foreground",
              isFeatured ? "h-10 w-10" : "h-9 w-9",
            )}
          >
            <Icon className={isFeatured ? "h-5 w-5" : "h-4 w-4"} />
          </div>
          <div className="min-w-0">
            {component.layer && (
              <p className="font-display text-[0.6rem] uppercase tracking-[0.16em] text-muted">
                {component.layer}
              </p>
            )}
            <h3
              className={cn(
                "truncate font-display tracking-tight",
                isFeatured ? "text-xl md:text-2xl" : "text-lg",
              )}
            >
              {component.name}
            </h3>
          </div>
        </div>
        <Link
          href={component.href}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-surface-border text-muted transition-colors group-hover:border-foreground/30 group-hover:text-foreground"
          aria-label={`Explore ${component.name}`}
        >
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <p
        className={cn(
          "relative mt-3 font-medium leading-snug text-foreground/85",
          isFeatured ? "text-sm md:text-base" : "text-sm",
          isWide && "md:max-w-3xl",
        )}
      >
        {component.tagline}
      </p>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted">
        {component.description}
      </p>

      <div className="relative mt-4 flex flex-wrap items-center gap-2">
        <Button href={component.href} variant="outline" size="sm">
          Learn more
        </Button>
        {component.tryHref && (
          <Button href={component.tryHref} size="sm">
            Get Started
          </Button>
        )}
      </div>
    </article>
  );
}

export function PlatformCards({
  badge,
  title,
  description,
  components,
}: PlatformCardsProps) {
  const featured = components.find((c) => c.bento === "featured");
  const standard = components.filter((c) => c.bento === "standard");
  const wide = components.find((c) => c.bento === "wide");

  return (
    <SectionWrapper tone="default" className="py-16 md:py-24">
      <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
        <Badge variant="secondary">{badge}</Badge>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted leading-relaxed">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-4 md:gap-3">
        {featured && <PlatformBentoCard component={featured} />}
        {standard.map((component) => (
          <PlatformBentoCard key={component.name} component={component} />
        ))}
        {wide && <PlatformBentoCard component={wide} />}
      </div>

      <div className="mt-3 hidden items-center justify-center gap-1 md:flex">
        {components.map((item, index) => {
          const ItemIcon = icons[item.name as keyof typeof icons] ?? Box;
          return (
            <div key={item.name} className="flex items-center gap-1">
              <div className="flex items-center gap-1.5 rounded-full border border-surface-border bg-foreground/[0.03] px-3 py-1.5">
                <ItemIcon className="h-3 w-3 text-muted" />
                <span className="font-display text-[0.55rem] uppercase tracking-[0.14em] text-muted">
                  {item.layer}
                </span>
              </div>
              {index < components.length - 1 && (
                <span className="px-0.5 text-muted/30" aria-hidden>
                  →
                </span>
              )}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
