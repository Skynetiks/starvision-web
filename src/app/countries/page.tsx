import CountriesGrid from "@/components/countries-grid";

export const metadata = {
  title: "Explore Company Registration in 50+ Countries | CSG Advisory",
  description:
    "Browse through 50+ global jurisdictions for company registration. Discover the benefits, compliance requirements, and setup timelines tailored to each country with CSG Advisory’s expert guidance.",
  keywords:
    "company registration countries, international jurisdictions, business setup by country, global business incorporation, offshore company locations, register business worldwide, country-specific company formation, international business destinations, global entity setup, cross-border registration",
  openGraph: {
    title: "Explore Company Registration in 50+ Countries | CSG Advisory",
    description:
      "Browse through 50+ global jurisdictions for company registration. Discover the benefits, compliance requirements, and setup timelines tailored to each country with CSG Advisory’s expert guidance.",
    images: [
      {
        url: "/images/team.webp",
        width: 1200,
        height: 630,
        alt: "International Company Registration Destinations",
      },
    ],
  },
  alternates: {
    canonical: `https://${process.env.BASE_URL}/countries`,
  },
};

export default function CountriesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Global Business Registration
              </h1>
              <p className="max-w-[700px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose from our extensive network of jurisdictions to find the
                perfect location for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CountriesGrid />
    </main>
  );
}
