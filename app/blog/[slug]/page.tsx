import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, getBlogPost, getPostMarkdown } from "@/lib/content/blog";
import { BlogMarkdown } from "@/components/blog/BlogMarkdown";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const content = getPostMarkdown(post);

  return (
    <section className="pt-32 pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <h1 className="font-display text-3xl md:text-4xl leading-[1.15] max-w-3xl">
            {post.title}
          </h1>
          {post.subtitle && (
            <p className="mt-4 text-lg text-muted leading-relaxed italic">
              {post.subtitle}
            </p>
          )}
          <p className="mt-4 text-sm text-muted">
            {post.author} &middot;{" "}
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="mt-12">
            <BlogMarkdown content={content} />
          </div>
        </div>
      </div>
    </section>
  );
}
