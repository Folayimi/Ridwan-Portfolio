/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false,
  },
  webpack: async (config, { isServer }) => {
    if (!isServer) {
      const { resolve } = await import('path');
      config.resolve.alias['framer-motion'] = resolve('framer-motion');
    }
    return config;
  },
};

export default nextConfig;
