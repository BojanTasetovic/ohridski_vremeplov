import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  experimental: {
    swcPlugins: [],
  },
};

export default nextConfig;
