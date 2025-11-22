import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/writings-dev", // For project to know where it is
  assetPrefix: "/writings-dev/", // For images and routes?
  output: "export", // Enable static exports for GH Pages
  reactCompiler: true,
};

export default nextConfig;
