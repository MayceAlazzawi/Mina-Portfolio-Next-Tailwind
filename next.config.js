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
       {
        source: '/en/monthly',
        destination: '/en/monthly.html',
      },
    ]
  }
}

module.exports = nextConfig
