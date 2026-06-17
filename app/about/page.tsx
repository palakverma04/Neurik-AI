import type { Metadata } from "next";
import { aboutContent } from "@/lib/content/about";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { FinalCTA } from "@/components/sections/FinalCTA";
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

      <SectionWrapper tone="surface">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          {mission.title}
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          {mission.description}
        </p>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          {whatWeBuild.title}
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          {whatWeBuild.description}
        </p>
      </SectionWrapper>

      <SectionWrapper tone="surface">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight md:text-3xl">
          Our Values
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="surface-panel rounded-xl p-6">
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-2xl text-center">
          <Users className="mx-auto mb-4 h-12 w-12 text-muted" />
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            {team.title}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{team.description}</p>
          {team.placeholder && (
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="glass-card flex h-32 items-center justify-center rounded-xl p-6"
                >
                  <span className="text-sm text-muted">Coming soon</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="surface">
        <div className="surface-panel mx-auto max-w-2xl rounded-2xl p-8 text-center md:p-12">
          <Mail className="mx-auto mb-4 h-10 w-10 text-muted" />
          <h2 className="text-2xl font-bold">{contact.title}</h2>
          <p className="mt-3 text-muted">{contact.description}</p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-4 inline-block font-medium hover:underline"
          >
            {contact.email}
          </a>
        </div>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}
