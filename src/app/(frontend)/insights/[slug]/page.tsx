import type { Metadata } from "next";

import { RelatedPostCard } from "@/components/related-post-card";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import React from "react";
import RichText from "@/payload/components/RichText";

import { BlogHero } from "@/payload/heros/BlogHero";
import { generateMeta } from "@/payload/utilities/generateMeta";
import { SelectSeparator } from "@/components/ui/select";
import CustomError from "@/components/custom-error";
import { draftMode } from "next/headers";
import { LivePreviewListener } from "@/payload/components/LivePreviewListener";
import { notFound } from "next/navigation";
import { Category } from "@/payload/payload-types";

// export const dynamic = "force-static";
// export const revalidate = 600;
export const revalidate = false;

export async function generateStaticParams() {
  return [];
}

type Args = {
  params: Promise<{
    slug?: string;
  }>;
};

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode();
  const { slug = "" } = await paramsPromise;

  try {
    const blog = await queryBlogBySlug({ slug });
    const relatedBlogs = await getRelatedBlogs({
      slug,
      categories: blog?.categories || [],
    });

    if (!blog) {
      notFound();
    }

    return (
      <article className="pt-16 pb-20">
        {/* Allows redirects for valid pages too */}
        {draft && <LivePreviewListener />}
        <BlogHero blog={blog} />

        <div className="flex flex-col items-center gap-4 pt-16 min-h-[calc(70svh)]">
          <div className="container p-4">
            <RichText
              className="max-w-[48rem] mx-auto"
              data={blog.content}
              enableGutter={false}
              enableProse={true}
            />
          </div>
        </div>

        {relatedBlogs.length > 0 && (
          <>
            <div className="container py-20 mx-auto">
              <SelectSeparator />
            </div>
            <RelatedPostCard
              currentPost={blog}
              className="mt-10 pb-10 max-w-7xl container px-6 mx-auto"
            />
          </>
        )}
      </article>
    );
  } catch (error) {
    console.error(`Error rendering blog post "${slug}":`, error);

    // Return a user-friendly error page
    return (
      <div className="pt-16 pb-20 h-[calc(100svh)] flex items-center justify-center">
        {draft && <LivePreviewListener />}
        <div className="container mx-auto px-4">
          <CustomError
            title="Insight Not Found"
            message="The insight you are looking for does not exist."
          />
        </div>
      </div>
    );
  }
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { slug = "" } = await paramsPromise;
  const blog = await queryBlogBySlug({ slug });

  return generateMeta({ doc: blog });
}

const queryBlogBySlug = async ({ slug }: { slug: string }) => {
  try {
    const payload = await getPayload({ config: configPromise });
    const { isEnabled: draft } = await draftMode();

    const result = await payload.find({
      collection: "blogs",
      limit: 1,
      draft,
      overrideAccess: draft,
      pagination: false,
      populate: {
        categories: {
          title: true,
        },
      },
      where: {
        slug: {
          equals: slug,
        },
      },
    });
    return result.docs?.[0] || null;
  } catch (error) {
    console.error(`Failed to fetch blog with slug "${slug}":`, error);

    // Return null to trigger notFound()
    return null;
  }
};

const getRelatedBlogs = async ({
  slug,
  categories,
}: {
  slug: string;
  categories: (number | Category)[];
}) => {
  const payload = await getPayload({ config: configPromise });
  const relatedBlogs = await payload.find({
    collection: "blogs",
    draft: false,
    overrideAccess: false,
    where: {
      slug: { not_equals: slug },
      ...(categories.length > 0 ? { categories: { in: categories } } : {}),
    },
    limit: 3,
    depth: 2,
    sort: "publishedAt",
  });
  return relatedBlogs.docs;
};
