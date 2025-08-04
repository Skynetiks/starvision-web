import Image from "next/image";
import Link from "next/link";
import React from "react";

const CustomLogo = () => (
  <Link href="/admin" className="flex items-center  gap-2">
    <Image
      src="/images/logo.png"
      alt="Logo"
      width={300}
      height={40}
      className="h-auto"
    />
  </Link>
);

export default CustomLogo;
