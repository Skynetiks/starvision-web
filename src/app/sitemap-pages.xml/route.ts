import { businessData } from "@/lib/businessData";
import { getServerSideURL } from "@/payload/utilities/getURL";
import { NextResponse } from "next/server";

export async function GET() {
  const url = getServerSideURL();

  // Base routes
  const routes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/countries",
    "/blogs",
    "/schedule-consultation",
  ].map((route) => ({
    url: `${url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }));

  const serviceRoutes = [
    "/services/accounting-and-tax",
    "/services/bank-account-opening",
    "/services/company-registration",
    "/services/company-secretarial",
    "/services/director-services",
    "/services/hr-and-payroll",
  ].map((route) => ({
    url: `${url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const countries = businessData.map((data) => ({
    url: `${url}/countries/${data.country}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const policyRoutes = ["/terms", "/privacy"].map((route) => ({
    url: `${url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const allPages = [...routes, ...serviceRoutes, ...countries, ...policyRoutes];

  // Generate XML sitemap
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified.toISOString()}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
