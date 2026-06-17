export function IncubatorBanner() {
  return (
    <section
      className="border-t border-surface-border bg-brand-elevated py-10 md:py-12"
      aria-label="Incubator affiliation"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 text-center sm:flex-row sm:gap-5 lg:px-8">
        <p className="text-lg font-medium leading-none text-foreground md:text-xl">
          Part of the
        </p>
        <a
          href="https://evonexus.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center transition-opacity hover:opacity-90"
          aria-label="EvoNexus incubator"
        >
          <img
            src="/evonexus-logo.svg"
            alt="EvoNexus"
            className="block h-8 w-auto md:h-10"
          />
        </a>
        <p className="text-lg font-medium leading-none text-foreground md:text-xl">
          incubator.
        </p>
      </div>
    </section>
  );
}
