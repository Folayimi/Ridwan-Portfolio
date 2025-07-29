/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // disables turbopack
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.alias["framer-motion"] = require.resolve("framer-motion");
    }
    return config;
  },
};

export default nextConfig;
