import type { Metadata } from "next";

import "@/styles/globals.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { draftMode } from "next/headers";
import { AdminBar } from "@/payload/components/AdminBar";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CSG Advisory | Global Business Registration & Compliance Experts",
  icons: {
    // Standard favicon
    icon: [
      { url: "/logo/favicons/favicon.ico", sizes: "any" },
      {
        url: "/logo/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/logo/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/logo/favicons/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/logo/favicons/favicon-64x64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        url: "/logo/favicons/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/logo/favicons/favicon-128x128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        url: "/logo/favicons/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/logo/favicons/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    // Apple touch icons
    apple: [
      {
        url: "/logo/mobile-icons/apple-touch-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/logo/mobile-icons/apple-touch-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "/logo/mobile-icons/apple-touch-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/logo/mobile-icons/apple-touch-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "/logo/mobile-icons/apple-touch-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: "/logo/mobile-icons/apple-touch-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/logo/mobile-icons/apple-touch-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/logo/mobile-icons/apple-touch-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/logo/mobile-icons/apple-touch-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
  description:
    "CSG Advisory helps businesses expand globally with expert company registration, tax compliance, director services, bank account opening, and HR/payroll solutions across 50+ countries. Start your international journey with confidence.",
  keywords:
    "global business registration, international company formation, cross-border compliance, offshore company setup, nominee director services, tax advisory, global payroll solutions, HR outsourcing, bank account opening, company secretarial services, international business expansion, CSG Advisory global services",
  openGraph: {
    title: "CSG Advisory | Global Business Registration & Compliance Experts",
    description:
      "Expand your business globally with CSG Advisory’s complete suite of international services including company setup, tax compliance, director services, and more across 50+ jurisdictions.",
    images: [
      {
        url: "/images/team.webp",
        width: 1200,
        height: 630,
        alt: "CSG Advisory – Global Expansion Made Simple",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "CSG Advisory",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSG Advisory | Global Business Registration & Compliance Experts",
    description:
      "End-to-end international business setup and compliance solutions across 50+ countries. Trusted by entrepreneurs and enterprises for global expansion.",
    images: ["/images/team.webp"],
  },
  alternates: {
    canonical: `https://${process.env.BASE_URL}`,
  },
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: draft } = await draftMode();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {draft && <AdminBar adminBarProps={{ preview: draft }} />}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
