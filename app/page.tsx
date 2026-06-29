import { homepageContent } from "@/lib/content/homepage";
import { HeroSection } from "@/components/sections/HeroSection";
import { DomainMarquee } from "@/components/sections/DomainMarquee";
import { CustomersSection } from "@/components/sections/CustomersSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { PlatformCards } from "@/components/sections/PlatformCards";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  const { hero, marquee, approach, platform } = homepageContent;

  return (
    <>
      <HeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundVideo={hero.backgroundVideo}
        centered
      />
      <DomainMarquee terms={marquee} />
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
      <CustomersSection />
      <FinalCTA />
    </>
  );
}
