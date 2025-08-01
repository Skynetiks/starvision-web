import { CollectionConfig } from "payload";
import { authenticated } from "../access/authenticated";

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
    create: (req) => authenticated(req),
    update: (req) => authenticated(req),
    delete: (req) => authenticated(req),
  },
  upload: {
    staticDir: "media/blogs",
    formatOptions: {
      format: "webp",
    },
    mimeTypes: [
      "image/png",
      "image/jpg",
      "image/jpeg",
      "image/gif",
      "image/webp",
      "image/svg+xml",
    ],
    imageSizes: [
      {
        name: "og",
        width: 1200,
        height: 630,
        position: "centre",
        formatOptions: {
          format: "webp",
        },
      },
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        // By specifying `undefined` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: undefined,
        position: "centre",
      },
    ],
    adminThumbnail: ({ doc }) => `${process.env.R2_SERVER}/${doc.filename}`,
  },
  admin: {
    useAsTitle: "title",
    group: "Media",
    enableRichTextRelationship: true,
    defaultColumns: ["fileName", "altDescription", "thumbnailUrl", "title"],
  },

  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "altDescription",
      type: "text",
      maxLength: 150,
      admin: {
        components: {
          Description: {
            path: "@/payload/components/seoDescription.ts",
            exportName: "SeoDescription",
            clientProps: { length: 150 },
          },
        },
      },
    },
    {
      name: "credit",
      type: "group",
      fields: [
        {
          name: "creator",
          type: "text",
          admin: {
            description:
              "Leave a name for who or what created or captured this image.",
          },
        },
        {
          name: "creatorType",
          type: "select",
          options: [
            { value: "Person", label: "Person" },
            { value: "Organization", label: "Organization" },
          ],
          admin: {
            description:
              "Choose if the creator is an organization or a person.",
          },
        },
        {
          name: "creatorLink",
          type: "text",
          admin: {
            description: `Link to the creator's website`,
          },
        },
      ],
    },
  ],
};

export { Media };
