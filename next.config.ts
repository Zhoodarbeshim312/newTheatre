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
    ],
  },
};

export default nextConfig;
