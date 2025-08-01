import { JSXConverters } from "@payloadcms/richtext-lexical/react";
import { SerializedHeadingNode } from "@payloadcms/richtext-lexical";
import React from "react";

export const headingConverter: JSXConverters<SerializedHeadingNode> = {
  heading: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children });
    const textContent = text.join("");

    // Generate ID for all headings
    const id = textContent
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    const headingStyles = {
      h1: "text-3xl font-bold text-gray-900 mt-8 mb-4",
      h2: "text-2xl font-bold text-gray-900 mt-6 mb-3",
      h3: "text-xl font-semibold text-gray-900 mt-4 mb-2",
      h4: "text-lg font-semibold text-gray-900 mt-3 mb-2",
    };

    const className =
      headingStyles[node.tag as keyof typeof headingStyles] || "";

    return React.createElement(node.tag, { className, id }, text);
  },
};
