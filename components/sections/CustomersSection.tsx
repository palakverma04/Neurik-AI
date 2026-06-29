import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { customersContent } from "@/lib/content/customers";
import { SectionWrapper } from "./SectionWrapper";
import { Reveal } from "@/components/motion/Reveal";

export function CustomersSection() {
  const { label, featured } = customersContent;

  return (
    <SectionWrapper tone="light" className="py-16 md:py-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {label}
        </p>

        <figure className="surface-panel mt-8 rounded-2xl px-6 py-8 text-left md:mt-10 md:px-10 md:py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <img
              src={featured.logo}
              alt={featured.name}
              className="h-8 w-auto shrink-0 md:h-9"
            />
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted sm:max-w-[14rem] sm:text-right">
              {featured.project}
            </p>
          </div>

          <blockquote className="mt-6 border-l-2 border-brand-black/15 pl-5 md:mt-8 md:pl-6">
            <p className="text-base leading-relaxed text-brand-black md:text-[1.05rem] md:leading-[1.75]">
              &ldquo;{featured.quote}&rdquo;
            </p>
          </blockquote>

          <figcaption className="mt-6 md:mt-8">
            <p className="text-sm font-semibold text-brand-black">
              {featured.author}
            </p>
            <p className="mt-1 text-sm text-[var(--brand-muted-light)]">
              {featured.role}
            </p>
          </figcaption>

          <Link
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-black transition-colors hover:text-brand-black/65"
          >
            View on LinkedIn
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </figure>
      </Reveal>
    </SectionWrapper>
  );
}
