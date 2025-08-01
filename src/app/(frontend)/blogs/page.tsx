import type { Metadata } from "next/types";
import { PageRange } from "@/payload/components/PageRange";
import { Pagination } from "@/payload/components/Pagination";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import React from "react";
import { Card } from "@/payload/components/Card";
import { FeaturedCard } from "@/payload/components/Card/featured-card";
import { BlogListingBreadcrumbs } from "@/payload/components/Breadcrumbs";
import { ErrorPage } from "@/components/error-page";

export const dynamic = "force-static";
export const revalidate = 600;

export default async function Page() {
  try {
    console.log("revalidating blogs page");
    if (!process.env.DATABASE_URI) {
      console.log(
        `No DATABASE_URI found in ${process.env.NODE_ENV} environment, skipping static generation for blogs`
      );
      throw new Error("No DATABASE_URI found");
    }
    const payload = await getPayload({ config: configPromise });

    const featuredBlog = await payload.find({
      collection: "blogs",
      where: { featured: { equals: true } },
      limit: 1,
      depth: 2,
    });
    const featuredBlogData = featuredBlog.docs?.[0];

    const blogsPayload = await payload.find({
      collection: "blogs",
      where: { featured: { not_equals: true } },
      depth: 2,
      limit: 12,
      page: 1,
    });
    const blogs = blogsPayload.docs;

    return (
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              {/* Breadcrumbs */}
              <BlogListingBreadcrumbs className="text-white/80 mb-4" />

              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  CSG Advisory Blog
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
        <section className="w-full flex justify-center py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              {featuredBlogData && (
                <FeaturedCard
                  doc={featuredBlogData}
                  relationTo="blogs"
                  showCategories={true}
                />
              )}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="w-full flex justify-center py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                  Latest Articles
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our latest insights and expert advice on international
                  business registration.
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

            {blogs && blogs.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-6xl mx-auto">
                  {blogs.map((post) => (
                    <Card
                      key={post.id}
                      doc={post}
                      relationTo="blogs"
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
              </>
            ) : (
              <ErrorPage
                title="No blog posts available"
                message="We're currently working on creating valuable content for you. Check back soon for the latest insights on international business registration and global compliance."
                primaryAction={{
                  href: "/",
                  label: "Return to Home",
                }}
                icon="info"
              />
            )}
          </div>
        </section>
      </main>
    );
  } catch (error) {
    console.error("Error rendering blogs page:", error);

    // Return a user-friendly error page
    return (
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  CSG Advisory Blog
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

        {/* Error Section */}
        <section className="w-full flex justify-center py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <ErrorPage
              title="Service Temporarily Unavailable"
              message="We're experiencing technical difficulties loading the blog. Please try again later."
              primaryAction={{
                href: "/",
                label: "Return to Home",
              }}
              icon="error"
            />
          </div>
        </section>
      </main>
    );
  }
}

export function generateMetadata(): Metadata {
  const title = "Blog | CSG Advisory";
  const description =
    "Stay updated with the latest insights on international business registration, compliance, and global expansion strategies from CSG Advisory experts.";
  const fullUrl = `https://${process.env.BASE_URL || "csgadvisory.com"}/blogs`;

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
          alt: "CSG Advisory Blog - Business Registration Insights",
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
          alt: "CSG Advisory Blog - Business Registration Insights",
        },
      ],
      creator: "@csgadvisory",
      site: "@csgadvisory",
    },
  };
}
