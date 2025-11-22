import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/writings.dev", // Make pictures work again
  output: "export", // Enable static exports
  reactCompiler: true,
};

export default nextConfig;
