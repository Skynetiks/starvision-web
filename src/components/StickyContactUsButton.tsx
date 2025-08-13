"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { MessageSquareText } from "lucide-react";
import { usePathname } from "next/navigation";

const StickyContactUsButton = () => {
  const pathName = usePathname();
  if (pathName.startsWith("/contact")) return null;
  return (
    <Button
      size="lg"
      className="rounded-full sticky bottom-10 left-[100%] mr-2 z-100"
    >
      <Link href="/contact">
        <span className="hidden md:inline">Contact Now</span>
        <span>
          <MessageSquareText className="inline ml-1" />
        </span>
      </Link>
    </Button>
  );
};

export default StickyContactUsButton;
