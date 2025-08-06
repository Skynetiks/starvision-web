import { getServerSideURL } from "@/payload/utilities/getURL";
import { NextResponse } from "next/server";

export async function GET() {
  const url = getServerSideURL();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${url}/sitemap-pages.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${url}/sitemap-insights.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
