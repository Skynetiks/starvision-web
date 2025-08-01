import {
  lexicalEditor,
  BlockquoteFeature,
  BlocksFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  FixedToolbarFeature,
  LinkFeature,
  UploadFeature,
  InlineCodeFeature,
  OrderedListFeature,
  UnorderedListFeature,
} from "@payloadcms/richtext-lexical";

export const contentField = {
  name: "content",
  type: "richText",
  editor: lexicalEditor({
    features: ({ rootFeatures }) => [
      ...rootFeatures,

      HeadingFeature({
        enabledHeadingSizes: ["h1", "h2", "h3", "h4"],
      }),

      BlockquoteFeature(),
      InlineCodeFeature(),
      OrderedListFeature(),
      UnorderedListFeature(),
      LinkFeature(),
      UploadFeature({ collections: { media: {} } }),

      HorizontalRuleFeature(),
      BlocksFeature({ blocks: [] }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  }),
  required: true,
};
