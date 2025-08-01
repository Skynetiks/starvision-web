import { DefaultTypedEditorState } from "@payloadcms/richtext-lexical";
import { RichText as RichTextComponent } from "@payloadcms/richtext-lexical/react";
import jsxConverters from "./converters";
import { cn } from "@/payload/utilities/ui";

type Props = {
  data: DefaultTypedEditorState;
  enableGutter?: boolean;
  enableProse?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function RichText(props: Props) {
  const { className, enableProse = true, enableGutter = true, ...rest } = props;
  return (
    <RichTextComponent
      converters={jsxConverters}
      className={cn(
        "payload-richtext",
        {
          container: enableGutter,
          "max-w-none": !enableGutter,
          "mx-auto prose md:prose-md dark:prose-invert": enableProse,
        },
        className
      )}
      {...rest}
    />
  );
}
