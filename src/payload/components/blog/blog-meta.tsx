import React from "react";
import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";
import { cn } from "@/payload/utilities/ui";
import type { Blog, Media } from "@/payload/payload-types";
import { formatAuthors } from "@/payload/utilities/formatAuthors";

interface BlogMetaProps {
  authors?: Blog["authors"];
  populatedAuthors?: Blog["populatedAuthors"];
  publishedAt?: string | React.ReactNode;
  size?: "sm" | "md";
  className?: string;
  showLabels?: boolean;
}

export const BlogMeta: React.FC<BlogMetaProps> = ({
  populatedAuthors,
  publishedAt,
  size = "md",
  className,
  showLabels = false,
}) => {
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

  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
  };

  const iconSize = size === "sm" ? "h-3 w-3" : "h-4 w-4";

  return (
    <div className={cn("flex flex-col md:flex-row gap-4 md:gap-16", className)}>
      {hasAuthors && (
        <div className="flex flex-col gap-1">
          {showLabels && <p className={sizeClasses[size]}>Author</p>}
          <div className="flex items-center">
            {authorsToUse.map((author) => {
              if (author) {
                return (
                  <div key={author.id} className="flex items-center">
                    {author.avatar && (
                      <Image
                        src={author.avatar.url || "/images/team.webp"}
                        alt={author.name || ""}
                        width={size === "sm" ? 16 : 20}
                        height={size === "sm" ? 16 : 20}
                        className="rounded-full mr-2"
                      />
                    )}
                    {!author.avatar && (
                      <User className={cn(iconSize, "mr-1")} />
                    )}
                    <span className={sizeClasses[size]}>{author.name}</span>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
      {publishedAt && (
        <div className="flex flex-col gap-1">
          {showLabels && <p className={sizeClasses[size]}>Date Published</p>}
          <div className="flex items-center">
            {size === "sm" ? (
              <Clock className={cn(iconSize, "mr-1")} />
            ) : (
              <Calendar className={cn(iconSize, "mr-1")} />
            )}
            {typeof publishedAt === "string" ? (
              <time dateTime={publishedAt} className={sizeClasses[size]}>
                {publishedAt}
              </time>
            ) : (
              <span className={sizeClasses[size]}>{publishedAt}</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
