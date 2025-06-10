/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode for development
  reactStrictMode: true,
  
  // Image optimization configuration
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp'],
  },
  
  // Transpile specific modules that might need it
  transpilePackages: ['three'],
  
  // Enable static exports if needed
  // output: 'export',
  
  // Improve build performance
  swcMinify: true,
  
  // Configure webpack if needed
  webpack: (config) => {
    // Optimize for Three.js and R3F
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    });
    
    return config;
  },
};

module.exports = nextConfig;
