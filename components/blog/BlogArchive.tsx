"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/content/blog";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search } from "lucide-react";

type BlogArchiveProps = {
  posts: BlogPost[];
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogArchive({ posts }: BlogArchiveProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All stories");

  const categories = useMemo(
    () => ["All stories", ...new Set(posts.map((post) => post.category))],
    [posts]
  );

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        category === "All stories" || post.category === category;
      const matchesQuery =
        !normalized ||
        post.title.toLowerCase().includes(normalized) ||
        post.excerpt.toLowerCase().includes(normalized) ||
        post.category.toLowerCase().includes(normalized);

      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);

  return (
    <section className="border-t border-surface-border pt-12 md:pt-16">
      <h2 className="font-display text-2xl md:text-3xl">All articles</h2>

      <div className="mt-8 flex flex-col gap-3 rounded-xl border border-surface-border bg-foreground/[0.03] p-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex flex-1 items-center gap-3 px-2">
          <Search className="h-4 w-4 text-muted shrink-0" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted outline-none"
          />
        </label>
        <div className="flex items-center gap-3 border-t border-surface-border pt-3 sm:border-t-0 sm:pt-0 sm:pl-4 sm:border-l">
          <span className="font-display text-[0.6rem] uppercase tracking-[0.2em] text-muted">
            Category
          </span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-transparent text-sm text-foreground outline-none cursor-pointer"
          >
            {categories.map((item) => (
              <option key={item} value={item} className="bg-background">
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 divide-y divide-surface-border border-y border-surface-border">
        {filtered.length === 0 ? (
          <p className="py-10 text-sm text-muted">No articles match your search.</p>
        ) : (
          filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between"
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                  <span>{formatDate(post.date)}</span>
                  <Badge variant="outline">{post.category}</Badge>
                </div>
                <h3 className="mt-2 font-display text-lg md:text-xl leading-snug group-hover:text-foreground transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2 max-w-2xl">
                  {post.excerpt}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm text-muted group-hover:text-foreground transition-colors shrink-0">
                Read
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
