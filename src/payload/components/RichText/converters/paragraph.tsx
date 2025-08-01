import { JSXConverters } from "@payloadcms/richtext-lexical/react";
import { SerializedParagraphNode } from "@payloadcms/richtext-lexical";
import React from "react";

export const paragraphConverter: JSXConverters<SerializedParagraphNode> = {
  paragraph: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children });

    return <p className="text-gray-700 leading-relaxed mb-4">{text}</p>;
  },
};
