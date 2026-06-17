import { SectionWrapper } from "./SectionWrapper";

type ProductShowcaseVideoProps = {
  src: string | readonly string[];
};

function ShowcaseVideo({ src, label }: { src: string; label: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-surface-border bg-black/40 shadow-[0_20px_64px_rgba(0,0,0,0.35)]">
      <video
        className="aspect-video w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export function ProductShowcaseVideo({ src }: ProductShowcaseVideoProps) {
  const videos = Array.isArray(src) ? src : [src];

  return (
    <SectionWrapper className="py-12 md:py-16">
      <div
        className={
          videos.length > 1
            ? "grid gap-4 md:grid-cols-2 md:gap-6"
            : undefined
        }
      >
        {videos.map((videoSrc, index) => (
          <ShowcaseVideo
            key={videoSrc}
            src={videoSrc}
            label={`Product showcase video ${index + 1}`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
