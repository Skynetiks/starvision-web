import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Clock } from "lucide-react";
import { Metadata } from "next";
import { blogPosts } from "@/lib/blogData";
import ScheduleConsultationButton from "@/components/custom-ui/schedule-consultation-button";
import GradientText from "@/components/ui/gradient-text";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((post) => post.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found | CSG Advisory Blog",
    };
  }

  const title = `${post.title} | CSG Advisory Blog`;
  const description =
    post.excerpt ||
    "Read our latest insights on business registration and compliance.";
  const imageUrl = post.image || "/images/team.webp";
  const fullUrl = `https://${process.env.BASE_URL || "csgadvisory.com"}/blog/${
    post.slug
  }`;

  return {
    title,
    description,
    metadataBase: new URL(
      `https://${process.env.BASE_URL || "csgadvisory.com"}`
    ),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: post.title,
      description,
      url: fullUrl,
      type: "article",
      locale: "en_US",
      siteName: "CSG Advisory",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date ? new Date(post.date).toISOString() : undefined,
      authors: [post.author],
      section: post.category,
      tags: [post.category],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      creator: "@csgadvisory",
      site: "@csgadvisory",
    },
    other: {
      ...(post.date && {
        "article:published_time": new Date(post.date).toISOString(),
      }),
      "article:author": post.author,
      "article:section": post.category,
      "article:tag": post.category,
      "og:image:width": "1200",
      "og:image:height": "630",
      "og:image:alt": post.title,
    },
  };
}

// Generate static params for static generation (optional)
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((post) => post.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (exclude current post and limit to 2)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  // If not enough posts in same category, fill with other posts
  if (relatedPosts.length < 2) {
    const additionalPosts = blogPosts
      .filter((p) => p.id !== post.id && !relatedPosts.includes(p))
      .slice(0, 2 - relatedPosts.length);
    relatedPosts.push(...additionalPosts);
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-64 md:h-96 overflow-hidden">
        <Image
          src={post.image || "/images/blogs/blog-1.webp"}
          fill
          alt={post.title}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 bg-opacity-40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <div className="max-w-4xl">
              <div className="inline-block rounded-lg px-3 py-1 text-sm text-white font-medium mb-4 animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary">
                {post.category}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white text-sm">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              {/* Article Body */}
              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-gray-900 prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                  prose-ul:text-gray-700 prose-ol:text-gray-700
                  prose-li:mb-2
                  prose-strong:text-gray-900
                  prose-table:text-sm
                  prose-th:bg-gray-50 prose-th:font-semibold
                  prose-td:border-gray-300 prose-th:border-gray-300
                  [&_.tip-box]:not-prose [&_.tip-box]:bg-blue-50 [&_.tip-box]:border-l-4 [&_.tip-box]:border-blue-400 [&_.tip-box]:p-4 [&_.tip-box]:my-6
                  [&_.tip-title]:font-semibold [&_.tip-title]:text-blue-800 [&_.tip-title]:mb-2
                  [&_.tip-box_p]:text-blue-700 [&_.tip-box_p]:mb-0"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />

              {/* Author Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {post.author}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Business Registration Expert at CSG Advisory
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 p-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg border border-rose-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Need Help with Business Registration?
                </h3>
                <p className="text-gray-700 mb-4">
                  Our experts can guide you through the entire process and
                  ensure compliance with all requirements.
                </p>
                <ScheduleConsultationButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer block"
                  >
                    <div className="inline-block rounded-lg text-white px-2 py-1 text-xs animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary font-medium mb-3">
                      {relatedPost.category}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {relatedPost.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {relatedPost.readTime}
                      </div>
                    </div>
                    <GradientText>Read More →</GradientText>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
