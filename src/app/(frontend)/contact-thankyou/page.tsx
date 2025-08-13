import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactThankyouPage() {
  return (
    <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Thanks for reaching out
            </h1>
            <p className="max-w-[700px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Your query has been recorded and will be resolved soon.
            </p>
            <div className="flex gap-2 justify-center mt-4">
              <Button asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/">Go back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
