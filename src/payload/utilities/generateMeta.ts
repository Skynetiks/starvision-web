import type { Metadata } from "next";

import type { Media, Blog, Config } from "../payload-types";

import { mergeOpenGraph } from "./mergeOpenGraph";
import { getServerSideURL } from "./getURL";

const getImageURL = (image?: Media | Config["db"]["defaultIDType"] | null) => {
  const serverUrl = getServerSideURL();

  let url = serverUrl + "/website-template-OG.webp";

  if (image && typeof image === "object" && "url" in image) {
    const ogUrl = image.sizes?.og?.url;

    url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url;
  }

  return url;
};

export const generateMeta = async (args: {
  doc: Partial<Blog> | null;
}): Promise<Metadata> => {
  const { doc } = args;

  const ogImage = getImageURL(doc?.meta?.image);

  const title = doc?.meta?.title
    ? doc?.meta?.title + " | CSG Advisory"
    : "CSG Advisory";

  const metadata = {
    description: doc?.meta?.description,
    metadataBase: new URL(getServerSideURL()),
    alternates: {
      canonical: getServerSideURL() + "/blogs/" + doc?.slug,
    },
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description || "",

      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: Array.isArray(doc?.slug) ? doc?.slug.join("/") : doc?.slug || "/",
    }),
    title,
  };
  return metadata;
};
