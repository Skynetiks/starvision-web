import React, { Fragment } from "react";
import { Badge } from "@/components/ui/badge";
import type { Blog } from "@/payload/payload-types";
import { cn } from "@/payload/utilities/ui";

interface CategoryBadgeProps {
  categories?: Blog["categories"];
  variant?: "default" | "gradient" | "outline";
  className?: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  categories,
  variant = "default",
  className,
}) => {
  const hasCategories =
    categories && Array.isArray(categories) && categories.length > 0;

  if (!hasCategories) return null;

  return (
    <Badge
      variant={variant}
      className={cn("max-w-max pointer-events-none", className)}
    >
      {categories.map((category, index) => {
        if (typeof category === "object") {
          const { title: titleFromCategory } = category;
          const categoryTitle = titleFromCategory || "Untitled category";
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
    </Badge>
  );
};
