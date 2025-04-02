import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
  eslint: {
    // 警告：这将允许生产构建在项目有 ESLint 错误的情况下也能成功完成
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
