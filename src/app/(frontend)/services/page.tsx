import {
  CheckCircle,
  FileText,
  CreditCard,
  Building,
  Calculator,
  UserCheck,
  Users,
  ArrowRight,
} from "lucide-react";
import GradientText from "@/components/ui/gradient-text";
import ScheduleConsultationButton from "@/components/custom-ui/schedule-consultation-button";
import GetStartedButton from "@/components/custom-ui/get-started-button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | CSG Advisory",
  description:
    "Explore CSG Advisory’s full suite of services, including company formation, compliance, taxation, corporate secretarial, and global business support.",
  keywords:
    "international business services, global company formation, tax compliance, bank account opening, nominee director services, company secretarial services, offshore company setup, business registration support, global expansion services, cross-border compliance",
  openGraph: {
    title: "Comprehensive Global Business Services | CSG Advisory",
    description:
      "Explore CSG Advisory's full suite of international business services including company registration, tax compliance, bank account opening, director and secretarial services, and ongoing corporate support across 50+ jurisdictions.",
    images: [
      {
        url: "/images/team.webp",
        width: 1200,
        height: 630,
        alt: "International Business Services by CSG Advisory",
      },
    ],
  },
  alternates: {
    canonical: `https://${process.env.BASE_URL}/services`,
  },
};

const allServices = [
  {
    title: "Company Registration",
    description:
      "Professional business formation services across multiple jurisdictions worldwide.",
    icon: <Building className="h-8 w-8" />,
    href: "/services/company-registration",
    features: [
      "50+ Jurisdictions",
      "Multiple Entity Types",
      "Fast Processing",
      "Full Compliance",
    ],
  },
  {
    title: "Bank Account Opening",
    description:
      "Access global banking solutions with expert guidance and premium banking partnerships.",
    icon: <CreditCard className="h-8 w-8" />,
    href: "/services/bank-account-opening",
    features: [
      "Global Banking Network",
      "Multi-currency Options",
      "Expert Guidance",
      "Fast Approval",
    ],
  },
  {
    title: "Company Secretarial",
    description:
      "Ensure compliance and maintain good corporate governance with professional secretarial services.",
    icon: <FileText className="h-8 w-8" />,
    href: "/services/company-secretarial",
    features: [
      "Statutory Filings",
      "Board Meeting Support",
      "Compliance Monitoring",
      "Corporate Records",
    ],
  },
  {
    title: "HR and Payroll Services",
    description:
      "Streamline your human resources operations with comprehensive HR and payroll solutions.",
    icon: <Users className="h-8 w-8" />,
    href: "/services/hr-and-payroll",
    features: [
      "HR Management",
      "Payroll Processing",
      "Time & Attendance",
      "Employment Compliance",
    ],
  },
  {
    title: "Director Services",
    description:
      "Professional director services including nominee directors and corporate governance support.",
    icon: <UserCheck className="h-8 w-8" />,
    href: "/services/director-services",
    features: [
      "Nominee Directors",
      "Corporate Governance",
      "Director Compliance",
      "Board Support",
    ],
  },
  {
    title: "Accounting and Tax Services",
    description:
      "Expert financial management and tax compliance solutions for international businesses.",
    icon: <Calculator className="h-8 w-8" />,
    href: "/services/accounting-and-tax",
    features: [
      "Professional Bookkeeping",
      "Financial Reporting",
      "Tax Planning",
      "Multi-jurisdiction Expertise",
    ],
  },
];
export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Our Services
              </h1>
              <p className="max-w-[700px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive international business registration services
                designed to simplify your global expansion journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Complete Business Solutions
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Everything you need to establish, operate, and grow your
              international business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {allServices.map((service, index) => (
              <div
                key={index}
                className="flex flex-col p-8 bg-white border border-rose-100 rounded-xl shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="p-4 rounded-full bg-rose-100 w-fit mb-6 group-hover:bg-rose-200 transition-colors">
                  <div className="text-primary">{service.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">
                    Key Features:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  className={buttonVariants({
                    variant: "default",
                    className: "w-full",
                  })}
                  href={service.href}
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Our <GradientText>Registration</GradientText> Process
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A streamlined approach to international business registration
                that ensures efficiency and compliance.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 justify-items-center">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-gradient text-white flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold">Consultation</h3>
              <p className="text-gray-500">
                Initial consultation to understand your business needs and
                recommend the optimal jurisdiction.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-gradient text-white flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold">Documentation</h3>
              <p className="text-gray-500">
                Preparation and review of all required documentation for your
                business registration.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-gradient text-white flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold">Submission</h3>
              <p className="text-gray-500">
                Filing of your application with the relevant government
                authorities and regulatory bodies.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-gradient text-white flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold">Completion</h3>
              <p className="text-gray-500">
                Delivery of your incorporation documents and ongoing compliance
                support setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Ready to <GradientText>Expand</GradientText> Globally?
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start your international business registration journey today
                with our expert guidance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <GetStartedButton />

              <ScheduleConsultationButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
