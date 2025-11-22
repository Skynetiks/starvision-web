"use client";
import { cn } from "@/payload/utilities/ui";
import useClickableCard from "@/payload/utilities/useClickableCard";
import React from "react";

import type { Blog } from "@/payload/payload-types";

import { Media as MediaComponent } from "@/payload/components/Media";
import {
  CategoryBadge,
  BlogTitle,
  BlogDescription,
  BlogMeta,
  ReadMoreButton,
} from "@/payload/components/blog";
import { RelativeTime } from "@/components/ui/relative-time";

export type FeaturedCardPostData = Blog;

export const FeaturedCard: React.FC<{
  alignItems?: "center";
  className?: string;
  doc?: FeaturedCardPostData;
  relationTo?: "insights";
  showCategories?: boolean;
  title?: string;
}> = (props) => {
  const { card, link } = useClickableCard({});
  const {
    className,
    doc,
    relationTo,
    showCategories,
    title: titleFromProps,
  } = props;

  const {
    slug,
    categories,
    excerpt,
    title,
    heroImage,
    authors,
    publishedAt,
    populatedAuthors,
  } = doc || {};

  const heroImageToUse = heroImage
    ? typeof heroImage === "object"
      ? heroImage
      : heroImage
    : null;
  const hasCategories =
    categories && Array.isArray(categories) && categories.length > 0;

  const titleToUse = titleFromProps || title;
  const sanitizedExcerpt = excerpt?.replace(/\s/g, " "); // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`;

  return (
    <article
      className={cn("overflow-hidden bg-card rounded-lg block", className)}
      ref={card.ref}
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-stretch h-full">
        {/* Left Image */}
        <div className="relative  min-h-[300px] lg:h-full w-full rounded-xl overflow-hidden">
          <MediaComponent
            resource={heroImageToUse}
            size="50vw"
            fill={true}
            htmlElement={null}
            imgClassName="object-cover w-full h-full"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-4 p-6 flex flex-col justify-center">
          {showCategories && hasCategories && (
            <CategoryBadge categories={categories} />
          )}

          {titleToUse && (
            <BlogTitle
              title={titleToUse}
              slug={slug || ""}
              href={href}
              size="lg"
              linkRef={link.ref}
            />
          )}

          {sanitizedExcerpt && (
            <BlogDescription
              description={sanitizedExcerpt}
              size="md"
              maxLines={4}
            />
          )}

          <BlogMeta
            authors={authors}
            populatedAuthors={populatedAuthors}
            publishedAt={<RelativeTime publishedAt={publishedAt || ""} />}
            size="md"
          />

          <ReadMoreButton href={href} alt={titleToUse} />
        </div>
      </div>
    </article>
  );
};
