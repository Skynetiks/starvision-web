import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { nestedDocsPlugin } from "@payloadcms/plugin-nested-docs";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { searchPlugin } from "@payloadcms/plugin-search";
import { Plugin } from "payload";
import { searchFields } from "@/payload/search/fieldOverrides";
import { beforeSyncWithSearch } from "@/payload/search/beforeSync";

import { getServerSideURL } from "@/payload/utilities/getURL";

export const plugins: Plugin[] = [
  nestedDocsPlugin({
    collections: ["categories"],
    generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ""),
  }),
  seoPlugin({
    collections: ["blogs"],
    uploadsCollection: "media",
    generateTitle: ({ doc }) => `${doc.title}`,
    generateDescription: ({ doc }) => doc.excerpt,
    generateURL: ({ doc }) => `${getServerSideURL()}/blogs/${doc.slug}`,
    generateImage: ({ doc }) => doc.heroImage?.url,
  }),

  searchPlugin({
    collections: ["blogs"],
    beforeSync: beforeSyncWithSearch,
    searchOverrides: {
      fields: ({ defaultFields }) => {
        return [...defaultFields, ...searchFields];
      },
    },
  }),
  //   payloadCloudPlugin(),
];
