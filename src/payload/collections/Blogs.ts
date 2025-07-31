import type { CollectionConfig } from "payload";

import {
  BlockquoteFeature,
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineCodeFeature,
  InlineToolbarFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  UnorderedListFeature,
} from "@payloadcms/richtext-lexical";

import { authenticated } from "../access/authenticated";
import { authenticatedOrPublished } from "../access/authenticatedOrPublished";
import { Banner } from "../blocks/Banner/config";
import { MediaBlock } from "../blocks/MediaBlock/config";
import { generatePreviewPath } from "../utilities/generatePreviewPath";
import { populateAuthors } from "./hooks/populateAuthors";
import { revalidateDelete, revalidatePost } from "./hooks/revalidatePost";

import { slugField } from "@/payload/fields/slug";
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";
import { CallToAction } from "../blocks/CallToAction/config";
import { TableOfContents } from "../blocks/tableOfContent/config";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a post is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'blogs'>
  defaultPopulate: {
    title: true,
    slug: true,
    categories: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: [
      "title",
      "slug",
      "categories",
      "featured",
      "publishedAt",
      "updatedAt",
      "authors",
    ],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === "string" ? data.slug : "",
          collection: "blogs",
          req,
        });

        return path;
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === "string" ? data.slug : "",
        collection: "blogs",
        req,
      }),
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      type: "tabs",
      tabs: [
        {
          fields: [
            {
              name: "heroImage",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "excerpt",
              type: "text",
              admin: {
                description: "This will be displayed on the blog page",
              },
            },
            {
              name: "content",
              type: "richText",
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({
                      enabledHeadingSizes: ["h1", "h2", "h3", "h4"],
                    }),
                    BlocksFeature({
                      blocks: [
                        Banner,
                        CallToAction,
                        MediaBlock,
                        TableOfContents,
                      ],
                    }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                    BlockquoteFeature(),
                    OrderedListFeature(),
                    UnorderedListFeature(),
                    InlineCodeFeature(),
                    LinkFeature({
                      fields: ({ defaultFields }) => [
                        ...defaultFields,
                        {
                          name: "rel",
                          type: "select",
                          options: ["noopener", "noreferrer", "nofollow"],
                        },
                      ],
                      enabledCollections: ["blogs"],
                      maxDepth: 2,
                      disableAutoLinks: undefined,
                    }),
                  ];
                },
              }),
              label: false,
              required: true,
            },
          ],
          label: "Content",
        },
        {
          fields: [
            // {
            //   name: "relatedPosts",
            //   type: "relationship",
            //   admin: {
            //     position: "sidebar",
            //   },
            //   filterOptions: ({ id }) => {
            //     return {
            //       id: {
            //         not_in: [id],
            //       },
            //     };
            //   },
            //   hasMany: true,
            //   relationTo: "blogs",
            // },
            {
              name: "categories",
              type: "relationship",
              admin: {
                position: "sidebar",
              },
              hasMany: true,
              relationTo: "categories",
            },
          ],
          label: "Meta",
        },
        {
          name: "meta",
          label: "SEO",
          fields: [
            OverviewField({
              titlePath: "meta.title",
              descriptionPath: "meta.description",
              imagePath: "meta.image",
            }),

            MetaImageField({
              relationTo: "media",
              hasGenerateFn: true,
            }),
            MetaDescriptionField({
              hasGenerateFn: true,
            }),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            {
              name: "canonical",
              type: "text",
              admin: {
                description:
                  "Include an alternative URL. Overwrites the default URL.",
              },
              hooks: {
                beforeChange: [
                  async ({ data }) => {
                    if (data) {
                      return `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${data.slug}`;
                    }
                  },
                ],
              },
            },
            {
              name: "siteName",
              type: "text",
              defaultValue: "",
            },
          ],
        },
      ],
    },
    {
      admin: {
        description:
          "This will be displayed on the blog page as a featured blog",
        position: "sidebar",
      },
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      label: "Set this blog as featured",
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
        position: "sidebar",
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === "published" && !value) {
              return new Date();
            }
            return value;
          },
        ],
      },
    },
    {
      name: "authors",
      type: "relationship",
      admin: {
        position: "sidebar",
      },
      hasMany: true,
      relationTo: "users",
    },
    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `user` collection has access control locked to protect user privacy
    // GraphQL will also not return mutated user data that differs from the underlying schema
    {
      name: "populatedAuthors",
      type: "array",
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
      },
      fields: [
        {
          name: "id",
          type: "text",
        },
        {
          name: "name",
          type: "text",
        },
        {
          name: "avatar",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePost],
    afterRead: [populateAuthors],
    afterDelete: [revalidateDelete],
  },
  versions: {
    maxPerDoc: 10,
    drafts: {
      autosave: false,
      schedulePublish: true,
    },
  },
};
