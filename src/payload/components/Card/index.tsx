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

export type CardPostData = Blog;

export const Card: React.FC<{
  alignItems?: "center";
  className?: string;
  doc?: CardPostData;
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
      className={cn(
        " overflow-hidden bg-card hover:cursor-pointer border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer h-full w-full flex flex-col",
        className
      )}
      ref={card.ref}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <MediaComponent
          resource={heroImageToUse}
          size="33vw"
          fill={true}
          htmlElement={null}
          imgClassName="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        {showCategories && hasCategories && (
          <CategoryBadge categories={categories} className="mb-3" />
        )}

        {titleToUse && (
          <BlogTitle
            title={titleToUse}
            slug={slug || ""}
            href={href}
            size="sm"
            linkRef={link.ref}
            className="flex-1"
          />
        )}

        {sanitizedExcerpt && (
          <BlogDescription
            description={sanitizedExcerpt}
            size="sm"
            maxLines={3}
            className="mb-4"
          />
        )}

        <div className="mt-auto">
          <BlogMeta
            authors={authors}
            populatedAuthors={populatedAuthors}
            publishedAt={<RelativeTime publishedAt={publishedAt || ""} />}
            size="sm"
            className="mb-4"
          />

          <ReadMoreButton href={href} size="sm" className="w-full" />
        </div>
      </div>
    </article>
  );
};
