import type { Metadata } from "next/types";
import { PageRange } from "@/payload/components/PageRange";
import { Pagination } from "@/payload/components/Pagination";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import React from "react";
import { Blog, Media, Category } from "@/payload/payload-types";
import { Card } from "@/payload/components/Card";
import { FeaturedCard } from "@/components/featured-card";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const revalidate = 600;

export function normalizeBlog(raw: Blog): Blog {
  const normalizeMedia = (media: any): Media | undefined => {
    if (!media || typeof media !== "object" || !media.url) return undefined;

    return {
      id: media.id,
      title: media.title,
      altDescription: media.altDescription || "",
      url: media.url,
      thumbnailURL: media.thumbnailURL || "",
      filename: media.filename,
      mimeType: media.mimeType,
      filesize: media.filesize,
      width: media.width,
      height: media.height,
      focalX: media.focalX,
      focalY: media.focalY,
      createdAt: media.createdAt,
      updatedAt: media.updatedAt,
      credit: {
        creator: media.credit?.creator ?? null,
        creatorType: media.credit?.creatorType ?? null,
        creatorLink: media.credit?.creatorLink ?? null,
      },
    };
  };

  const normalizeMeta = (meta: any): Blog["meta"] => {
    return {
      title: meta?.title ?? "",
      description: meta?.description ?? "",
      image: normalizeMedia(meta?.image),
    };
  };
  const doc = raw;
  return {
    id: doc.id,
    title: doc.title,
    slug: doc.slug,
    content: doc.content,
    updatedAt: doc.updatedAt,
    createdAt: doc.createdAt,
    heroImage: normalizeMedia(doc.heroImage),
    categories: Array.isArray(doc.categories)
      ? doc.categories.map((cat: any) => {
          if (typeof cat === "object" && cat !== null) {
            return {
              id: cat.id,
              title: cat.title,
              updatedAt: cat.updatedAt,
              createdAt: cat.createdAt,
            };
          }
          return cat;
        })
      : [],
    meta: normalizeMeta(doc.meta),
    publishedAt: doc.publishedAt,
  };
}

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
    // where: { featured: { not_equals: true } },
    depth: 2,
    limit: 1,
    page: sanitizedPageNumber,
  });

  // If page number is greater than total pages, return 404
  if (sanitizedPageNumber > blogsPayload.totalPages) {
    notFound();
  }

  const blogs = blogsPayload.docs?.map(normalizeBlog);

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
        </div>
      </section>
    </main>
  );
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise;
  return {
    title: `Blogs - Page ${pageNumber} | CSG Advisory`,
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
