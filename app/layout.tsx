import type { Metadata } from "next";
import localFont from "next/font/local";
import { Michroma, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { IncubatorBanner } from "@/components/layout/IncubatorBanner";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const display = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const body = localFont({
  src: [
    {
      path: "./fonts/GoogleSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GoogleSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-google-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "NEURIK — The Nervous System for Physical AI",
    template: "%s | NEURIK",
  },
  description:
    "Eliminating physical hallucinations through deterministic, physics-grounded autonomy. Build autonomous systems that see, reason, and act reliably in dynamic real-world environments.",
  openGraph: {
    title: "NEURIK — The Nervous System for Physical AI",
    description:
      "Synthetic data generation, domain-specific model development, and heterogeneous edge orchestration for Physical AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <IncubatorBanner />
        <Footer />
      </body>
    </html>
  );
}
