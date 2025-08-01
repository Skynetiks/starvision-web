import type { Metadata } from "next/types";
import { PageRange } from "@/payload/components/PageRange";
import { Pagination } from "@/payload/components/Pagination";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import React from "react";
import { Card } from "@/payload/components/Card";
import { notFound } from "next/navigation";
import { BlogListingBreadcrumbs } from "@/payload/components/Breadcrumbs";
import Link from "next/link";

export const dynamic = "force-static";
export const revalidate = 600;

type Args = {
  params: Promise<{
    pageNumber: string;
  }>;
};

export default async function Page({ params: paramsPromise }: Args) {
  const { pageNumber } = await paramsPromise;
  const payload = await getPayload({ config: configPromise });

  const sanitizedPageNumber = Number(pageNumber);

  if (!Number.isInteger(sanitizedPageNumber) || sanitizedPageNumber < 1) {
    notFound();
  }

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
            <BlogListingBreadcrumbs
              currentPage={sanitizedPageNumber}
              className="text-white/80 mb-4"
            />

            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                CSG Advisory Blog
              </h1>
              <p className="max-w-[700px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest insights on international business
                registration, global compliance, and expansion strategies.
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
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="max-w-md mx-auto">
                <div className="mb-6">
                  <svg
                    className="mx-auto h-16 w-16 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No blog posts available
                </h3>
                <p className="text-gray-500 mb-6">
                  We&apos;re currently working on creating valuable content for
                  you. Check back soon for the latest insights on international
                  business registration and global compliance.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link
                    href="/blogs"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-logo-primary to-logo-secondary hover:from-logo-primary/90 hover:to-logo-secondary/90 transition-all duration-200"
                  >
                    Back to Blogs
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200"
                  >
                    Return to Home
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise;
  const title = `Blog - Page ${pageNumber} | CSG Advisory`;
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
          alt: "CSG Advisory Blog - Page " + pageNumber,
        },
      ],
      creator: "@csgadvisory",
      site: "@csgadvisory",
    },
  };
}

export async function generateStaticParams() {
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
}
