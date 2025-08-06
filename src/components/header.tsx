"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import GradientText from "./ui/gradient-text";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  const navItems = [
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
      submenu: [
        {
          name: "Business Registration",
          link: "/services/business-registration",
        },
        {
          name: "Tax Compliance",
          link: "/services/tax-compliance",
        },
        {
          name: "Corporate Services",
          link: "/services/corporate-services",
        },
        {
          name: "Banking Support",
          link: "/services/banking-support",
        },
      ],
    },
    {
      name: "Countries",
      link: "/countries",
      submenu: [
        {
          name: "Americas",
          link: "/countries/americas",
        },
        {
          name: "Europe",
          link: "/countries/europe",
        },
        {
          name: "Asia Pacific",
          link: "/countries/asia-pacific",
        },
        {
          name: "Middle East",
          link: "/countries/middle-east",
        },
      ],
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Custom logo component
  const CustomLogo = () => (
    <Link href="/" className="flex items-center gap-2">
      <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
        CSG <GradientText>Advisory</GradientText>
      </span>
    </Link>
  );

  const handleScheduleConsultationClick = () => {
    router.push("/schedule-consultation");
  };

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <CustomLogo />
        <NavItems items={navItems} />
        <NavbarButton
          className="flex items-center"
          onClick={handleScheduleConsultationClick}
          variant="primary"
        >
          Get Free Consultation
          <ChevronRight className="text-white size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </NavbarButton>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <CustomLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {/* About Us */}
          <a
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative text-neutral-600 dark:text-neutral-300 py-2"
          >
            <span className="block">About Us</span>
          </a>

          {/* Services */}
          <div className="py-2">
            <span className="block text-neutral-900 dark:text-neutral-100 font-medium mb-2">
              Services
            </span>
            <div className="pl-4 space-y-2">
              <a
                href="/services/company-registration"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm text-neutral-600 dark:text-neutral-300"
              >
                Company Registration
              </a>
              <a
                href="/services/bank-account-opening"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm text-neutral-600 dark:text-neutral-300"
              >
                Bank Account Opening
              </a>
              <a
                href="/services/company-secretarial"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm text-neutral-600 dark:text-neutral-300"
              >
                Company Secretarial
              </a>
              <a
                href="/services/hr-and-payroll"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm text-neutral-600 dark:text-neutral-300"
              >
                HR & Payroll
              </a>
              <a
                href="/services/director-services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm text-neutral-600 dark:text-neutral-300"
              >
                Director Services
              </a>
              <a
                href="/services/accounting-and-tax"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm text-neutral-600 dark:text-neutral-300"
              >
                Accounting & Tax
              </a>
            </div>
          </div>

          {/* Countries */}
          <Link
            href="/countries"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative text-neutral-600 dark:text-neutral-300 py-2"
          >
            <span className="block">Countries</span>
          </Link>

          {/* Blog */}
          {/* <Link
            href="/blog"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative text-neutral-600 dark:text-neutral-300 py-2"
          >
            <span className="block">Blog</span>
          </Link> */}

          {/* Contact */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative text-neutral-600 dark:text-neutral-300 py-2"
          >
            <span className="block">Contact Us</span>
          </Link>

          {/* Mobile CTA Button */}
          <div className="flex w-full flex-col gap-4 pt-4">
            <NavbarButton
              onClick={() => {
                setIsMobileMenuOpen(false);
                router.push("/contact");
              }}
              variant="primary"
            >
              Get Started
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
