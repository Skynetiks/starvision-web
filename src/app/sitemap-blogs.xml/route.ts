import type { Blog, Category } from "@/payload/payload-types";
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

  //   const categories: Omit<Category, "id" | "createdAt" | "title" | "content">[] =
  //     await payload
  //       .find({
  //         collection: "categories",
  //         limit: 0,
  //         where: {},
  //         select: {
  //           slug: true,
  //           updatedAt: true,
  //         },
  //       })
  //       .then((res) => res.docs);

  // Generate XML sitemap
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogs
  .map(
    (blog) => `  <url>
    <loc>${url}/blogs/${blog.slug}</loc>
    <lastmod>${blog.updatedAt}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
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
