const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Temporarily ignore TypeScript errors during build
  },

  eslint: {
    ignoreDuringBuilds: true, // Temporarily ignore ESLint errors during build
  },

  webpack(config) {
    // Set up the alias for @ to point to the root of the project
    config.resolve.alias['@'] = path.join(__dirname, 'app');
    
    // Make sure to return the modified config
    return config;
  },
};

module.exports = nextConfig;
