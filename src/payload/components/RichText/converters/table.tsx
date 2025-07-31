import { JSXConverters } from "@payloadcms/richtext-lexical/react";
import React from "react";

export const tableConverters: JSXConverters<any> = {
  // Table container
  table: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children });
    return (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-300 rounded-lg">
          {text}
        </table>
      </div>
    );
  },

  // Table row
  tablerow: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children });
    return <tr className="border-b border-gray-300">{text}</tr>;
  },

  // Table header cell
  tablecell: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children });
    const isHeader = node.headerState === 1;

    if (isHeader) {
      return (
        <th className="px-4 py-3 bg-gray-50 font-semibold text-left text-gray-900 border-r border-gray-300">
          {text}
        </th>
      );
    }

    return (
      <td className="px-4 py-3 text-gray-700 border-r border-gray-300">
        {text}
      </td>
    );
  },
};
