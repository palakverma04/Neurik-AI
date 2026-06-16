"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  products,
  industries,
  getStartedCta,
} from "@/lib/content/navigation";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  onClose: () => void;
};

export function MobileNav({ onClose }: MobileNavProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggle = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <nav className="border-t border-surface-border px-6 py-4 space-y-2">
      <div>
        <button
          onClick={() => toggle("products")}
          className="flex w-full items-center justify-between py-3 text-sm font-medium"
        >
          Products
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              openSection === "products" && "rotate-180"
            )}
          />
        </button>
        {openSection === "products" && (
          <div className="pl-4 space-y-2 pb-2">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={product.href}
                onClick={onClose}
                className="block py-2 text-sm text-muted hover:text-foreground"
              >
                {product.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => toggle("industries")}
          className="flex w-full items-center justify-between py-3 text-sm font-medium"
        >
          Industries
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              openSection === "industries" && "rotate-180"
            )}
          />
        </button>
        {openSection === "industries" && (
          <div className="pl-4 space-y-2 pb-2">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={industry.href}
                onClick={onClose}
                className="block py-2 text-sm text-muted hover:text-foreground"
              >
                {industry.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link
        href="/technology"
        onClick={onClose}
        className="block py-3 text-sm font-medium"
      >
        Technology
      </Link>
      <Link
        href="/careers"
        onClick={onClose}
        className="block py-3 text-sm font-medium"
      >
        Careers
      </Link>
      <Link
        href="/blog"
        onClick={onClose}
        className="block py-3 text-sm font-medium"
      >
        Blog
      </Link>
      <Link
        href="/about"
        onClick={onClose}
        className="block py-3 text-sm font-medium"
      >
        About
      </Link>

      <div className="flex flex-col gap-2 pt-4 border-t border-surface-border">
        <Button href={getStartedCta.href} onClick={onClose}>
          {getStartedCta.label}
        </Button>
      </div>
    </nav>
  );
}
