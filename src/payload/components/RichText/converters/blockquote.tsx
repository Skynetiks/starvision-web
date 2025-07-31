import { JSXConverters } from "@payloadcms/richtext-lexical/react";
import { SerializedQuoteNode } from "@payloadcms/richtext-lexical";
import React from "react";

export const blockquoteConverter: JSXConverters<SerializedQuoteNode> = {
  quote: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children });

    return (
      <blockquote className="border-l-4 border-primary/40 pl-6 py-4 my-6 bg-primary/5 rounded-r-lg">
        <div className="text-gray-700 italic text-lg leading-relaxed">
          {text}
        </div>
      </blockquote>
    );
  },
};
