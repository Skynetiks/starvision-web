import Link from "next/link";

interface ErrorPageProps {
  title?: string;
  message?: string;
  primaryAction?: {
    href: string;
    label: string;
  };
  secondaryAction?: {
    href: string;
    label: string;
  };
  icon?: "warning" | "error" | "info";
}

export function ErrorPage({
  title = "Service Temporarily Unavailable",
  message = "We're experiencing technical difficulties. Please try again later.",
  primaryAction = {
    href: "/",
    label: "Return to Home",
  },
  secondaryAction,
  icon = "warning",
}: ErrorPageProps) {
  const getIcon = () => {
    switch (icon) {
      case "error":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        );
      case "info":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        );
      case "warning":
      default:
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        );
    }
  };

  const getIconColor = () => {
    switch (icon) {
      case "error":
        return "text-red-300";
      case "info":
        return "text-blue-300";
      case "warning":
      default:
        return "text-yellow-300";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <svg
            className={`mx-auto h-16 w-16 ${getIconColor()}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {getIcon()}
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 mb-6">{message}</p>
        <div className="flex justify-center space-x-4">
          <Link
            href={primaryAction.href}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-logo-primary to-logo-secondary hover:from-logo-primary/90 hover:to-logo-secondary/90 transition-all duration-200"
          >
            {primaryAction.label}
          </Link>
          {secondaryAction && (
            <Link
              href={secondaryAction.href}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200"
            >
              {secondaryAction.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
