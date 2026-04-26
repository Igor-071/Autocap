import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/investors/case',
        destination: '/investors/why',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
