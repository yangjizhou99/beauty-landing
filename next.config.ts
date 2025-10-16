import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  // 只在生产环境使用静态导出
  ...(isProduction && { output: 'export' }),
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isProduction ? '/beauty-landing' : '',
  assetPrefix: isProduction ? '/beauty-landing/' : '',
  // 确保静态资源被正确处理
  distDir: 'out',
};

export default nextConfig;
