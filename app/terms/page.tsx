import type { Metadata } from "next";
import { termsOfService } from "@/lib/content/legal";
import { LegalPageTemplate } from "@/components/sections/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing your use of the NEURIK website and services.",
};

export default function TermsPage() {
  return (
    <LegalPageTemplate
      title={termsOfService.title}
      lastUpdated={termsOfService.lastUpdated}
      intro={termsOfService.intro}
      sections={termsOfService.sections}
    />
  );
}
