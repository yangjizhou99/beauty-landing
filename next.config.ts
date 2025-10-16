import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/beauty-landing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/beauty-landing/' : '',
  // 确保静态资源被正确处理
  distDir: 'out',
};

export default nextConfig;
