import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Calculator,
  PieChart,
  TrendingUp,
  FileText,
  ArrowRight,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accounting & Tax Services | Global Compliance Support",
  description:
    "CSG Advisory offers Accounting & Tax Services tailored for international companies — streamlined financial management and tax compliance across borders.",
  keywords:
    "International accounting services, global tax compliance, corporate tax filing, financial reporting services, bookkeeping for businesses, cross-border tax planning, business tax advisory, international financial management, accounting outsourcing, tax consulting services",
  openGraph: {
    title: "Expert Accounting and Tax Services for International Businesses",
    description:
      "Professional accounting and tax services tailored for international businesses. Ensure compliance, optimize financial operations, and streamline reporting with our expert solutions.",
    images: [
      {
        url: "/images/team.webp",
        width: 1200,
        height: 630,
        alt: "International Accounting and Tax Solutions",
      },
    ],
  },
  alternates: {
    canonical: `https://${process.env.BASE_URL}/services/accounting-and-tax`,
  },
};

export default function AccountingTaxPage() {
  const services = [
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Corporation Tax",
      description:
        "Handle your corporation tax obligations with full compliance and tax efficiency strategies",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Income Tax & Annual Returns",
      description:
        "Accurate compilation and timely submission of income tax and annual returns",
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "VAT Submissions",
      description:
        "Expert compilation and submission of VAT returns for local jurisdiction requirements",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Local Regulatory Reporting",
      description:
        "Comprehensive management of domestic and international regulatory compliance",
    },
  ];

  const benefits = [
    "Seamless tax compliance across jurisdictions",
    "Timely tax filings and deadline management",
    "Revenue audit and investigation support",
    "Comprehensive documentation compilation",
    "VAT and regulatory reporting expertise",
    "Trusted advisor network collaboration",
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Accounting and Tax Services
              </h1>
              <p className="max-w-[900px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                In today&apos;s complex and evolving global tax environment,
                professional support can make all the difference. Recent years
                have seen significant changes in the tax landscape, with
                authorities placing greater emphasis on transparency and
                reporting. Our experienced team ensures compliance with tax
                authority requirements and completes filings ahead of deadlines.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className={cn(
                  "rounded-full",
                  buttonVariants({ variant: "outline", size: "lg" })
                )}
                href="/contact"
              >
                Get Started{" "}
                <ChevronRight className="!text-primary size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col p-6 bg-white border border-rose-100 rounded-xl shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="p-3 rounded-full bg-rose-100 w-fit mx-auto mb-4">
                  <div className="text-primary">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
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
                Benefits of Tax Services
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                Navigate the complex tax landscape with our expert Tax Services
                designed to ensure compliance and efficiency.
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

      {/* Additional Services Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Specialized Services
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                Additional specialized services to support your business
                operations and compliance needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-rose-100 mr-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Revenue Audits</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We support you during Revenue and Customs investigations,
                  coordinating with advisers to address inquiries and ensure
                  compliance.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-900">
                      Trusted Investigation Support
                    </span>
                  </div>
                  <p className="text-blue-700 text-sm mt-1">
                    Navigate Revenue and Customs investigations with confidence
                    and expert coordination.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-rose-100 mr-4">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Documentation</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We compile the necessary documentation to support tax filings,
                  ensuring accuracy and compliance for your partnership or LLC.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-green-900">
                      Comprehensive Regulatory Compliance
                    </span>
                  </div>
                  <p className="text-green-700 text-sm mt-1">
                    Stay compliant with domestic and international regulations
                    through our expert oversight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Optimize Your Financial Operations
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Partner with us for expert accounting and tax services that
              support your global business growth.
            </p>
            <div className="space-x-4">
              <Link
                className={buttonVariants({ variant: "default", size: "lg" })}
                href="/contact"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                className={buttonVariants({ variant: "outline", size: "lg" })}
                href="/services"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
