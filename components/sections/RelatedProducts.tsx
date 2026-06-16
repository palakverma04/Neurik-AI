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
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {slugs.map((slug) => {
          const product = getProduct(slug);
          if (!product) return null;
          return (
            <Link
              key={slug}
              href={`/products/${slug}`}
              className="glass-card group flex items-center justify-between rounded-xl p-5 hover:glow-border transition-all"
            >
              <div>
                <h3 className="font-semibold group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted mt-1">{product.tagline}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
