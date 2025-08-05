import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function CustomError({
  title,
  message,
}: {
  title?: string;
  message?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100svh)] text-center">
      <div className="max-w-md mx-auto">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-logo-primary to-logo-secondary flex items-center justify-center mx-auto">
            <AlertTriangle className="h-10 w-10 text-white" />
          </div>
        </div>

        {/* Title and Description */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {title || "Something went wrong"}
        </h1>
        <p className="text-gray-600 mb-8">
          {message ||
            "We're experiencing technical difficulties. Please try again later."}
        </p>

        {/* Home Button */}
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-logo-primary to-logo-secondary hover:from-logo-primary/90 hover:to-logo-secondary/90 transition-all duration-200"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
