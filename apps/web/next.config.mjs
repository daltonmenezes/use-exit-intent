const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/use-exit-intent' : '',
  assetPrefix: isProd ? '/use-exit-intent/' : '',

  publicRuntimeConfig: {
    basePath: isProd ? '/use-exit-intent' : '',
    assetPrefix: isProd ? '/use-exit-intent/' : '',
  },

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
