import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Workout images come from the FitLog API (img.magnific.com)
    remotePatterns: [
      { protocol: "https", hostname: "img.magnific.com" },
      { protocol: "https", hostname: "**.magnific.com" },
    ],
  },
};

export default nextConfig;
