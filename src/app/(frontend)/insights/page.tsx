import type { Metadata } from "next/types";
import { PageRange } from "@/payload/components/PageRange";
import { Pagination } from "@/payload/components/Pagination";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import React from "react";
import { Card } from "@/payload/components/Card";
import { FeaturedCard } from "@/payload/components/Card/featured-card";
import { BlogListingBreadcrumbs } from "@/payload/components/Breadcrumbs";
import CustomError from "@/components/custom-error";

export const dynamic = "force-dynamic";
// export const revalidate = 0;

export default async function Page() {
  try {
    if (!process.env.DATABASE_URI) {
      console.log(
        `No DATABASE_URI found in ${process.env.NODE_ENV} environment, skipping static generation for blogs`
      );
      throw new Error("No DATABASE_URI found");
    }
    const payload = await getPayload({ config: configPromise });

    const featuredBlog = await payload.find({
      collection: "blogs",
      draft: false,
      overrideAccess: false,
      where: { featured: { equals: true } },
      limit: 1,
      depth: 2,
      sort: "publishedAt",
    });
    const featuredBlogData = featuredBlog.docs?.[0];

    const blogsPayload = await payload.find({
      collection: "blogs",
      draft: false,
      overrideAccess: false,
      where: {
        ...(featuredBlogData?.id
          ? { id: { not_equals: featuredBlogData.id } }
          : {}),
      },
      depth: 2,
      limit: 12,
      page: 1,
      sort: "publishedAt",
    });
    const blogs = blogsPayload.docs;

    if (!featuredBlogData && !blogs) {
      throw new Error("No blog posts available");
    }
    return (
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              {/* Breadcrumbs */}
              {/* <BlogListingBreadcrumbs className="text-white/80 mb-4" /> */}

              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  CSG Advisory Insights
                </h1>
                <p className="max-w-[700px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with the latest insights on international
                  business registration, global compliance, and expansion
                  strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredBlogData && (
          <section className="w-full flex justify-center py-12 md:py-24 bg-white">
            <div className="container px-4 md:px-6">
              <div className="max-w-7xl mx-auto">
                <FeaturedCard
                  doc={featuredBlogData}
                  relationTo="insights"
                  showCategories={true}
                />
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        {blogs && blogs.length > 0 && (
          <section className="w-full flex justify-center py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                    Latest Insights
                  </h2>
                  <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Explore our latest insights and expert advice on
                    international business registration, compliance, and global
                    expansion strategies.
                  </p>
                </div>
              </div>

              <div className="mb-8 flex justify-end max-w-7xl">
                <PageRange
                  collection="blogs"
                  currentPage={blogsPayload.page}
                  limit={12}
                  totalDocs={blogsPayload.totalDocs}
                  className="text-gray-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-6xl mx-auto">
                {blogs.map((post) => (
                  <Card
                    key={post.id}
                    doc={post}
                    relationTo="insights"
                    showCategories={true}
                  />
                ))}
              </div>
              <div className="container">
                {blogsPayload.totalPages > 1 && blogsPayload.page && (
                  <Pagination
                    page={blogsPayload.page}
                    totalPages={blogsPayload.totalPages}
                  />
                )}
              </div>
            </div>
          </section>
        )}
      </main>
    );
  } catch (error) {
    // Return a user-friendly error page
    return (
      <CustomError
        title="No insights available"
        message="We're currently working on creating valuable insights for you. Stay tuned."
      />
    );
  }
}

export function generateMetadata(): Metadata {
  const title = "Insights | CSG Advisory";
  const description =
    "Stay updated with the latest insights on international business registration, compliance, and global expansion strategies from CSG Advisory experts.";
  const fullUrl = `https://${
    process.env.BASE_URL || "csgadvisory.com"
  }/insights`;

  return {
    title,
    description,
    metadataBase: new URL(
      `https://${process.env.BASE_URL || "csgadvisory.com"}`
    ),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      type: "website",
      locale: "en_US",
      siteName: "CSG Advisory",
      images: [
        {
          url: "/images/team.webp",
          width: 1200,
          height: 630,
          alt: "CSG Advisory Insights - Business Registration Insights",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: "/images/team.webp",
          width: 1200,
          height: 630,
          alt: "CSG Advisory Insights - Business Registration Insights",
        },
      ],
      creator: "@csgadvisory",
      site: "@csgadvisory",
    },
  };
}
