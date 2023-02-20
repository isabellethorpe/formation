// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig



/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CMS_URL: process.env.CMS_URL || 'http://localhost:1337',
  },
  // images: {
  //   domains: ['localhost', 'cms.growing-good.co.uk'],
  // },
}

module.exports = nextConfig