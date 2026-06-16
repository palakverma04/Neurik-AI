export function IncubatorBanner() {
  return (
    <section
      className="border-t border-surface-border bg-foreground/[0.02] h-[105px] flex items-center justify-center"
      aria-label="Incubator affiliation"
    >
      <div className="flex items-center justify-center gap-x-2 text-base md:text-lg text-muted leading-none whitespace-nowrap">
        <span className="translate-y-px">Part of the</span>
        <a
          href="https://evonexus.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center opacity-80 hover:opacity-100 transition-opacity"
          aria-label="EvoNexus incubator"
        >
          <img
            src="/evonexus-logo.svg"
            alt=""
            className="block h-[1.05em] md:h-[1.1em] w-auto"
          />
        </a>
        <span className="translate-y-px">incubator.</span>
      </div>
    </section>
  );
}
