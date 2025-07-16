import { buttonVariants } from "@/components/ui/button";
import {
  Users,
  DollarSign,
  Clock,
  Shield,
  ArrowRight,
  FileText,
  Globe,
  CheckCircle,
  UserCheck,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Global HR and Payroll Services for International Businesses | CSG Advisory",
  description:
    "Reliable HR and payroll solutions tailored for international businesses. Automate payroll, ensure local compliance, and manage global workforce operations efficiently across multiple jurisdictions.",
  keywords:
    "global payroll services, international HR solutions, HR outsourcing, payroll processing, employee onboarding, cross-border payroll compliance, human resources management, international workforce support, expatriate payroll services, HR compliance services",
  openGraph: {
    title:
      "Global HR and Payroll Services for International Businesses | CSG Advisory",
    description:
      "Reliable HR and payroll solutions tailored for international businesses. Automate payroll, ensure local compliance, and manage global workforce operations efficiently across multiple jurisdictions.",
    images: [
      {
        url: "/images/team.webp",
        width: 1200,
        height: 630,
        alt: "HR and Payroll Solutions for Global Teams",
      },
    ],
  },
  alternates: {
    canonical: `https://${process.env.BASE_URL}/services/hr-and-payroll`,
  },
};

export default function HRPayrollPage() {
  const services = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "HR Management",
      description: "Complete human resources management and employee relations",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Payroll Processing",
      description:
        "Accurate and timely payroll processing across jurisdictions",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time & Attendance",
      description: "Employee time tracking and attendance management systems",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Compliance",
      description:
        "Ensure compliance with local employment laws and regulations",
    },
  ];

  const detailedServices = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Payroll Management",
      description:
        "Ensures accurate and timely salary disbursements while maintaining compliance with local tax laws.",
      features: [
        "Multi-currency payroll processing",
        "Automated tax calculations",
        "Direct deposit and payment methods",
        "Employee self-service portals",
      ],
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Payroll Reporting",
      description:
        "Ensure accurate and timely payroll reporting to government authorities for full compliance with tax and labor regulations.",
      features: [
        "Statutory reporting compliance",
        "Tax filing assistance",
        "Annual compliance audits",
        "Real-time reporting dashboards",
      ],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Work Permits Assistance",
      description:
        "Provides end-to-end support for obtaining work permits and visas for international hires.",
      features: [
        "Visa application processing",
        "Documentation preparation",
        "Government liaison services",
        "Renewal and extension support",
      ],
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Employee Onboarding",
      description:
        "Seamless employee onboarding processes to ensure smooth integration into your organization.",
      features: [
        "Digital onboarding workflows",
        "Document verification",
        "Compliance training setup",
        "Benefits enrollment assistance",
      ],
    },
  ];

  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      title: "Full Regulatory Compliance",
      description:
        "Stay compliant with local employment laws and tax regulations across all jurisdictions.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      title: "Scalable Solutions",
      description:
        "Our services grow with your business, supporting expansion into new markets seamlessly.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      title: "Expert Local Knowledge",
      description:
        "Access to local HR experts who understand regional requirements and best practices.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      title: "Cost-Effective Operations",
      description:
        "Reduce overhead costs while maintaining high-quality HR and payroll services.",
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
                HR and Payroll Services
              </h1>
              <p className="max-w-[700px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Streamline your human resources operations with our
                comprehensive HR and payroll services for international
                businesses.
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

      {/* Services Overview Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Complete HR Solutions
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              From payroll processing to employee management, we provide
              end-to-end HR support.
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
              Specialized HR Services
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Our local compliance and HR experts specialize in supporting
              businesses of all sizes, ensuring your operations align with
              regulatory requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {detailedServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
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
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
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
              Why Choose Our HR Services
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Whether expanding into new jurisdictions or managing existing
              teams, our tailored solutions ensure full compliance and
              operational efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Workforce Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Global Workforce Management
            </h2>
            <p className="text-gray-600 md:text-xl/relaxed mb-8">
              We provide guidance on visa and immigration processes to simplify
              global workforce management. From accurate payroll processing to
              seamless employee onboarding, we handle critical HR functions to
              help you focus on growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <UserCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Employee Onboarding
                </h3>
                <p className="text-gray-600">
                  Seamless integration of new hires across global offices
                </p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Visa & Immigration
                </h3>
                <p className="text-gray-600">
                  Complete support for work permits and visa applications
                </p>
              </div>
              <div className="text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Compliance Management
                </h3>
                <p className="text-gray-600">
                  Ensure adherence to local employment laws and regulations
                </p>
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
              Simplify Your HR Operations
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Focus on your business growth while we handle your HR and payroll
              needs.
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
