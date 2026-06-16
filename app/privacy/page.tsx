import type { Metadata } from "next";
import { privacyPolicy } from "@/lib/content/legal";
import { LegalPageTemplate } from "@/components/sections/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how NEURIK collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPageTemplate
      title={privacyPolicy.title}
      lastUpdated={privacyPolicy.lastUpdated}
      intro={privacyPolicy.intro}
      sections={privacyPolicy.sections}
    />
  );
}
