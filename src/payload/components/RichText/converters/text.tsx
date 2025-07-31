import { JSXConverters } from "@payloadcms/richtext-lexical/react";
import { SerializedTextNode } from "@payloadcms/richtext-lexical";
import React from "react";

export const textConverter: JSXConverters<SerializedTextNode> = {
  text: ({ node }) => {
    // Handle text formatting attributes
    const format = node.format || 0;
    const isBold = (format & 1) !== 0;
    const isItalic = (format & 2) !== 0;
    const isUnderline = (format & 4) !== 0;
    const isStrikethrough = (format & 8) !== 0;
    const isSubscript = (format & 16) !== 0;
    const isSuperscript = (format & 32) !== 0;
    const isCode = (format & 64) !== 0;

    let content = node.text;

    // Apply formatting based on format flags
    if (isCode) {
      content = (
        <code className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono">
          {content}
        </code>
      );
    }

    if (isSuperscript) {
      content = <sup className="text-sm align-super">{content}</sup>;
    }

    if (isSubscript) {
      content = <sub className="text-sm align-sub">{content}</sub>;
    }

    if (isStrikethrough) {
      content = <s className="line-through text-gray-500">{content}</s>;
    }

    if (isUnderline) {
      content = <u className="underline decoration-gray-400">{content}</u>;
    }

    if (isItalic) {
      content = <em className="italic text-gray-700">{content}</em>;
    }

    if (isBold) {
      content = <strong className="font-bold text-gray-900">{content}</strong>;
    }

    return content;
  },
};
