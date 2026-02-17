import { NeynarAPIClient } from '@neynar/nodejs-sdk'

export const neynarClient = new NeynarAPIClient({
  apiKey: process.env.NEXT_PUBLIC_NEYNAR_API_KEY || ''
})

export interface FarcasterUser {
  fid: number
  username: string
  displayName: string
  pfpUrl: string
}

export const signInWithFarcaster = async () => {
  // Coming soon: Farcaster auth flow
  console.log('Sign in with Farcaster')
}

export const shareToFarcaster = async (text: string, embedUrl?: string) => {
  // Coming soon: Share to Farcaster
  console.log('Share to Farcaster', text, embedUrl)
}