/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['img.farcaster.xyz', 'lh3.googleusercontent.com']
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_NEYNAR_API_KEY: process.env.NEXT_PUBLIC_NEYNAR_API_KEY,
    NEYNAR_API_KEY: process.env.NEYNAR_API_KEY
  }
}

module.exports = nextConfig