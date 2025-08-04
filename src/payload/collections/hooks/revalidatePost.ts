import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from "payload";

import { revalidatePath } from "next/cache";

import type { Blog } from "@/payload/payload-types";

export const revalidatePost: CollectionAfterChangeHook<Blog> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === "published") {
      const path = `/blogs/${doc.slug}`;

      payload.logger.info(`Revalidating blog at path: ${path}`);
      revalidatePath("/blogs");
      revalidatePath("/blogs/page/[pageNumber]", "page");

      revalidatePath(path);

      // If the post was previously published, we need to revalidate the old path
      if (previousDoc._status === "published" && doc._status !== "published") {
        const oldPath = `/blogs/${previousDoc.slug}`;

        payload.logger.info(`Revalidating old blog at path: ${oldPath}`);

        revalidatePath(oldPath);
        revalidatePath("/blogs/page/[pageNumber]", "page");
        revalidatePath("/blogs");
      }
    }
    return doc;
  }
};

export const revalidateDelete: CollectionAfterDeleteHook<Blog> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/blogs/${doc?.slug}`;

    revalidatePath(path);
    revalidatePath("blogs");
    revalidatePath("/blogs/page/[pageNumber]", "page");
  }

  return doc;
};
