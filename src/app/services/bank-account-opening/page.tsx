import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  CreditCard,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Bank Account Opening Services for Global Entrepreneurs",
  description:
    "Streamlined business bank account opening services for startups, SMEs, and international companies. Get expert assistance in accessing reliable global banking partners and meeting compliance requirements.",
  keywords:
    "business bank account opening, international banking solutions, offshore bank account setup, global business banking, SME bank accounts, startup banking support, corporate bank accounts, cross-border banking services, business banking consultancy, financial compliance for banking",
  openGraph: {
    title: "Business Bank Account Opening Services for Global Entrepreneurs",
    description:
      "Streamlined business bank account opening services for startups, SMEs, and international companies. Get expert assistance in accessing reliable global banking partners and meeting compliance requirements.",
    images: [
      {
        url: "/images/team.webp",
        width: 1200,
        height: 630,
        alt: "Global Business Banking Solutions",
      },
    ],
  },
  alternates: {
    canonical: `https://${process.env.BASE_URL}/services/bank-account-opening`,
  },
};

export default function BankAccountOpeningPage() {
  const features = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Global Banking Network",
      description: "Access to premium banks across multiple jurisdictions",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Process",
      description: "Confidential and secure account opening procedures",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Guidance",
      description: "Dedicated relationship managers to guide you through",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Approval",
      description: "Expedited processing with our banking partners",
    },
  ];

  const benefits = [
    "Multi-currency account options",
    "Online and mobile banking access",
    "International wire transfer capabilities",
    "Dedicated account manager support",
    "Competitive fees and rates",
    "Compliance with international banking standards",
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Bank Account Opening Services
              </h1>
              <p className="max-w-[700px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Open business bank accounts globally with our expert assistance.
                Access premium banking solutions for your international
                business.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className={buttonVariants({ variant: "secondary", size: "lg" })}
                href="/contact"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Professional Banking Solutions
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              We facilitate bank account openings with top-tier financial
              institutions worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col p-6 bg-white border border-rose-100 rounded-xl shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="p-3 rounded-full bg-rose-100 w-fit mx-auto mb-4">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Account Benefits
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                Access comprehensive banking features designed for international
                businesses.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Open Your Business Account?
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Contact us to discuss your banking needs and start the account
              opening process.
            </p>
            <div className="space-x-4">
              <Link
                className={buttonVariants({ variant: "default", size: "lg" })}
                href="/contact"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
