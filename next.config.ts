import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  basePath: '/<kyto_website>',
  assetPrefix: '/<kyto_website>',
};

export default nextConfig;
