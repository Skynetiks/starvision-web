import type { Metadata } from "next";
import { getServerSideURL } from "./getURL";

const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  siteName: "CSG Advisory",
  title: "CSG Advisory",
  description:
    "We simplify international business registration with expert consultation and comprehensive support for entrepreneurs and established companies.",
  locale: "en_US",
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
      width: 1200,
      height: 630,
      alt: "CSG Advisory - Global Business Registration & Compliance Experts",
    },
  ],
};

export const mergeOpenGraph = (
  og?: Metadata["openGraph"]
): Metadata["openGraph"] => {
  if (!og) {
    return defaultOpenGraph;
  }

  return {
    ...defaultOpenGraph,
    ...og,
    // Ensure images are properly merged
    images: og.images ? og.images : defaultOpenGraph.images,
  };
};
