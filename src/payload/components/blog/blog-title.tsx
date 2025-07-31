import React from "react";
import Link from "next/link";
import { cn } from "@/payload/utilities/ui";

interface BlogTitleProps {
  title: string;
  slug: string;
  href: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  linkRef?: React.RefObject<HTMLAnchorElement | null>;
}

export const BlogTitle: React.FC<BlogTitleProps> = ({
  title,
  href,
  size = "md",
  className,
  linkRef,
}) => {
  const sizeClasses = {
    sm: "text-lg font-semibold leading-tight",
    md: "text-xl font-semibold leading-tight",
    lg: "text-2xl font-bold tracking-tighter sm:text-3xl leading-tight",
  };

  return (
    <div className={cn("prose", className)}>
      <h3 className={cn(sizeClasses[size], "mb-2")}>
        <Link
          className="not-prose text-gray-900 hover:text-logo-primary transition-colors"
          href={href}
          ref={linkRef}
        >
          {title}
        </Link>
      </h3>
    </div>
  );
};
