import type { Metadata } from "next/types";
import { PageRange } from "@/payload/components/PageRange";
import { Pagination } from "@/payload/components/Pagination";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import React from "react";
import { Card } from "@/payload/components/Card";
import { notFound } from "next/navigation";
import { BlogListingBreadcrumbs } from "@/payload/components/Breadcrumbs";
import CustomError from "@/components/custom-error";

export const dynamic = "force-static";
export const revalidate = 600;

type Args = {
  params: Promise<{
    pageNumber: string;
  }>;
};

export default async function Page({ params: paramsPromise }: Args) {
  const { pageNumber } = await paramsPromise;
  const sanitizedPageNumber = Number(pageNumber);

  if (!Number.isInteger(sanitizedPageNumber) || sanitizedPageNumber < 1) {
    notFound();
  }
  try {
    const payload = await getPayload({ config: configPromise });

    const blogsPayload = await payload.find({
      collection: "blogs",
      where: { featured: { not_equals: true } },
      depth: 2,
      limit: 12,
      page: sanitizedPageNumber,
    });

    // If page number is greater than total pages, return 404
    if (sanitizedPageNumber > blogsPayload.totalPages) {
      notFound();
    }

    const blogs = blogsPayload.docs;

    return (
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              {/* Breadcrumbs */}
              {/* <BlogListingBreadcrumbs
                currentPage={sanitizedPageNumber}
                className="text-white/80 mb-4"
              /> */}

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

        {/* Blog Posts Grid */}
        <section className="w-full flex justify-center py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                  Latest Insights
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our latest insights and expert advice on international
                  business registration, compliance, and global expansion
                  strategies.
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
              <CustomError
                title="No insights available"
                message="We're currently working on creating valuable insights for you. Check back soon for the latest insights on international business registration and global compliance."
              />
            )}
          </div>
        </section>
      </main>
    );
  } catch (error) {
    console.error(`Error rendering blog page ${pageNumber}:`, error);

    // Return a user-friendly error page
    return (
      <main className="flex flex-col min-h-screen">
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  CSG Advisory Insights
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full flex justify-center py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <CustomError
              title="No insights available"
              message="We're currently working on creating valuable insights for you. Check back soon for the latest insights on international business registration and global compliance."
            />
          </div>
        </section>
      </main>
    );
  }
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise;
  const title = `Insights - Page ${pageNumber} | CSG Advisory`;
  const description = `Page ${pageNumber} of our blog featuring insights on international business registration, compliance, and global expansion strategies.`;
  const fullUrl = `https://${
    process.env.BASE_URL || "csgadvisory.com"
  }/blogs/page/${pageNumber}`;

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
          alt: "CSG Advisory Blog - Page " + pageNumber,
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
          alt: "CSG Advisory Insights - Page " + pageNumber,
        },
      ],
      creator: "@csgadvisory",
      site: "@csgadvisory",
    },
  };
}

export async function generateStaticParams() {
  if (!process.env.DATABASE_URI) {
    console.log("No DATABASE_URI found, skipping static generation for blogs");
    return [];
  }
  try {
    const payload = await getPayload({ config: configPromise });
    const { totalDocs } = await payload.count({
      collection: "blogs",
      where: { featured: { not_equals: true } },
      overrideAccess: false,
    });

    const totalPages = Math.ceil(totalDocs / 12);

    const pages: { pageNumber: string }[] = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push({ pageNumber: String(i) });
    }

    return pages;
  } catch (error) {
    console.error("Failed to generate static params for blog pages:", error);

    // Return empty array to allow build to succeed
    // This means no static pages will be pre-generated
    return [];
  }
}
