/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
    return [
      {
        source: '/en/intro',
        destination: '/en/intro.html',
      },
    ]
  }
}

module.exports = nextConfig
