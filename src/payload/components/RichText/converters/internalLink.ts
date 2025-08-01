import { SerializedLinkNode } from "@payloadcms/richtext-lexical";

export const internalDocToHref = ({
  linkNode,
}: {
  linkNode: SerializedLinkNode;
}) => {
  const { value, relationTo } = linkNode.fields.doc!;

  const slug =
    typeof value !== "string" && typeof value === "object" && "slug" in value
      ? value.slug
      : value;

  if (relationTo === "blogs") {
    return `/blogs/${slug}`;
  } else if (relationTo === "users") {
    return `/users/${slug}`;
  } else {
    return `/${slug}`;
  }
};
