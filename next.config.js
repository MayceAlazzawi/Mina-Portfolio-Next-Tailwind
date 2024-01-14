/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
    return [
      {
        source: '/en/intro',
        destination: '/en/intro.html',
      },
      {
        source: '/en/hand',
        destination: '/en/hand.html',
      },
    ]
  }
}

module.exports = nextConfig
