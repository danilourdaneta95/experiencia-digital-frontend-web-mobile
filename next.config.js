// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
  /* config options here */
  // publicRuntimeConfig: {
  //   BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH, // Environment variables (client-side or server-side)
  // },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH, // Config Base Path on Server Host
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  output: 'standalone',
  images: {
    dangerouslyAllowSVG: false,
  },
}

module.exports = nextConfig
