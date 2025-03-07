// @ts-check
import type { NextConfig } from "next";

const config: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/crunchynumbers' : '',
  images: {
    unoptimized: true,
  },
};

export default config;
