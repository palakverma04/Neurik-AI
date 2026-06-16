import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getIndustry, industrySlugs } from "@/lib/content/industries";
import { IndustryPageTemplate } from "@/components/sections/IndustryPageTemplate";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Industry Not Found" };

  return {
    title: industry.title,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return <IndustryPageTemplate industry={industry} />;
}
