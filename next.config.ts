import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "asp-delicate-doe.ngrok-free.app",
      },
    ],
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
