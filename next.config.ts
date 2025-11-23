// @ts-check
import type { NextConfig } from "next";

const config: NextConfig = {
  // Removed 'output: export' to support API routes for Storybook Generator
  serverExternalPackages: ['unpdf', 'epub2'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com'
      }
    ]
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  }
};

export default config;
