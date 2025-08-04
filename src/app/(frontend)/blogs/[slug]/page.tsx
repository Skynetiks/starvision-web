import type { Metadata } from "next";

import { RelatedPostCard } from "@/components/related-post-card";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import React, { cache } from "react";
import RichText from "@/payload/components/RichText";

import { BlogHero } from "@/payload/heros/BlogHero";
import { generateMeta } from "@/payload/utilities/generateMeta";
import { notFound } from "next/navigation";
import { SelectSeparator } from "@/components/ui/select";
import { ErrorPage } from "@/components/error-page";

export async function generateStaticParams() {
  if (!process.env.DATABASE_URI) {
    console.log(
      `No DATABASE_URI found in ${process.env.NODE_ENV} environment, skipping static generation for blogs`
    );
    return [];
  }
  try {
    const payload = await getPayload({ config: configPromise });
    const blogs = await payload.find({
      collection: "blogs",
      draft: false,
      limit: 1000,
      overrideAccess: false,
      pagination: false,
      select: {
        slug: true,
      },
    });

    const params = blogs.docs.map(({ slug }) => {
      return { slug };
    });

    return params;
  } catch (error) {
    console.error("Failed to generate static params for blogs:", error);

    // Return empty array to allow build to succeed
    // This means no static pages will be pre-generated
    return [];
  }
}

type Args = {
  params: Promise<{
    slug?: string;
  }>;
};

export default async function Post({ params: paramsPromise }: Args) {
  const { slug = "" } = await paramsPromise;

  try {
    const blog = await queryBlogBySlug({ slug });

    if (!blog) {
      notFound();
    }

    return (
      <article className="pt-16 pb-20">
        {/* Allows redirects for valid pages too */}

        <BlogHero blog={blog} />

        <div className="flex flex-col items-center gap-4 pt-16">
          <div className="container p-4">
            <RichText
              className="max-w-[48rem] mx-auto"
              data={blog.content}
              enableGutter={false}
              enableProse={true}
            />
          </div>
        </div>
        <div className="container py-20 mx-auto">
          <SelectSeparator />
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
      <div className="pt-16 pb-20">
        <div className="container mx-auto px-4">
          <ErrorPage
            title="Service Temporarily Unavailable"
            message="We're experiencing technical difficulties. Please try again later."
            primaryAction={{
              href: "/blogs",
              label: "Return to Blogs",
            }}
            icon="error"
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

const queryBlogBySlug = cache(async ({ slug }: { slug: string }) => {
  try {
    const payload = await getPayload({ config: configPromise });

    const result = await payload.find({
      collection: "blogs",
      limit: 1,
      overrideAccess: false,
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
});
