import { buttonVariants } from "@/components/ui/button";
import {
  FileText,
  Calendar,
  AlertCircle,
  BookOpen,
  ArrowRight,
  Users,
  Shield,
  Clock,
  CheckCircle,
  Building,
  Globe,
  Award,
  TrendingUp,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Global Company Secretarial Services for Corporate Compliance",
  description:
    "Expert company secretarial services to maintain statutory compliance, support governance, and manage corporate records across multiple jurisdictions. Trusted by businesses worldwide for efficient and reliable support.",
  keywords:
    "company secretarial services, corporate compliance solutions, statutory filing services, registered office services, corporate governance support, annual return filing, board meeting documentation, company law compliance, entity management services, international secretarial support",
  openGraph: {
    title: "Global Company Secretarial Services for Corporate Compliance",
    description:
      "Expert company secretarial services to maintain statutory compliance, support governance, and manage corporate records across multiple jurisdictions. Trusted by businesses worldwide for efficient and reliable support.",
    images: [
      {
        url: "/images/team.webp",
        width: 1200,
        height: 630,
        alt: "Company Secretarial Compliance Solutions",
      },
    ],
  },
  alternates: {
    canonical: `https://${process.env.BASE_URL}/services/company-secretarial`,
  },
};

export default function CompanySecretarialPage() {
  const services = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Statutory Filings",
      description:
        "Annual returns, financial statements, and regulatory filings",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Board Meetings",
      description: "Organization and documentation of board meetings",
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Compliance Monitoring",
      description:
        "Ongoing monitoring of regulatory requirements and deadlines",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Corporate Records",
      description: "Maintenance of statutory books and corporate records",
    },
  ];

  const detailedServices = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Secretary Services",
      description:
        "We act as your company secretary, ensuring compliance with statutory requirements and providing expert governance support for businesses of all sizes, from SPVs to multinationals.",
      features: [
        "Statutory compliance oversight",
        "Corporate governance guidance",
        "Regulatory liaison",
        "Legal requirement management",
      ],
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Officer Management",
      description:
        "Our team manages the seamless appointment and resignation of officers, handling all necessary documentation and filings to keep your company compliant and up to date.",
      features: [
        "Director appointments",
        "Officer resignations",
        "KYC documentation",
        "Regulatory notifications",
      ],
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Annual Filings",
      description:
        "We handle the preparation and timely filing of annual returns, ensuring your business meets all regulatory deadlines and maintains good standing with authorities.",
      features: [
        "Annual return preparation",
        "Financial statement filing",
        "Deadline management",
        "Regulatory submissions",
      ],
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Statutory Records",
      description:
        "We maintain accurate and secure company registers, minutes books, and statutory records, ensuring your corporate documentation is always organized and compliant.",
      features: [
        "Register maintenance",
        "Document organization",
        "Secure storage",
        "Access management",
      ],
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Board Meetings",
      description:
        "Our experts organize and support board meetings, including agenda preparation, minute-taking, and follow-up actions, to ensure effective governance and decision-making.",
      features: [
        "Meeting coordination",
        "Agenda preparation",
        "Minutes recording",
        "Action tracking",
      ],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Shareholder Meetings",
      description:
        "We manage shareholder meetings, from planning and notices to documentation and compliance, ensuring smooth communication and adherence to legal requirements.",
      features: [
        "Meeting planning",
        "Notice distribution",
        "Voting management",
        "Documentation",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Effortless Statutory Compliance",
      description:
        "Stay compliant with all legal and regulatory requirements through our expert oversight.",
      details:
        "Our team monitors regulatory changes and ensures your company remains compliant across all jurisdictions, reducing risk and avoiding penalties.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Enhanced Governance Practices",
      description:
        "Strengthen your corporate governance with professional company secretarial support.",
      details:
        "Implement best practices in corporate governance that build stakeholder confidence and support sustainable business growth.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Timely Statutory Filings",
      description:
        "Ensure all annual returns and filings are submitted accurately and on time.",
      details:
        "Never miss a deadline with our comprehensive filing calendar and proactive reminder system that keeps your business in good standing.",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Confidential Record Management",
      description:
        "Protect and organize your corporate records with secure, meticulous management.",
      details:
        "Maintain complete, accurate records with our secure digital and physical storage solutions, ensuring confidentiality and easy access when needed.",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expert Knowledge",
      description:
        "Our qualified company secretaries have extensive experience across multiple jurisdictions and industries.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Reach",
      description:
        "Comprehensive secretarial services available worldwide, ensuring consistency across all your entities.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Proven Track Record",
      description:
        "Trusted by businesses of all sizes, from startups to multinational corporations.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Risk Mitigation",
      description:
        "Proactive compliance management reduces regulatory risks and protects your business reputation.",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Company Secretarial Services
              </h1>
              <p className="max-w-[700px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ensure compliance and maintain good corporate governance with
                our professional secretarial services across multiple
                jurisdictions.
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

      {/* Services Overview */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Comprehensive Secretarial Support
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              From statutory filings to board meeting support, we handle all
              your secretarial needs.
            </p>
          </div>
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

      {/* Detailed Services Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Secretary Services
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              We provide company secretarial services to a diverse range of
              businesses. Whether your business is small or large, and
              regardless of the complexity of your needs, our expert teams stay
              fully informed of the latest regulations and best practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {detailedServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-rose-100 flex-shrink-0">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Benefits of Company Secretarial Services
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Simplify your governance and compliance with our expert Company
              Secretarial Services tailored for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-md transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-rose-100 flex-shrink-0">
                    <div className="text-primary">{benefit.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 mb-4">{benefit.description}</p>
                    <p className="text-sm text-gray-500">{benefit.details}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-primary hover:text-primary/80 mt-4 text-sm font-medium"
                    >
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose CSG Advisory?
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Our commitment to excellence and deep expertise make us the
              trusted choice for company secretarial services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all text-center"
              >
                <div className="p-3 rounded-full bg-rose-100 w-fit mx-auto mb-4">
                  <div className="text-primary">{item.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We are committed to delivering comprehensive company secretarial
              support to ensure your entities maintain strong governance and
              compliance at all times. Our expert teams stay fully informed of
              the latest regulations and best practices, providing you with the
              confidence that your corporate governance is in capable hands.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-gray-600">Support Available</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-sm text-gray-600">Jurisdictions Covered</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  99.9%
                </div>
                <p className="text-sm text-gray-600">Compliance Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Stay Compliant with Expert Support
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let us handle your company secretarial requirements so you can
              focus on growing your business.
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
