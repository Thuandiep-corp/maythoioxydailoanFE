import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', // Cho phép ảnh từ placehold.co
      },
      {
        protocol: 'https',
        hostname: 'maythoioxydailoan.com', // Cho phép ảnh từ trang web cũ của bạn (nếu có dùng)
      },
      {
        protocol: 'http',
        hostname: 'googleusercontent.com', // Cho phép ảnh user avatar (nếu có dùng từ V0)
      }
    ],
  },
};

export default nextConfig;
