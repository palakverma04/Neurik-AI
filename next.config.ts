import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/synd-physics-aware-robot-training-dataset",
        destination: "/blog/forge-physics-aware-robot-training-dataset",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
