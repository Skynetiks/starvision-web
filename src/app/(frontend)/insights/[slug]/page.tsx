import type { Metadata } from "next";

import { RelatedPostCard } from "@/components/related-post-card";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import React from "react";
import RichText from "@/payload/components/RichText";

import { BlogHero } from "@/payload/heros/BlogHero";
import { generateMeta } from "@/payload/utilities/generateMeta";
import CustomError from "@/components/custom-error";
import { draftMode } from "next/headers";
import { LivePreviewListener } from "@/payload/components/LivePreviewListener";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
// export const revalidate = 600;
// export const revalidate = 0;

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

        <RelatedPostCard
          currentPost={blog}
          className="mt-10 pb-10 max-w-7xl container px-6 mx-auto"
        />
      </article>
    );
  } catch (error) {
    console.error(`Error rendering blog post "${slug}":`, error);

    // Return a user-friendly error page
    return (
      <>
        {draft && <LivePreviewListener />}
        <CustomError
          title="Insight Not Found"
          message="The insight you are looking for does not exist."
        />
      </>
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
