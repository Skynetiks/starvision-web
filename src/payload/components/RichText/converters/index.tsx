import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
} from "@payloadcms/richtext-lexical";
import {
  JSXConvertersFunction,
  LinkJSXConverter,
} from "@payloadcms/richtext-lexical/react";

import type {
  BannerBlock as BannerBlockProps,
  CallToActionBlock as CTABlockProps,
  MediaBlock as MediaBlockProps,
  TableOfContents as TableOfContentsProps,
} from "@/payload/payload-types";
import { BannerBlock } from "@/payload/blocks/Banner/Component";
import { CallToActionBlock } from "@/payload/blocks/CallToAction/Component";
import { MediaBlock } from "@/payload/blocks/MediaBlock/Component";
import { headingConverter } from "./heading";
import { blockquoteConverter } from "./blockquote";
import { listConverters } from "./lists";
import { horizontalRuleConverter } from "./horizontal-rule";
import { paragraphConverter } from "./paragraph";
import { textFormattingConverters } from "./text-formatting";
import { tableConverters } from "./table";
import { TableOfContents } from "@/payload/blocks/tableOfContent/component";

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<
      CTABlockProps | MediaBlockProps | BannerBlockProps | TableOfContentsProps
    >;

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!;
  if (typeof value !== "object") {
    throw new Error("Expected value to be an object");
  }
  const slug = value.slug;
  return relationTo === "blogs" ? `/posts/${slug}` : `/${slug}`;
};

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  ...headingConverter,
  ...blockquoteConverter,
  ...listConverters,
  ...horizontalRuleConverter,
  ...paragraphConverter,
  ...textFormattingConverters,
  ...tableConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  blocks: {
    banner: ({ node }) => (
      <BannerBlock className="col-start-2 mb-4" {...node.fields} />
    ),
    mediaBlock: ({ node }) => (
      <MediaBlock
        className="col-start-1 col-span-3"
        imgClassName="m-0"
        {...node.fields}
        enableGutter={false}
        disableInnerContainer={true}
      />
    ),

    cta: ({ node }) => <CallToActionBlock {...node.fields} />,
    tableOfContents: ({ node }) => <TableOfContents {...node.fields} />,
  },
});

export default jsxConverters;
