import { SectionWrapper } from "./SectionWrapper";

type ProductShowcaseVideoProps = {
  src: string;
};

export function ProductShowcaseVideo({ src }: ProductShowcaseVideoProps) {
  return (
    <SectionWrapper className="py-12 md:py-16">
      <div className="overflow-hidden rounded-2xl border border-surface-border bg-black/40 shadow-[0_20px_64px_rgba(0,0,0,0.35)]">
        <video
          className="aspect-video w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Product showcase video"
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </SectionWrapper>
  );
}
