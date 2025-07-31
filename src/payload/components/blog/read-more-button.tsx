import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/payload/utilities/ui";
import { VariantProps } from "class-variance-authority";

interface ReadMoreButtonProps {
  href: string;
  children?: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: VariantProps<typeof buttonVariants>["size"];
  showIcon?: boolean;
  className?: string;
  alt?: string;
}

export const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({
  href,
  children = "Read More",
  variant = "default",
  size = "sm",
  showIcon = true,
  className,
  alt,
}) => {
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn("w-fit px-8", className)}
    >
      <Link href={href} aria-label={alt}>
        {children}
        {showIcon && <ArrowRight className="ml-2 h-4 w-4" />}
      </Link>
    </Button>
  );
};
