import type { MetadataRoute } from "next";
import { getServerSideURL } from "@/payload/utilities/getURL";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin",
    },
    sitemap: [
      `${getServerSideURL()}/sitemap.xml`,
      `${getServerSideURL()}/sitemap-blogs.xml`,
      `${getServerSideURL()}/sitemap-pages.xml`,
    ],
  };
}
