import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve modern image formats for faster loading.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
