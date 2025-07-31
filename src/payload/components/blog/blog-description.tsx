import React from "react";
import { cn } from "@/payload/utilities/ui";

interface BlogDescriptionProps {
  description: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  maxLines?: number;
}

export const BlogDescription: React.FC<BlogDescriptionProps> = ({
  description,
  size = "md",
  className,
  maxLines = 3,
}) => {
  const sizeClasses = {
    sm: "text-sm leading-relaxed",
    md: "text-base leading-relaxed",
    lg: "text-lg leading-relaxed",
  };

  const lineClampClass = maxLines > 0 ? `line-clamp-${maxLines}` : "";

  return (
    <p
      className={cn(
        "text-gray-500",
        sizeClasses[size],
        lineClampClass,
        className
      )}
    >
      {description}
    </p>
  );
};
