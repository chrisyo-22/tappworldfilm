import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/users',
        permanent: true, // 308 redirect
      },
    ]
  },
};

export default nextConfig;
