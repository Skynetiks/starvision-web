import { cn } from "@/payload/utilities/ui";
import Link from "next/link";
import React from "react";

import type { Blog } from "@/payload/payload-types";
import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

type CMSLinkType = {
  appearance?: "inline" | VariantProps<typeof buttonVariants>["variant"];
  children?: React.ReactNode;
  className?: string;
  label?: string | null;
  newTab?: boolean | null;
  reference?: {
    relationTo: "blogs";
    value: Blog | string | number;
  } | null;
  size?: VariantProps<typeof buttonVariants>["size"] | null;
  type?: "custom" | "reference" | null;
  url?: string | null;
};

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    type,
    appearance = "inline",
    children,
    className,
    label,
    newTab,
    reference,
    size: sizeFromProps,
    url,
  } = props;

  const href =
    type === "reference" &&
    typeof reference?.value === "object" &&
    reference.value.slug
      ? `/${reference?.relationTo}/${reference.value.slug}`
      : url;

  if (!href) return null;

  const size = appearance === "link" ? "default" : sizeFromProps;
  const newTabProps = newTab
    ? { rel: "noopener noreferrer", target: "_blank" }
    : {};

  /* Ensure we don't break any styles set by richText */
  if (appearance === "inline") {
    return (
      <Link className={cn(className)} href={href || url || ""} {...newTabProps}>
        {label && label}
        {children && children}
      </Link>
    );
  }

  return (
    <Link
      className={cn(
        className,
        buttonVariants({ variant: appearance, size: size })
      )}
      href={href || url || ""}
      {...newTabProps}
    >
      {label && label}
      {children && children}
    </Link>
  );
};
