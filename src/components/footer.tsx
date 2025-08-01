import Link from "next/link";
import { CurrentYear } from "./ui/current-year";

export default function Footer() {
  return (
    <footer className="flex justify-center bg-gray-50 border-t">
      <div className="container px-4 py-12 md:py-16 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">CSG Advisory</span>
            </Link>
            <p className="text-gray-500 mb-4 max-w-xs">
              Simplifying international business registration with expert
              guidance and comprehensive support.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-500 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/team"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Our Team
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="/careers"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Careers
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="/news"
                  className="text-gray-500 hover:text-gray-900"
                >
                  News
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/company-registration"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Company Registration
                </Link>
              </li>
              <li>
                <Link
                  href="/services/company-secretarial"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Company Secreterial
                </Link>
              </li>
              <li>
                <Link
                  href="/services/director-services"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Director Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/accounting-and-tax"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Accounting & Tax
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hr-and-payroll"
                  className="text-gray-500 hover:text-gray-900"
                >
                  HR & Payroll
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-gray-500">
          <p>
            &copy; <CurrentYear /> CSG Advisory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
