import type { Metadata } from "next";
import { blogPosts } from "@/lib/content/blog";
import { BlogArchive } from "@/components/blog/BlogArchive";
import { BlogFeatured } from "@/components/blog/BlogFeatured";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on Physical AI, synthetic data generation, edge deployment, and autonomous systems from the NEURIK team.",
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const featuredPost = sortedPosts[0];

  return (
    <div className="pb-24 md:pb-32">
      <header className="relative overflow-hidden border-b border-surface-border pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/[0.03] via-transparent to-transparent" />
        <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-foreground/[0.04] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge>Insights</Badge>
            <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              NEURIK Blog
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted leading-relaxed">
              Practical thinking on synthetic data, simulation, and deploying
              intelligence that holds up in the real world.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {featuredPost && (
          <section className="py-12 md:py-16">
            <BlogFeatured post={featuredPost} />
          </section>
        )}

        <BlogArchive posts={sortedPosts} />
      </div>
    </div>
  );
}
