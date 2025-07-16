import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `https://${process.env.BASE_URL}/sitemap.xml`, // Needs to be updated with the actual URL
    host: `https://${process.env.BASE_URL}`, // Needs to be updated with the actual URL
  }
}
