import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "http://localhost:3000/",
      },
    ], // Replace with your image domain
  },
};

export default nextConfig;
