import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  ArrowRight,
  Building,
  CheckCircle,
  ChevronRight,
  Clock,
  Globe,
  Users,
  Shield,
  FileText,
  Briefcase,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Company Registration Services in 50+ Jurisdictions",
  description:
    "Efficient and compliant company registration services across 50+ countries. Get expert guidance on business formation, legal structuring, and regulatory compliance tailored to your business goals.",
  keywords:
    "company registration services, international business formation, offshore company setup, business incorporation services, global company registration, legal business structuring, foreign company setup, business compliance services, entity formation experts, cross-border incorporation",
  openGraph: {
    title: "Global Company Registration Services in 50+ Jurisdictions",
    description:
      "Efficient and compliant company registration services across 50+ countries. Get expert guidance on business formation, legal structuring, and regulatory compliance tailored to your business goals.",
    images: [
      {
        url: "/images/team.webp",
        width: 1200,
        height: 630,
        alt: "Company Registration Across Borders",
      },
    ],
  },
  alternates: {
    canonical: `https://${process.env.BASE_URL}/services/company-registration`,
  },
};

export default function CompanyRegistrationPage() {
  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Reach",
      description: "Register your company in 50+ jurisdictions worldwide",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Processing",
      description: "Quick turnaround times with expedited options available",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Full Compliance",
      description:
        "Ensure your company meets all local regulatory requirements",
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Multiple Entity Types",
      description: "Support for LLCs, Corporations, Partnerships, and more",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "Discuss your business needs and jurisdiction requirements",
    },
    {
      step: "2",
      title: "Documentation",
      description: "Prepare and review all necessary incorporation documents",
    },
    {
      step: "3",
      title: "Filing",
      description: "Submit your application to the relevant authorities",
    },
    {
      step: "4",
      title: "Completion",
      description:
        "Receive your certificate of incorporation and company documents",
    },
  ];

  const services = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Company Incorporation",
      description:
        "We oversee the entire incorporation process across various jurisdictions, managing all legal documentation and regulatory requirements to set up your entities seamlessly and efficiently.",
      features: [
        "Legal Documentation",
        "Regulatory Compliance",
        "Multi-jurisdiction Support",
      ],
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Registered Office",
      description:
        "We provide registered office services in key jurisdictions, ensuring your entity maintains a professional presence and meets all local compliance requirements.",
      features: ["Professional Address", "Mail Handling", "Local Compliance"],
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Statutory Filings",
      description:
        "Our team handles all necessary statutory filings to keep your entity in good standing, managing deadlines and documentation with precision.",
      features: [
        "Deadline Management",
        "Document Preparation",
        "Compliance Monitoring",
      ],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "License Applications",
      description:
        "We assist with the preparation and submission of license applications, navigating complex regulatory requirements to secure necessary permits.",
      features: [
        "Regulatory Navigation",
        "Application Preparation",
        "Permit Acquisition",
      ],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Initial Appointments",
      description:
        "We facilitate the appointment of initial directors, officers, and other key positions required during entity formation.",
      features: ["Director Appointments", "Officer Selection", "Key Positions"],
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Bank Account Opening",
      description:
        "Our comprehensive account opening service manages the entire process from initial application to account activation. We handle complex documentation requirements and regulatory compliance.",
      features: [
        "Documentation Support",
        "Multi-bank Coordination",
        "Compliance Management",
      ],
    },
  ];

  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Streamlined Company Registration",
      description:
        "Effortlessly register your business with our expert guidance and support.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Comprehensive Legal Compliance",
      description:
        "Ensure your business adheres to all legal requirements from day one.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast-Track Processing",
      description:
        "Get your company registered quickly with our expedited processing services.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Consultation & Support",
      description:
        "Receive personalized advice and ongoing support for your business needs.",
    },
  ];

  const jurisdictions = [
    "United States",
    "United Kingdom",
    "Singapore",
    "Hong Kong",
    "British Virgin Islands",
    "Cayman Islands",
    "Delaware",
    "Switzerland",
    "Luxembourg",
    "Netherlands",
    "Malta",
    "Cyprus",
    "UAE",
    "Seychelles",
    "Panama",
    "Belize",
  ];

  const entityTypes = [
    {
      type: "Limited Liability Company (LLC)",
      description:
        "Flexible business structure with limited liability protection and tax advantages.",
    },
    {
      type: "Corporation (C-Corp/S-Corp)",
      description:
        "Traditional corporate structure with separate legal entity status and investor-friendly features.",
    },
    {
      type: "Partnership (LP/LLP)",
      description:
        "Business structure for multiple owners with shared responsibilities and profits.",
    },
    {
      type: "International Business Company (IBC)",
      description:
        "Offshore corporate structure designed for international business operations.",
    },
    {
      type: "Foundation",
      description:
        "Legal entity structure for wealth management, succession planning, and philanthropy.",
    },
    {
      type: "Trust",
      description:
        "Fiduciary arrangement for asset protection, estate planning, and wealth preservation.",
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
                Company Registration Services
              </h1>
              <p className="max-w-[700px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional business formation services across multiple
                jurisdictions. Get your company registered quickly and
                compliantly with our expert team.
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

      {/* Features Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose Our Registration Services?
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              We make business registration simple, fast, and compliant across
              all jurisdictions.
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

      {/* Comprehensive Services Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Comprehensive Services
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              We have extensive experience assisting clients of all sizes with
              the creation of companies, trusts, and partnerships in key
              jurisdictions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col p-8 bg-white border border-rose-100 rounded-xl shadow-sm hover:shadow-lg transition-all"
              >
                <div className="p-3 rounded-full bg-rose-100 w-fit mb-6">
                  <div className="text-primary">{service.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Registration Process
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              A streamlined 4-step process to get your company registered
              efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div
                key={index}
                className="flex flex-col p-6 bg-white border border-rose-100 rounded-xl shadow-sm text-center relative"
              >
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-3 z-10">
                    <ArrowRight className="h-6 w-6 text-gray-300" />
                  </div>
                )}
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entity Types Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Entity Types We Support
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Choose the right business structure for your needs with our expert
              guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {entityTypes.map((entity, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-rose-100 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold mb-3 text-primary">
                  {entity.type}
                </h3>
                <p className="text-gray-600 text-sm">{entity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Jurisdictions Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Popular Jurisdictions
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              We offer company registration services in over 50 jurisdictions
              worldwide.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {jurisdictions.map((jurisdiction, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-center hover:bg-rose-50 hover:border-rose-200 transition-all cursor-pointer"
                >
                  <span className="text-sm font-medium text-gray-700">
                    {jurisdiction}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                className={buttonVariants({ variant: "outline", size: "lg" })}
                href="/countries"
              >
                View All Jurisdictions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Benefits of Our Company Registration Services
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Simplify the process of starting your business with our expert
              company registration services designed to meet your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col p-8 bg-white border border-rose-100 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="p-3 rounded-full bg-rose-100 w-fit mb-4">
                  <div className="text-primary">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Register Your Company?
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Contact us today to discuss your business registration needs and
              get started with our expert team.
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
                href="/countries"
              >
                View Jurisdictions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
