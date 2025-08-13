import { buttonVariants } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Layout,
  ServerCog,
  Settings2,
  Smartphone,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "IT Consultancy | Digital Transformation Experts – CSG",
  description:
    "Get expert IT consultancy for global businesses. CSG Advisory provides digital transformation and IT strategy services aligned with your growth objectives.",
};

export default function ITConsultancyPage() {
  const solutions = [
    {
      icon: <Settings2 className="h-8 w-8" />,
      title: "HubSpot Integration & Migration",
      description:
        "Maximize your marketing and sales efficiency with seamless HubSpot CRM integration.",
      features: [
        "Migrating from Salesforce, Zoho, or legacy CRMs to HubSpot",
        "Full integration with your website, forms, and marketing workflows",
        "Custom automation, email sequences, and dashboards",
        "API-based integration with third-party tools (e.g., payment systems, chat, ERP, email platforms)",
      ],
      additional: {
        key: "Why Us?",
        value:
          "We ensure zero data loss, minimal downtime, and a fully configured, scalable HubSpot setup tailored to your sales and marketing process.",
      },
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: "Website Development",
      description:
        "We craft professional, high-performing websites that reflect your brand and drive results.",
      features: [
        "WordPress, Webflow, Shopify",
        "Custom development (HTML/CSS/JavaScript, React)",
        "CMS customization & third-party integrations",
        "Speed optimization, mobile-first design, SEO best practices",
      ],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "App Development",
      description:
        "Transform your ideas into intuitive and scalable mobile or web apps",
      features: [
        "Android & iOS apps (Native or Hybrid: Flutter, React Native)",
        "Cross-platform web applications (PWA, SPA)",
        "Backend development (Node.js, Django, Laravel, etc.)",
        "Real-time features, API integrations, and secure authentication",
      ],
    },
    {
      icon: <ServerCog className="h-8 w-8" />,
      title: "ERP Development",
      description:
        "We design and build *custom ERP solutions* that simplify business processes and unify your operations.",
      features: [
        "Tailor-made ERP systems based on your industry needs",
        "Modules: Sales, Inventory, HR, Accounting, Procurement, etc.",
        " Data migration from legacy systems",
        "Workflow automation, reporting, and integrations",
      ],
      additional: {
        key: " Tech Stack",
        value: "Python, JavaScript, PostgreSQL, REST APIs",
      },
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
                Consultancy Services
              </h1>
              <p className="max-w-[700px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Empowering Your Business with Smart Digital Solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Consultancy Services
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              At <strong>CSG Advisory</strong>, we specialize in delivering
              end-to-end technology solutions that help businesses grow, scale,
              and streamline operations. From{" "}
              <strong>HubSpot CRM integration and migration</strong> to{" "}
              <strong>custom website, app, and ERP development</strong>, our
              goal is to empower your digital transformation with precision and
              performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-rose-100 flex-shrink-0">
                    <div className="text-primary">{solution.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
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
                    {/* {solution.additional && (
                      <div className="mt-4 gap-2 flex flex-col text-gray-600">
                        <strong>{solution.additional.key}</strong>
                        <p>{solution.additional.value}</p>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center py-12 md:py-24 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Why Choose Us?
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 justify-items-center">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-gradient text-white flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold">
                Experienced full-stack developers & business consultants
              </h3>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-gradient text-white flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold">
                Customized solutions, not off-the-shelf templates
              </h3>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-gradient text-white flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold">
                Clear communication and post-launch support
              </h3>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-gradient text-white flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold">
                Agile delivery with transparent project milestones
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to start your digital transformation?
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {"Let's build something great together."}
            </p>
            <Link
              className={buttonVariants({ variant: "default", size: "lg" })}
              href="/contact"
            >
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
