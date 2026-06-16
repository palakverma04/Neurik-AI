import type { Metadata } from "next";
import { aboutContent } from "@/lib/content/about";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getStartedCta } from "@/lib/content/navigation";
import { Mail, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "NEURIK is building the nervous system for Physical AI — eliminating physical hallucinations through deterministic, physics-grounded autonomy.",
};

export default function AboutPage() {
  const { hero, mission, whatWeBuild, values, team, contact } = aboutContent;

  return (
    <>
      <HeroSection
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        compact
      />

      <SectionWrapper>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          {mission.title}
        </h2>
        <p className="mt-4 text-lg text-muted leading-relaxed max-w-3xl">
          {mission.description}
        </p>
      </SectionWrapper>

      <SectionWrapper className="bg-foreground/[0.02]">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          {whatWeBuild.title}
        </h2>
        <p className="mt-4 text-lg text-muted leading-relaxed max-w-3xl">
          {whatWeBuild.description}
        </p>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-center">
          Our Values
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-accent">{value.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-foreground/[0.02]">
        <div className="text-center max-w-2xl mx-auto">
          <Users className="h-12 w-12 text-accent mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            {team.title}
          </h2>
          <p className="mt-4 text-muted leading-relaxed">{team.description}</p>
          {team.placeholder && (
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl p-6 h-32 flex items-center justify-center"
                >
                  <span className="text-sm text-muted">Coming soon</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto">
          <Mail className="h-10 w-10 text-accent mx-auto mb-4" />
          <h2 className="text-2xl font-bold">{contact.title}</h2>
          <p className="mt-3 text-muted">{contact.description}</p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-4 inline-block text-accent hover:underline"
          >
            {contact.email}
          </a>
        </div>
      </SectionWrapper>

      <FinalCTA
        title="Partner with NEURIK"
        description="Let's build autonomous systems that operate reliably in the real world."
        ctas={[
          { label: getStartedCta.label, href: getStartedCta.href, variant: "default" },
        ]}
      />
    </>
  );
}
