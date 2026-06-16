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
  bento: BentoSize;
  media?: {
    type: "image" | "video";
    src: string;
    alt?: string;
  };
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
  featured: "md:col-span-2 md:row-span-2 min-h-[420px]",
  standard: "md:col-span-2 min-h-[320px]",
  wide: "md:col-span-4 min-h-[280px]",
};

function BentoMedia({
  media,
  className,
}: {
  media: NonNullable<Component["media"]>;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-black/40", className)}>
      {media.type === "video" ? (
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        >
          <source src={media.src} type="video/mp4" />
        </video>
      ) : (
        <img
          src={media.src}
          alt={media.alt ?? ""}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent md:from-background/40" />
    </div>
  );
}

function PlatformBentoCard({ component }: { component: Component }) {
  const Icon = icons[component.name as keyof typeof icons] ?? Box;
  const isFeatured = component.bento === "featured";
  const isWide = component.bento === "wide";
  const hasMedia = Boolean(component.media);

  return (
    <article
      className={cn(
        "group relative flex overflow-hidden rounded-2xl border border-surface-border bg-foreground/[0.03] transition-colors hover:border-foreground/25",
        bentoClasses[component.bento],
        hasMedia ? "flex-col md:flex-row" : "flex-col p-6 md:p-8",
        isFeatured && hasMedia && "md:flex-col",
        isWide && hasMedia && "md:flex-row"
      )}
    >
      {component.media && (
        <BentoMedia
          media={component.media}
          className={cn(
            "shrink-0",
            isFeatured && "h-48 md:h-[55%] md:min-h-[220px] w-full",
            !isFeatured && !isWide && "h-40 w-full md:h-full md:w-[42%]",
            isWide && "h-44 w-full md:h-full md:w-[38%] md:max-w-md"
          )}
        />
      )}

      <div
        className={cn(
          "relative flex flex-1 flex-col p-6 md:p-8",
          hasMedia && "justify-end"
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div
            className={cn(
              "flex items-center justify-center rounded-xl border border-surface-border bg-foreground/[0.04] text-foreground backdrop-blur-sm",
              isFeatured ? "h-12 w-12" : "h-10 w-10"
            )}
          >
            <Icon className={isFeatured ? "h-6 w-6" : "h-5 w-5"} />
          </div>
          <Link
            href={component.href}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-surface-border bg-background/40 text-muted backdrop-blur-sm transition-all group-hover:border-foreground/30 group-hover:text-foreground md:opacity-0 md:group-hover:opacity-100"
            aria-label={`Explore ${component.name}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className={cn("mt-5 flex flex-1 flex-col", isWide && "md:justify-between")}>
          <div>
            <h3
              className={cn(
                "font-display text-foreground",
                isFeatured
                  ? "text-2xl md:text-3xl"
                  : isWide
                    ? "text-xl md:text-2xl"
                    : "text-xl"
              )}
            >
              {component.name}
            </h3>
            <p className="mt-2 text-sm font-medium text-foreground/80 md:text-base">
              {component.tagline}
            </p>
            {component.description && (
              <p className="mt-3 max-w-xl text-sm text-muted leading-relaxed">
                {component.description}
              </p>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button href={component.href} variant="outline" size="sm">
              Learn more
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            {component.tryHref && (
              <Button href={component.tryHref} size="sm">
                Get Started
              </Button>
            )}
          </div>
        </div>
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
  return (
    <SectionWrapper>
      <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
        <Badge variant="secondary">{badge}</Badge>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted leading-relaxed">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[minmax(280px,auto)]">
        {components.map((component) => (
          <PlatformBentoCard key={component.name} component={component} />
        ))}
      </div>
    </SectionWrapper>
  );
}
