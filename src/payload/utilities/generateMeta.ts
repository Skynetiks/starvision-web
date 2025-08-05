import type { Metadata } from "next";

import type { Media, Blog, Config } from "../payload-types";

import { mergeOpenGraph } from "./mergeOpenGraph";
import { getServerSideURL } from "./getURL";

const getImageMetadata = (
  image?: Media | Config["db"]["defaultIDType"] | null
) => {
  const serverUrl = getServerSideURL();

  if (!image || typeof image !== "object" || !("url" in image)) {
    return {
      url: serverUrl + "/website-template-OG.webp",
      width: 1200,
      height: 630,
      alt: "CSG Advisory - Global Business Registration & Compliance Experts",
    };
  }

  const ogUrl = image.sizes?.og?.url;
  const url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url;

  return {
    url,
    width: image.sizes?.og?.width || image.width || 1200,
    height: image.sizes?.og?.height || image.height || 630,
    alt:
      image.altDescription ||
      "CSG Advisory - Global Business Registration & Compliance Experts",
  };
};

export const generateMeta = async (args: {
  doc: Partial<Blog> | null;
}): Promise<Metadata> => {
  const { doc } = args;

  const imageMetadata = getImageMetadata(doc?.meta?.image);
  const title = doc?.meta?.title
    ? doc?.meta?.title + " | CSG Advisory"
    : "CSG Advisory";

  const description =
    doc?.meta?.description ||
    "CSG Advisory helps businesses expand globally with expert company registration, tax compliance, director services, bank account opening, and HR/payroll solutions across 50+ countries.";

  const url = Array.isArray(doc?.slug) ? doc?.slug.join("/") : doc?.slug || "/";
  const fullUrl = getServerSideURL() + "/insights/" + url;

  // Get author information
  const authors = doc?.populatedAuthors || [];
  const authorNames = authors.map((author) => author.name).filter(Boolean);

  // Get published date
  const publishedAt = doc?.publishedAt ? new Date(doc.publishedAt) : undefined;
  const updatedAt = doc?.updatedAt ? new Date(doc.updatedAt) : publishedAt;

  // Get category information
  const categories = doc?.categories || [];
  const categoryTitles = categories
    .map((cat) =>
      typeof cat === "object" && "title" in cat ? cat.title : null
    )
    .filter(Boolean) as string[];
  const firstCategory = categoryTitles[0] || "Business";

  const metadata: Metadata = {
    title,
    description,
    metadataBase: new URL(getServerSideURL()),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: mergeOpenGraph({
      title,
      description,
      url: fullUrl,
      type: "article",
      locale: "en_US",
      siteName: "CSG Advisory",
      images: [imageMetadata],
      publishedTime: publishedAt?.toISOString(),
      modifiedTime: updatedAt?.toISOString(),
      authors: authorNames.length > 0 ? authorNames[0] : undefined,
      section: firstCategory,
      tags: categoryTitles,
    }),
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageMetadata],
      creator: "@csgadvisory",
      site: "@csgadvisory",
    },
    other: {
      // Additional meta tags for better SEO
      ...(publishedAt && {
        "article:published_time": publishedAt.toISOString(),
      }),
      ...(updatedAt && { "article:modified_time": updatedAt.toISOString() }),
      ...(authorNames.length > 0 && {
        "article:author": authorNames.join(", "),
      }),
      "article:section": firstCategory,
      ...(categoryTitles.length > 0 && {
        "article:tag": categoryTitles.join(", "),
      }),
      ...(imageMetadata.width && {
        "og:image:width": imageMetadata.width.toString(),
      }),
      ...(imageMetadata.height && {
        "og:image:height": imageMetadata.height.toString(),
      }),
      "og:image:alt": imageMetadata.alt,
    },
  };

  return metadata;
};
