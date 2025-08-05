import Image from "next/image";

export function SiteLogo({
  width = 180,
  height = 100,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Image
      src="/logo/svg/logo.svg"
      alt="CSG Advisory Logo"
      width={width}
      height={height}
    />
  );
}
