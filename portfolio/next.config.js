/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const path = require('path')
module.exports = {
  // target: 'serverless',
  exportPathMap: () => ({
    "/": {
      page: "/",
    },
  }),
  images: {
    loader: 'imgix', 
    path: isProd ? 'https://sinsamutq.github.io/portfolio-internship':'http://localhost:5000'
  },
  // reactStrictMode: true,

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}