"use client";
import { cn } from "@/payload/utilities/ui";
import useClickableCard from "@/payload/utilities/useClickableCard";
import Link from "next/link";
import React, { Fragment } from "react";

import type { Blog, Media } from "@/payload/payload-types";

import { Media as MediaComponent } from "@/payload/components/Media";
import GradientText from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";
import Image from "next/image";
import { formatAuthors } from "@/payload/utilities/formatAuthors";
function getPublishedAtInHoursOrDate(publishedAt: string): string {
  const date = new Date(publishedAt);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffHours < 24) {
    return `${diffHours || 1} hour${diffHours === 1 ? "" : "s"} ago`;
  }

  if (diffDays < 7) {
    return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
  }

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }); // e.g., 30 Jul 2025
}

export type CardPostData = Blog;

export const Card: React.FC<{
  alignItems?: "center";
  className?: string;
  doc?: CardPostData;
  relationTo?: "blogs";
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
    meta,
    title,
    heroImage,
    authors,
    publishedAt,
    populatedAuthors,
  } = doc || {};
  const { description, image: metaImage } = meta || {};
  const heroImageToUse = heroImage
    ? typeof heroImage === "object"
      ? heroImage
      : heroImage
    : null;
  const hasCategories =
    categories && Array.isArray(categories) && categories.length > 0;
  const hasAuthors =
    populatedAuthors &&
    populatedAuthors.length > 0 &&
    formatAuthors(populatedAuthors) !== "";

  const authorsToUse = hasAuthors
    ? populatedAuthors.map((author) => {
        if (typeof author === "object") {
          return {
            name: author.name,
            id: author.id,
            avatar: author.avatar as Media | undefined,
          };
        }
        return null;
      })
    : [];

  const titleToUse = titleFromProps || title;
  const sanitizedDescription = description?.replace(/\s/g, " "); // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`;
  const publishedAtInHoursOrDate = getPublishedAtInHoursOrDate(
    publishedAt || ""
  );
  return (
    <article
      className={cn(
        " overflow-hidden bg-card hover:cursor-pointer border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer block",
        className
      )}
      ref={card.ref}
    >
      <div className=" ">
        {/* {!metaImage && <div className="">No image</div>} */}
        {/* {metaImage && typeof metaImage !== "string" && ( */}
        <MediaComponent resource={heroImageToUse} size="33vw" fill={false} />
        {/* )} */}
      </div>
      <div className="p-4">
        {showCategories && hasCategories && (
          <div className="inline-block rounded-lg text-white px-2 py-1 text-xs animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary font-medium mb-3">
            {showCategories && hasCategories && (
              <div>
                {categories?.map((category, index) => {
                  if (typeof category === "object") {
                    const { title: titleFromCategory } = category;

                    const categoryTitle =
                      titleFromCategory || "Untitled category";

                    const isLast = index === categories.length - 1;

                    return (
                      <Fragment key={index}>
                        {categoryTitle}
                        {!isLast && <Fragment>, &nbsp;</Fragment>}
                      </Fragment>
                    );
                  }

                  return null;
                })}
              </div>
            )}
          </div>
        )}
        {titleToUse && (
          <div className="prose">
            <h3>
              <Link className="not-prose" href={href} ref={link.ref}>
                {titleToUse}
              </Link>
            </h3>
          </div>
        )}
        {sanitizedDescription && (
          <p className="text-gray-500 mb-4 line-clamp-3">
            {sanitizedDescription}
          </p>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            {hasAuthors && (
              <div className="flex items-center">
                {authorsToUse.map((author) => {
                  if (author) {
                    return (
                      <div key={author.id} className="flex items-center">
                        {author.avatar && (
                          <Image
                            src={author.avatar.url || ""}
                            alt={author.name || ""}
                            width={20}
                            height={20}
                          />
                        )}
                        {!author.avatar && <User className="h-4 w-4 mr-1" />}
                        {author.name}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )}
            {publishedAtInHoursOrDate && (
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {publishedAtInHoursOrDate}
              </div>
            )}
          </div>
        </div>
        <Button asChild className="w-full mt-4">
          <Link href={`/blogs/${slug}`}>Read More</Link>
        </Button>
      </div>
    </article>
  );
};
