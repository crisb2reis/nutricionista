import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/nutricionista',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
