import { JSXConverters } from "@payloadcms/richtext-lexical/react";
import React from "react";

// Text formatting converters for bold, italic, underline, etc.
export const textFormattingConverters: JSXConverters<any> = {
  // Bold text
  bold: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children });
    return <strong className="font-bold text-gray-900">{text}</strong>;
  },

  // Italic text
  italic: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children });
    return <em className="italic text-gray-700">{text}</em>;
  },

  // Underlined text
  underline: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children });
    return <u className="underline decoration-gray-400">{text}</u>;
  },

  // Strikethrough text
  strikethrough: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children });
    return <s className="line-through text-gray-500">{text}</s>;
  },

  // Subscript text
  subscript: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children });
    return <sub className="text-sm align-sub">{text}</sub>;
  },

  // Superscript text
  superscript: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children });
    return <sup className="text-sm align-super">{text}</sup>;
  },

  // Highlighted text
  highlight: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children });
    return <mark className="bg-yellow-200 px-1 rounded">{text}</mark>;
  },
};
