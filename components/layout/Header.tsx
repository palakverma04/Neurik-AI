"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  products,
  industries,
  getStartedCta,
} from "@/lib/content/navigation";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";
import { defaultTransition, easeOut } from "@/lib/motion";

const dropdownMotion = {
  initial: { opacity: 0, y: 8, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 8, scale: 0.98 },
  transition: { duration: 0.22, ease: easeOut },
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ...defaultTransition, duration: 0.45 }}
      className="sticky top-0 z-50 border-b border-surface-border bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo variant="full" size="sm" priority />

        <nav className="hidden lg:flex items-center gap-1">
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("products")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="group flex items-center gap-1 px-4 py-2 text-sm text-muted transition-colors hover:text-foreground">
              Products
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <AnimatePresence>
              {activeMenu === "products" && (
                <motion.div
                  className="absolute left-0 top-full pt-2"
                  {...dropdownMotion}
                >
                  <div className="w-[480px] rounded-xl border border-surface-border bg-background/95 backdrop-blur-xl p-4 shadow-2xl">
                    <div className="grid grid-cols-2 gap-2">
                      {products.map((product, index) => (
                        <motion.div
                          key={product.slug}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: index * 0.04,
                            duration: 0.2,
                            ease: easeOut,
                          }}
                        >
                          <Link
                            href={product.href}
                            className="block rounded-lg p-3 transition-colors hover:bg-foreground/5"
                          >
                            <div className="font-medium text-sm">
                              {product.name}
                            </div>
                            <div className="text-xs text-muted mt-1">
                              {product.description}
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("industries")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="group flex items-center gap-1 px-4 py-2 text-sm text-muted transition-colors hover:text-foreground">
              Industries
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <AnimatePresence>
              {activeMenu === "industries" && (
                <motion.div
                  className="absolute left-0 top-full pt-2"
                  {...dropdownMotion}
                >
                  <div className="w-[400px] rounded-xl border border-surface-border bg-background/95 backdrop-blur-xl p-4 shadow-2xl">
                    <div className="grid gap-2">
                      {industries.map((industry, index) => (
                        <motion.div
                          key={industry.slug}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: index * 0.04,
                            duration: 0.2,
                            ease: easeOut,
                          }}
                        >
                          <Link
                            href={industry.href}
                            className="block rounded-lg p-3 transition-colors hover:bg-foreground/5"
                          >
                            <div className="font-medium text-sm">
                              {industry.name}
                            </div>
                            <div className="text-xs text-muted mt-1">
                              {industry.description}
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {[
            { href: "/technology", label: "Technology" },
            { href: "/careers", label: "Careers" },
            { href: "/blog", label: "Blog" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm text-muted transition-colors hover:text-foreground after:absolute after:bottom-1 after:left-4 after:h-px after:w-0 after:bg-foreground after:transition-all hover:after:w-[calc(100%-2rem)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button href={getStartedCta.href} size="sm">
              {getStartedCta.label}
            </Button>
          </motion.div>
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
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <MobileNav onClose={() => setMobileOpen(false)} />
      </div>
    </motion.header>
  );
}
