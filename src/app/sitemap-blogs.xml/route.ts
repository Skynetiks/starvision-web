import type { Blog } from "@/payload/payload-types";
import { getPayload } from "payload";
import config from "@payload-config";
import { getServerSideURL } from "@/payload/utilities/getURL";
import { NextResponse } from "next/server";

export async function GET() {
  const payload = await getPayload({ config });

  const url = getServerSideURL();
  const blogs: Omit<Blog, "id" | "createdAt" | "title" | "content">[] =
    await payload
      .find({
        collection: "blogs",
        limit: 0,
        where: {},
        select: {
          slug: true,
          updatedAt: true,
        },
      })
      .then((res) => res.docs);

  // Get total pages for pagination
  const { totalDocs } = await payload.count({
    collection: "blogs",
    where: {},
  });
  const totalPages = Math.ceil(totalDocs / 12); // Assuming 12 posts per page

  // Generate blog URLs
  const blogUrls = blogs
    .map(
      (blog) => `  <url>
    <loc>${url}/blogs/${blog.slug}</loc>
    <lastmod>${blog.updatedAt}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("\n");

  // Generate pagination URLs
  const paginationUrls = Array.from({ length: totalPages }, (_, i) => i + 1)
    .map(
      (page) => `  <url>
    <loc>${url}/blogs/page/${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.6</priority>
  </url>`
    )
    .join("\n");

  // Generate XML sitemap
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogUrls}
${paginationUrls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
