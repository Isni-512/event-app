/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize bundle splitting and minification
  experimental: {
    // Optimize CSS bundling (supported in Next.js 15)
    optimizeCss: true,
  },
 
  // Turbopack configuration (stable in Next.js 15)
  turbopack: {
    // Enable optimizations
  },
 
  // Production optimizations
  compress: true,
 
  // Disable source maps in production for smaller bundles
  productionBrowserSourceMaps: false,
 
  images: {
    unoptimized: true,
  },
 
//   output: "export",
};
 
export default nextConfig;