import ContactForm from "@/components/contact-form";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | CSG Advisory",
  description:
    "Reach out to CSG Advisory's team for international business setup, company registration, or compliance assistance. We’re here to help you grow globally.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Contact Us
              </h1>
              <p className="max-w-[700px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch with our international business registration
                experts. We&apos;re here to help you expand globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </main>
  );
}
