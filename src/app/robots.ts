import type { MetadataRoute } from "next";
import { getServerSideURL } from "@/payload/utilities/getURL";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/api",
          "/_next",
          "/payload",
          "/graphql",
          "/graphql-playground",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin", "/api", "/_next", "/payload"],
      },
    ],
    sitemap: [
      `${getServerSideURL()}/sitemap.xml`,
      `${getServerSideURL()}/sitemap-blogs.xml`,
      `${getServerSideURL()}/sitemap-pages.xml`,
    ],
    host: getServerSideURL(),
  };
}
