import { JSXConverters } from "@payloadcms/richtext-lexical/react";
import { SerializedCodeNode } from "@payloadcms/richtext-lexical";
import React from "react";

export const codeConverter: JSXConverters<SerializedCodeNode> = {
  code: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children });

    return (
      <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
        {text}
      </code>
    );
  },
};
