import React from "react";

import type { Blog } from "@/payload/payload-types";

import { Media } from "@/payload/components/Media";
import { CategoryBadge, BlogMeta } from "@/payload/components/blog";
import { RelativeTime } from "@/components/ui/relative-time";

export const BlogHero: React.FC<{
  blog: Blog;
}> = ({ blog }) => {
  const { categories, heroImage, populatedAuthors, publishedAt, title } = blog;

  return (
    <div className="relative -mt-[3.4rem] flex items-end">
      <div className="container z-10 p-4 relative lg:grid lg:grid-cols-[1fr_48rem_1fr] text-white pb-8">
        <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
          <CategoryBadge
            categories={categories}
            className="mb-6"
            variant="gradient"
          />

          <div className="">
            <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl">{title}</h1>
          </div>

          <BlogMeta
            populatedAuthors={populatedAuthors}
            publishedAt={<RelativeTime publishedAt={publishedAt || ""} />}
            size="md"
            showLabels={false}
            className="text-white"
          />
          {/* <BlogBreadcrumbs
            title={title}
            category={
              typeof categories?.[0] === "object" && "title" in categories[0]
                ? categories[0].title
                : undefined
            }
            className="text-white/80 mb-6"
          /> */}
        </div>
      </div>
      <div className="min-h-[50vh] select-none">
        {heroImage && typeof heroImage !== "string" && (
          <Media
            fill
            priority
            imgClassName="-z-10 object-cover"
            resource={heroImage}
          />
        )}
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
      </div>
    </div>
  );
};
