import { homepageContent } from "@/lib/content/homepage";
import { HeroSection } from "@/components/sections/HeroSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { PlatformCards } from "@/components/sections/PlatformCards";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  const { hero, approach, platform, finalCta } = homepageContent;

  return (
    <>
      <HeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundVideo={hero.backgroundVideo}
        centered
      />
      <ApproachSection
        badge={approach.badge}
        title={approach.title}
        description={approach.description}
        steps={approach.steps}
      />
      <PlatformCards
        badge={platform.badge}
        title={platform.title}
        description={platform.description}
        components={platform.components}
      />
      <FinalCTA
        title={finalCta.title}
        description={finalCta.description}
        ctas={finalCta.ctas}
      />
    </>
  );
}
