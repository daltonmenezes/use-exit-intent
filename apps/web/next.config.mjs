/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    transpilePackages: ['use-exit-intent'],
  },

  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/getting-started/overview',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
