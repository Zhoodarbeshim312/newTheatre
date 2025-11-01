import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "abal.kg",
      },
      {
        protocol: "https",
        hostname: "sputnik.kg",
      },
      {
        protocol: "http",
        hostname: "56.228.23.49",
      },
    ],
  },
};

export default nextConfig;
