import { JSXConverters } from "@payloadcms/richtext-lexical/react";
import {
  SerializedListNode,
  SerializedListItemNode,
} from "@payloadcms/richtext-lexical";
import React from "react";

export const listConverters: JSXConverters<
  SerializedListNode | SerializedListItemNode
> = {
  list: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children });

    const listStyles = {
      ul: "list-disc list-inside text-gray-700 space-y-2 mb-4",
      ol: "list-decimal list-inside text-gray-700 space-y-2 mb-4",
    };

    const Tag = node.listType === "number" ? "ol" : "ul";
    const className = listStyles[Tag as keyof typeof listStyles];

    return React.createElement(Tag, { className }, text);
  },

  listitem: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children });

    return <li className="ml-4 text-gray-700 leading-relaxed">{text}</li>;
  },
};
