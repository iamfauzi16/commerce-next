/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/products',
        destination: '/products/products',
      },
    ]
  },
  images: {
    domains: ["api.lorem.space"],
  },
}

module.exports = nextConfig
