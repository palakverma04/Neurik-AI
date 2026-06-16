import type { LegalSection } from "@/lib/content/legal";

type LegalPageTemplateProps = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPageTemplate({
  title,
  lastUpdated,
  intro,
  sections,
}: LegalPageTemplateProps) {
  return (
    <section className="pt-32 pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.03em]">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted">Last updated: {lastUpdated}</p>
          <p className="mt-6 text-lg text-muted leading-relaxed">{intro}</p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-foreground">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-muted leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-muted leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
