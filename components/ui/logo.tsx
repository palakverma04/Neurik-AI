import Link from "next/link";
import { cn } from "@/lib/utils";

export const logoAssets = {
  full: {
    onDark: "/NEURIK-white.svg",
    onLight: "/NEURIK-black.svg",
  },
  mark: {
    onDark: "/N-w.svg",
    onLight: "/N-b.svg",
  },
} as const;

type LogoProps = {
  variant?: "full" | "mark";
  /** Use white assets on dark backgrounds (default for this site). */
  theme?: "onDark" | "onLight";
  size?: "sm" | "md" | "lg";
  href?: string | null;
  className?: string;
  priority?: boolean;
};

const sizeClasses = {
  full: {
    sm: "h-[18px] md:h-5",
    md: "h-6",
    lg: "h-8",
  },
  mark: {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  },
} as const;

export function Logo({
  variant = "full",
  theme = "onDark",
  size = "md",
  href = "/",
  className,
  priority = false,
}: LogoProps) {
  const src = logoAssets[variant][theme === "onDark" ? "onDark" : "onLight"];

  const img = (
    <img
      src={src}
      alt="NEURIK"
      width={variant === "full" ? 1497 : 632}
      height={variant === "full" ? 172 : 558}
      className={cn(
        variant === "full" ? "w-auto" : "w-auto object-contain",
        sizeClasses[variant][size],
        className
      )}
      {...(priority ? { fetchPriority: "high" as const } : {})}
    />
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex shrink-0 items-center" aria-label="NEURIK home">
        {img}
      </Link>
    );
  }

  return img;
}
