import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from "payload";

import { revalidatePath } from "next/cache";

import type { Blog } from "@/payload/payload-types";

export const revalidatePost: CollectionAfterChangeHook<Blog> = async ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === "published") {
      const relatedBlogs = await payload.find({
        collection: "blogs",
        where: {
          _status: { equals: "published" },
          categories: { in: doc.categories },
        },
      });
      const relatedBlogsSlugs = relatedBlogs.docs.map((blog) => blog.slug);
      const relatedBlogsPaths = relatedBlogsSlugs.map(
        (slug) => `/insights/${slug}`
      );
      const path = `/insights/${doc.slug}`;

      payload.logger.info(`Revalidating blog at path: ${path}`);
      revalidatePath("/insights");
      revalidatePath("/insights/page/[pageNumber]", "page");
      revalidatePath(path);
      relatedBlogsPaths.forEach((path) => {
        revalidatePath(path);
      });
    } else {
      const path = `/insights/${doc.slug}`;
      payload.logger.info(`Revalidating blog at path: ${path}`);
      revalidatePath("/insights");
      revalidatePath("/insights/page/[pageNumber]", "page");
    }
    return doc;
  }
};

export const revalidateDelete: CollectionAfterDeleteHook<Blog> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/insights/${doc?.slug}`;

    revalidatePath(path);
    revalidatePath("insights");
    revalidatePath("/insights/page/[pageNumber]", "page");
  }

  return doc;
};
