import GradientText from "@/components/ui/gradient-text";
import Link from "next/link";
import React from "react";

const CustomLogo = () => (
  <Link href="/admin" className="flex items-center gap-2">
    <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
      CSG <GradientText>Advisory</GradientText>
    </span>
  </Link>
);

export default CustomLogo;
