import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blogData";

export const metadata = {
  title: "Blog | CSG Advisory",
  description:
    "Stay updated with the latest insights on international business registration, global compliance, and business expansion strategies.",
};

export default function BlogPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                CSG Advisory Blog
              </h1>
              <p className="max-w-[700px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest insights on international business
                registration, global compliance, and expansion strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full flex justify-center py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center justify-items-center max-w-6xl mx-auto">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
              <Image
                src={blogPosts[0].image || "/placeholder.svg"}
                width={600}
                height={400}
                alt={blogPosts[0].title}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-full text-white px-3 py-1 text-sm font-medium animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary">
                Featured Post
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-500 md:text-xl">{blogPosts[0].excerpt}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {blogPosts[0].author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {blogPosts[0].date}
                </div>
              </div>
              <Button asChild>
                <Link href={`/blog/${blogPosts[0].slug}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full flex justify-center py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Latest Articles
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our latest insights and expert advice on international
                business registration.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-6xl mx-auto">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    width={400}
                    height={300}
                    alt={post.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-primary font-medium mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-4">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
