"use client";
import { cn } from "@/payload/utilities/ui";
import useClickableCard from "@/payload/utilities/useClickableCard";
import Link from "next/link";
import React, { Fragment } from "react";

import type { Blog, Media } from "@/payload/payload-types";

import { Media as MediaComponent } from "@/payload/components/Media";
import GradientText from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
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

export type FeaturedCardPostData = Blog;

export const FeaturedCard: React.FC<{
  alignItems?: "center";
  className?: string;
  doc?: FeaturedCardPostData;
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
        "overflow-hidden bg-card hover:cursor-pointer border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer block",
        className
      )}
      ref={card.ref}
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Left Image */}
        <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
          <MediaComponent resource={heroImageToUse} size="50vw" fill={false} />
        </div>

        {/* Right Content */}
        <div className="space-y-4 p-6">
          {showCategories && hasCategories && (
            <div className="inline-block rounded-full text-white px-3 py-1 text-sm font-medium animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary">
              Featured Post
            </div>
          )}

          {titleToUse && (
            <div className="prose">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                <Link className="not-prose" href={href} ref={link.ref}>
                  {titleToUse}
                </Link>
              </h2>
            </div>
          )}

          {sanitizedDescription && (
            <p className="text-gray-500 md:text-xl">{sanitizedDescription}</p>
          )}

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
                            className="rounded-full mr-2"
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
                <Calendar className="h-4 w-4 mr-1" />
                {publishedAtInHoursOrDate}
              </div>
            )}
          </div>

          <Button asChild>
            <Link href={href}>
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};
