"use client";

import { useState, useEffect } from "react";

interface RelativeTimeProps {
  publishedAt: string;
  className?: string;
}

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

export const RelativeTime: React.FC<RelativeTimeProps> = ({
  publishedAt,
  className,
}) => {
  const [formattedTime, setFormattedTime] = useState<string>("");

  useEffect(() => {
    if (publishedAt) {
      setFormattedTime(getPublishedAtInHoursOrDate(publishedAt));
    }
  }, [publishedAt]);

  return <span className={className}>{formattedTime}</span>;
};
