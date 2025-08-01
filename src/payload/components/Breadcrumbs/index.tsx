"use client";

/**
 * Breadcrumbs Component
 *
 * A flexible breadcrumb navigation component with multiple variants:
 *
 * 1. Basic Breadcrumbs: Use <Breadcrumbs items={...} />
 * 2. Blog Breadcrumbs: Use <BlogBreadcrumbs title="..." category="..." />
 * 3. Blog Listing Breadcrumbs: Use <BlogListingBreadcrumbs currentPage={...} />
 *
 * Features:
 * - Accessible navigation with proper ARIA labels
 * - Home icon for first item
 * - Hover effects and transitions
 * - Customizable separators
 * - Responsive design
 */

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/payload/utilities/ui";
import GradientText from "@/components/ui/gradient-text";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  showHomeIcon?: boolean;
  separator?: React.ReactNode;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className,
  showHomeIcon = true,
  separator = <ChevronRight className="h-4 w-4 text-gray-400" />,
}) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav
      className={cn(
        "flex items-center space-x-2 text-sm text-gray-900 transition-all duration-200",
        className
      )}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;

          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2" aria-hidden="true">
                  {separator}
                </span>
              )}

              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center hover:text-gray-900 transition-colors duration-200 hover:underline",
                    isFirst && showHomeIcon && "flex items-center space-x-1"
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {isFirst && showHomeIcon && <Home className="h-4 w-4" />}
                  <span className={cn(isFirst && showHomeIcon && "sr-only")}>
                    {item.label}
                  </span>
                  {!isFirst && <span>{item.label}</span>}
                </Link>
              ) : (
                <GradientText
                  className={cn(
                    "flex items-center",
                    isFirst && showHomeIcon && "flex items-center space-x-1"
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {isFirst && showHomeIcon && <Home className="h-4 w-4" />}

                  {!isFirst && <span>{item.label}</span>}
                </GradientText>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

// Specialized blog breadcrumbs component
interface BlogBreadcrumbsProps {
  title: string;
  category?: string;
  className?: string;
}

export const BlogBreadcrumbs: React.FC<BlogBreadcrumbsProps> = ({
  title,
  category,
  className,
}) => {
  const items: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blogs" },
    ...(category
      ? [{ label: category, href: `/blogs?category=${category}` }]
      : []),
    { label: title, isCurrent: true },
  ];

  return (
    <Breadcrumbs
      items={items}
      className={cn("mb-4", className)}
      showHomeIcon={true}
    />
  );
};

// Specialized blog listing breadcrumbs component
interface BlogListingBreadcrumbsProps {
  currentPage?: number;
  className?: string;
}

export const BlogListingBreadcrumbs: React.FC<BlogListingBreadcrumbsProps> = ({
  currentPage,
  className,
}) => {
  const items: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    {
      label:
        currentPage && currentPage > 1 ? `Blog - Page ${currentPage}` : "Blog",
      isCurrent: true,
    },
  ];

  return (
    <Breadcrumbs
      items={items}
      className={cn("mb-4", className)}
      showHomeIcon={true}
    />
  );
};
