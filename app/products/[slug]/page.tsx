import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduct, productSlugs } from "@/lib/content/products";
import { ProductPageTemplate } from "@/components/sections/ProductPageTemplate";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return <ProductPageTemplate product={product} />;
}
