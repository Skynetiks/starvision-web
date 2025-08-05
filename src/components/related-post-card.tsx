import React from "react";
import { Card } from "@/payload/components/Card";
import type { Blog } from "@/payload/payload-types";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import { SelectSeparator } from "@/components/ui/select";

interface RelatedPostCardProps {
  currentPost: Blog;
  className?: string;
}

async function getRelatedPosts(currentPost: Blog): Promise<Blog[]> {
  const payload = await getPayload({ config: configPromise });
  let posts: Blog[] = [];

  if (currentPost.categories && currentPost.categories.length > 0) {
    const categoryIds = currentPost.categories
      .filter((cat) => typeof cat === "object" && cat.id)
      .map((cat) => (cat as any).id);

    if (categoryIds.length > 0) {
      const categoryResult = await payload.find({
        collection: "blogs",
        draft: false,
        overrideAccess: false,
        where: {
          categories: {
            in: categoryIds,
          },
          id: {
            not_equals: currentPost.id, // Exclude current post
          },
        },
        limit: 3 - posts.length, // Only get what we need
        depth: 2,
      });
      posts = [...posts, ...(categoryResult.docs as Blog[])];
    }
  }

  // If we still don't have enough posts, get the latest posts
  if (posts.length < 3) {
    const latestResult = await payload.find({
      collection: "blogs",
      draft: false,
      overrideAccess: false,
      where: {
        id: {
          not_equals: currentPost.id, // Exclude current post
        },
      },
      limit: 3 - posts.length, // Only get what we need
      depth: 2,
      sort: "-publishedAt", // Sort by published date descending
    });
    posts = [...posts, ...(latestResult.docs as Blog[])];
  }

  // Remove duplicates and limit to 3 posts
  const uniquePosts = posts
    .filter(
      (post, index, self) => index === self.findIndex((p) => p.id === post.id)
    )
    .slice(0, 3);

  return uniquePosts;
}

export const RelatedPostCard: React.FC<RelatedPostCardProps> = async ({
  currentPost,
  className,
}) => {
  const relatedPosts = await getRelatedPosts(currentPost);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <>
      <div className="container py-20 mx-auto">
        <SelectSeparator />
      </div>
      <div className={`space-y-6 ${className}`}>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Related Articles
          </h2>
          <p className="text-gray-600">
            Explore more insights and expert advice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((post) => (
            <Card
              key={post.id}
              doc={post}
              relationTo="insights"
              showCategories={true}
            />
          ))}
        </div>
      </div>
    </>
  );
};
