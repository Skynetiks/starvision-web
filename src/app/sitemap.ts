import { blogPosts } from "@/lib/blogData";
import { businessData } from "@/lib/businessData";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.BASE_URL;
  // Base routes
  const routes = ["", "/about", "/contact", "/services", "/countries"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    })
  );

  const serviceRoutes = [
    "/services/account-and-tax",
    "/services/bank-account-opening",
    "/services/company-registration",
    "/services/company-secretarial",
    "/services/director-servcies",
    "/services/hr-and-payroll",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const countries = businessData.map((data) => ({
    url: `${baseUrl}/countries/${data.country}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date ?? new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const policyRoutes = ["/terms", "/privacy"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...routes,
    ...serviceRoutes,
    ...blogRoutes,
    ...countries,
    ...policyRoutes,
  ];
}
