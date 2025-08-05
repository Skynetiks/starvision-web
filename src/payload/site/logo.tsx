import Image from "next/image";
import Link from "next/link";
import React from "react";

const CustomLogo = () => (
  <Link href="/admin" className="flex items-center  gap-2">
    <Image
      src="/logo/svg/logo.svg"
      alt="Logo"
      width={180}
      height={100}
      className="h-auto"
    />
  </Link>
);

export default CustomLogo;
