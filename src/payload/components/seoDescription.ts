"use client";
import { useField } from "@payloadcms/ui";
import { TextFieldClientComponent } from "payload";

export const SeoDescription: TextFieldClientComponent = ({ field, path }) => {
  const { value, setValue } = useField({ path });
  const maxLength = field.maxLength || 300;
  return `${
    typeof value === `string` ? maxLength - value.length : maxLength
  } characters left.`;
};
