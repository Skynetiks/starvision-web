import { JSXConverters } from "@payloadcms/richtext-lexical/react";
import { SerializedHorizontalRuleNode } from "@payloadcms/richtext-lexical";
import React from "react";

export const horizontalRuleConverter: JSXConverters<SerializedHorizontalRuleNode> =
  {
    horizontalrule: () => {
      return <hr className="border-t border-gray-300 my-8" />;
    },
  };
