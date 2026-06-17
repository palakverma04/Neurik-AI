import Link from "next/link";
import { SectionWrapper } from "./SectionWrapper";
import { getProduct } from "@/lib/content/products";
import { ArrowRight } from "lucide-react";

type RelatedProductsProps = {
  slugs: string[];
};

export function RelatedProducts({ slugs }: RelatedProductsProps) {
  return (
    <SectionWrapper className="py-16">
      <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {slugs.map((slug) => {
          const product = getProduct(slug);
          if (!product) return null;
          return (
            <Link
              key={slug}
              href={`/products/${slug}`}
              className="glass-card group flex items-center justify-between rounded-xl p-5 transition-all hover:glow-border"
            >
              <div>
                <h3 className="font-semibold transition-colors group-hover:text-accent">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{product.tagline}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
