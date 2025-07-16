import { Globe, Users, BarChart3 } from "lucide-react";
import DynamicServicesTable from "@/components/service-table";
import ProcessSteps from "@/components/process-steps";
import Testimonials from "@/components/testimonials";
import Faq from "@/components/faq";
import GradientText from "@/components/ui/gradient-text";
import GlobalHeroSection from "@/components/hero";
import ContactForm from "@/components/contact-form";
import ScheduleConsultation from "./schedule-consultation/page";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <GlobalHeroSection />

      {/* Why Choose Us Section */}
      <section className="w-full flex justify-center py-12 md:py-24 ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Why Choose CSG <GradientText>Advisory</GradientText>
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer comprehensive international business registration
                services with a focus on efficiency and compliance.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 justify-items-center">
            <div className="flex flex-col items-center space-y-2 border border-rose-100 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
              <div className="p-3 rounded-full bg-gradient">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Global Expertise</h3>
              <p className="text-gray-500 text-center">
                Specialized knowledge in business registration across 50+
                jurisdictions worldwide.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-rose-100 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
              <div className="p-3 rounded-full bg-gradient">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Expert Team</h3>
              <p className="text-gray-500 text-center">
                Dedicated professionals with extensive experience in
                international business law and regulations.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-rose-100 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
              <div className="p-3 rounded-full bg-gradient">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Proven Results</h3>
              <p className="text-gray-500 text-center">
                Successfully registered over 10,000 businesses with a 99% client
                satisfaction rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="w-full flex justify-center py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Find Your <GradientText>Perfect</GradientText> Location
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore business registration options across multiple
                jurisdictions to find the ideal fit for your needs.
              </p>
            </div>
          </div>
          <DynamicServicesTable />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full flex justify-center py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                How It <GradientText>Works</GradientText>
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our streamlined process makes international business
                registration simple and efficient.
              </p>
            </div>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                What <GradientText>Clients</GradientText> Are Saying
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from entrepreneurs and businesses who have successfully
                expanded globally with our help.
              </p>
            </div>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full flex justify-center py-12 md:py-24 ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Frequently Asked <GradientText>Questions</GradientText>
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about international business
                registration.
              </p>
            </div>
          </div>
          <Faq />
        </div>
      </section>

      {/* Schedule Section */}
      <ScheduleConsultation />

      <ContactForm />
    </main>
  );
}
