"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  products,
  industries,
  getStartedCta,
} from "@/lib/content/navigation";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo variant="full" size="sm" priority />

        <nav className="hidden lg:flex items-center gap-1">
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("products")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-muted hover:text-foreground transition-colors">
              Products
              <ChevronDown className="h-4 w-4" />
            </button>
            {activeMenu === "products" && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-[480px] rounded-xl border border-surface-border bg-background/95 backdrop-blur-xl p-4 shadow-2xl">
                  <div className="grid grid-cols-2 gap-2">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={product.href}
                        className="rounded-lg p-3 hover:bg-foreground/5 transition-colors"
                      >
                        <div className="font-medium text-sm">{product.name}</div>
                        <div className="text-xs text-muted mt-1">
                          {product.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("industries")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-muted hover:text-foreground transition-colors">
              Industries
              <ChevronDown className="h-4 w-4" />
            </button>
            {activeMenu === "industries" && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-[400px] rounded-xl border border-surface-border bg-background/95 backdrop-blur-xl p-4 shadow-2xl">
                  <div className="grid gap-2">
                    {industries.map((industry) => (
                      <Link
                        key={industry.slug}
                        href={industry.href}
                        className="rounded-lg p-3 hover:bg-foreground/5 transition-colors"
                      >
                        <div className="font-medium text-sm">{industry.name}</div>
                        <div className="text-xs text-muted mt-1">
                          {industry.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/technology"
            className="px-4 py-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            Technology
          </Link>
          <Link
            href="/careers"
            className="px-4 py-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            Careers
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            Blog
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button href={getStartedCta.href} size="sm">
            {getStartedCta.label}
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-muted hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <MobileNav onClose={() => setMobileOpen(false)} />
      </div>
    </header>
  );
}
