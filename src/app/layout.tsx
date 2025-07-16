import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
