import { CheckCircle, XCircle, Building, FileText } from "lucide-react";
import { getCountryData, getAllCountries } from "@/lib/businessData";
import { notFound } from "next/navigation";
import Image from "next/image";
import GradientText from "@/components/ui/gradient-text";
import ScheduleConsultationButton from "@/components/custom-ui/schedule-consultation-button";
import GetStartedButton from "@/components/custom-ui/get-started-button";

interface CountryPageProps {
  params: Promise<{
    country: string;
  }>;
}

export async function generateStaticParams() {
  return getAllCountries().map((country) => ({
    country,
  }));
}

export async function generateMetadata({ params }: CountryPageProps) {
  const { country } = await params;
  const countryData = await Promise.resolve(getCountryData(country));

  if (!countryData) {
    return {
      title: "Country Not Found | CSG Advisory",
    };
  }

  return {
    title: `${countryData.country} Business Registration | CSG Advisory`,
    description: `Register your business in ${countryData.country}. Explore ${countryData.entities.length} entity types and comprehensive registration services.`,
  };
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { country } = await params;
  const countryData = getCountryData(country);

  if (!countryData) {
    notFound();
  }

  const getEntityCapabilities = (entity: any) => {
    const capabilities = [];
    const limitations = [];

    // Check invoice capabilities
    if (
      entity.can_invoice_local_customers === "Yes" ||
      entity.allowed_to_issue_sales_invoices_to_local_clients === "Yes"
    ) {
      capabilities.push("Can invoice local customers");
    } else {
      limitations.push("Cannot invoice local customers");
    }

    // Check contract capabilities
    if (entity.allowed_to_sign_contracts_with_local_clients === "Yes") {
      capabilities.push("Can sign contracts with local clients");
    } else {
      limitations.push("Cannot sign contracts with local clients");
    }

    // Check office space capabilities
    if (
      entity.can_rent_local_office_space === "Yes" ||
      entity.can_rent_local_office_premises === "Yes"
    ) {
      capabilities.push("Can rent local office space");
    } else {
      limitations.push("Cannot rent local office space");
    }

    // Check import/export capabilities
    if (entity.allowed_to_import_and_export_goods === "Yes") {
      capabilities.push("Import and export allowed");
    } else {
      limitations.push("Import and export not allowed");
    }

    // Check banking capabilities
    if (entity.can_open_local_bank_account === "Yes") {
      capabilities.push("Can open local bank account");
    } else if (entity.can_open_local_bank_account === "No") {
      limitations.push("Cannot open local bank account");
    }

    // Check hiring capabilities
    if (entity.can_hire_local_employees === "Yes") {
      capabilities.push("Can hire local employees");
    } else if (entity.can_hire_local_employees === "No") {
      limitations.push("Cannot hire local employees");
    }

    return { capabilities, limitations };
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full flex justify-center py-12 md:py-24 lg:py-32 overflow-hidden animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 text-white">
              <h1
                className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl`}
              >
                Business Registration in {countryData.country}
              </h1>

              <p
                className={`md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed`}
              >
                Discover the best business entity options for your company in{" "}
                {countryData.country}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="w-full flex justify-center py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                About Business Registration in {countryData.country}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {countryData.description ||
                  "Your gateway to global business opportunities. We help you navigate the business registration process with expert guidance and comprehensive support."}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                alt={`${countryData.country} flag`}
                src={countryData.image}
                width={600}
                height={500}
                className="rounded-lg shadow-sm"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Entity Types Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4">
              Available Entity Types
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose from {countryData.entities.length} different business
              entity types in {countryData.country}.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center max-w-7xl mx-auto">
            {countryData.entities.map((entity, index) => {
              const { capabilities, limitations } =
                getEntityCapabilities(entity);

              return (
                <div
                  key={index}
                  className="flex flex-col p-6 bg-white border border-rose-100 rounded-xl shadow-sm hover:shadow-md transition-all w-full"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-rose-100 w-fit mr-3">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{entity.type}</h3>
                      {entity.also_known_as && (
                        <p className="text-sm text-gray-500">
                          ({entity.also_known_as})
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Minimum Capital Requirement */}
                  {entity.minimum_paid_up_share_capital &&
                    entity.minimum_paid_up_share_capital !== "None" ? (
                      <div className="flex items-center mb-4 p-3 bg-blue-50 rounded-lg">
                        <FileText className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-sm font-medium text-blue-800">
                          Minimum Capital:{" "}
                          {entity.minimum_paid_up_share_capital}
                        </span>
                      </div>
                  ): (
                    <div className="flex items-center mb-4 p-3 bg-blue-50 rounded-lg">
                        <FileText className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-sm font-medium text-blue-800">
                          Minimum Capital Not Required
                        </span>
                      </div>
                  )}

                  <div className="space-y-4 mb-6 flex-grow">
                    {/* Capabilities */}
                    {capabilities.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                          What this entity can do:
                        </h4>
                        <div className="space-y-2">
                          {capabilities.map((capability, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm text-gray-700">
                                {capability}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Limitations */}
                    {limitations.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                          Limitations:
                        </h4>
                        <div className="space-y-2">
                          {limitations.map((limitation, idx) => (
                            <div key={idx} className="flex items-center">
                              <XCircle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                              <span className="text-sm text-gray-600">
                                {limitation}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <GetStartedButton />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-rose-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Ready to Register in{" "}
                <GradientText>{countryData.country}</GradientText>?
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to get started with your business registration
                in {countryData.country}. Our team is here to help you every
                step of the way.
              </p>
              <div className="flex flex-col justify-center sm:flex-row gap-4">
                <GetStartedButton />
                <ScheduleConsultationButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
