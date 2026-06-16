import { Button } from "@/components/ui/button";
import { SectionWrapper } from "./SectionWrapper";

type CTA = {
  label: string;
  href: string;
  variant: "default" | "outline";
};

type FinalCTAProps = {
  title: string;
  description: string;
  ctas: readonly CTA[];
};

export function FinalCTA({ title, description, ctas }: FinalCTAProps) {
  return (
    <SectionWrapper>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute -left-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#fff6f6]/[0.08] blur-3xl" />
          <div className="absolute -right-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#fff6f6]/[0.06] blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fff6f6]/[0.05] blur-3xl" />
        </div>

        <div className="glass-panel group relative overflow-hidden rounded-2xl p-12 text-center transition-[border-color,box-shadow] duration-500 hover:border-foreground/25 hover:shadow-[inset_0_1px_0_rgba(255,246,246,0.16),0_20px_56px_rgba(0,0,0,0.32),0_0_48px_rgba(255,246,246,0.06)] md:p-16">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-50 transition-opacity duration-500 group-hover:opacity-65" />
          <div className="pointer-events-none absolute inset-0 bg-[#fff6f6]/[0.03]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#fff6f6]/35 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#fff6f6]/25 to-transparent" />

          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold md:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {ctas.map((cta) => (
                <Button
                  key={cta.label}
                  href={cta.href}
                  variant={cta.variant}
                  size="lg"
                  className="backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(255,246,246,0.12)]"
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
