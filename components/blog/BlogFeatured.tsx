import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/content/blog/types";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

type BlogFeaturedProps = {
  post: BlogPost;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogFeatured({ post }: BlogFeaturedProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid overflow-hidden rounded-xl border border-surface-border bg-foreground/[0.02] transition-all hover:glow-border lg:grid-cols-2"
    >
      <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px] border-b border-surface-border lg:border-b-0 lg:border-r">
        {post.coverImage ? (
          <>
            <Image
              src={post.coverImage}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-background/10 lg:to-background/40" />
          </>
        ) : (
          <div className="absolute inset-0 grid-bg opacity-50" />
        )}
      </div>

      <div className="flex flex-col justify-center gap-5 p-8 md:p-10">
        <p className="font-display text-[0.65rem] uppercase tracking-[0.22em] text-muted">
          Featured article
        </p>
        <h2 className="font-display text-xl md:text-2xl lg:text-[1.65rem] leading-[1.2]">
          {post.title}
        </h2>
        {post.subtitle && (
          <p className="text-base text-muted/90 italic leading-relaxed">
            {post.subtitle}
          </p>
        )}
        <p className="text-sm text-muted leading-relaxed">{post.excerpt}</p>
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <Badge variant="outline">{post.category}</Badge>
          <span className="text-xs text-muted">{formatDate(post.date)}</span>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
          Read article
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
