import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Director Services | Global Company Compliance Support",
  description:
    "CSG Advisory provides Director Services for international entities — ensuring compliance, nominee support, and trusted governance across jurisdictions.",
  keywords:
    "nominee director services, resident director services, international director services, corporate governance solutions, professional directorship, offshore company director, board representation services, director compliance services, third-party director, global entity management",
  openGraph: {
    title:
      "Nominee & Professional Director Services for International Businesses",
    description:
      "Comprehensive director services including nominee directors, resident directors, and corporate governance support. Ensure regulatory compliance and maintain confidentiality across global jurisdictions.",
    images: [
      {
        url: "/images/team.webp",
        width: 1200,
        height: 630,
        alt: "Professional Director and Governance Support",
      },
    ],
  },
  alternates: {
    canonical: `https://${process.env.BASE_URL}/services/director-services`,
  },
};

export default function DirectorServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Professional Director Services
              </h1>
              <p className="max-w-[700px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Expert director services including nominee directors and
                corporate governance support for your international business
                operations.
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

      {/* How It Works Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How Our Director Services Work
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              A simple, transparent process designed to meet your regulatory
              requirements efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
              <p className="text-gray-600">
                We assess your specific requirements and regulatory obligations
                to recommend the most suitable director services.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Legal Documentation</h3>
              <p className="text-gray-600">
                Our team prepares all necessary agreements and documentation,
                clearly defining roles, responsibilities, and limitations.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                We provide continuous compliance monitoring and regulatory
                filing support to ensure all obligations are met.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Benefits of Our Director Services
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Simplify director appointments and governance with our tailored
              solutions designed to empower your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Effortless Director Appointments
              </h3>
              <p className="text-gray-600 mb-4">
                Streamline the process of appointing qualified directors with
                our expert guidance and support throughout the entire
                appointment process.
              </p>
              <Link
                href="/contact"
                className="text-primary hover:underline font-medium"
              >
                Learn more →
              </Link>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Compliance & Regulatory Support
              </h3>
              <p className="text-gray-600 mb-4">
                Ensure your appointed directors adhere to all statutory and
                governance requirements seamlessly with our comprehensive
                compliance framework.
              </p>
              <Link
                href="/contact"
                className="text-primary hover:underline font-medium"
              >
                Learn more →
              </Link>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Tailored Appointment Documentation
              </h3>
              <p className="text-gray-600 mb-4">
                Access pre-drafted templates and step-by-step assistance for all
                director appointment documents, customized to your jurisdiction.
              </p>
              <Link
                href="/contact"
                className="text-primary hover:underline font-medium"
              >
                Learn more →
              </Link>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Robust Governance Framework
              </h3>
              <p className="text-gray-600 mb-4">
                Build a strong foundation for your board with scalable
                governance practices and comprehensive risk mitigation
                strategies.
              </p>
              <Link
                href="/contact"
                className="text-primary hover:underline font-medium"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-gradient-to-r from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Comprehensive Director Support
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <h4 className="font-semibold">
                      Local Director Appointment
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Whether you need nominee directors, advisory support, or
                      full-board setups, we ensure adherence to regional laws
                      while maintaining the highest standards of professionalism
                      and transparency.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <h4 className="font-semibold">
                      Compliance and Documentation
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Our team handles all necessary documentation, compliance
                      checks, and communication with local regulatory
                      authorities, ensuring a smooth and efficient process for
                      our clients.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <h4 className="font-semibold">
                      Jurisdiction-Specific Expertise
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We leverage our extensive expertise in global corporate
                      governance to facilitate seamless director appointments
                      across multiple jurisdictions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Our Director Services Promise
              </h3>
              <p className="text-gray-600 mb-6">
                Our directors serve as nominee directors, holding no
                decision-making rights or control. Their role is strictly
                limited to fulfilling the formal requirements of the position,
                ensuring compliance with local regulations while leaving all
                operational and governance decisions in your hands.
              </p>
              <p className="text-gray-600 mb-6">
                CSG Advisory and our clients enter into comprehensive legal
                agreements that outline the terms, conditions, and limitations
                associated with the resident director appointment.
              </p>
              <p className="text-gray-600">
                Furthermore, we can connect you with a wide range of independent
                directors from our extensive network, ensuring you have access
                to the right expertise for your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Common questions about our director services and appointment
              process.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">
                What is a nominee director?
              </h3>
              <p className="text-gray-600">
                A nominee director is appointed to fulfill regulatory
                requirements while having no actual control or decision-making
                authority over the company. They serve in a formal capacity
                only, with all operational decisions remaining with the
                beneficial owners.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">
                Do nominee directors have any liability?
              </h3>
              <p className="text-gray-600">
                Our comprehensive legal agreements clearly define the limited
                scope of nominee directors&apos; responsibilities and include
                appropriate indemnification provisions to protect all parties
                involved.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">
                Which jurisdictions do you cover?
              </h3>
              <p className="text-gray-600">
                We provide director services across multiple international
                jurisdictions, with specific expertise in common offshore and
                onshore corporate centers. Contact us to discuss your specific
                jurisdiction requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">
                How long does the appointment process take?
              </h3>
              <p className="text-gray-600">
                The timeline varies by jurisdiction, but typically ranges from
                1-3 weeks once all documentation is complete and regulatory
                requirements are confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Contact our experts today to discuss your director service
              requirements and ensure full regulatory compliance.
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
