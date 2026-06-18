import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import {
  products,
  industries,
  companyLinks,
  legalLinks,
  getStartedCta,
} from "@/lib/content/navigation";

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-foreground/[0.02]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo variant="full" size="sm" />
            <p className="mt-4 text-sm text-muted leading-relaxed">
              The nervous system for Physical AI. Deterministic, physics-grounded
              autonomy for the real world.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={product.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Industries</h3>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={industry.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={getStartedCta.href}
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  {getStartedCta.label}
                </a>
              </li>
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-surface-border">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} NEURIK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
