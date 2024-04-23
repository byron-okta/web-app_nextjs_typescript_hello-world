/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  env: {
    AUTH0_BASE_URL: process.env.VERCEL_URL || process.env.AUTH0_BASE_URL,
  },

};

module.exports = nextConfig;
