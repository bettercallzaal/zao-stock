export interface Event {
  id: string
  name: string
  date: string
  location: string
  capacity: number
  ticketPrice: number
  description: string
  createdAt: string
}

export interface RSVP {
  id: string
  eventId: string
  farcasterUsername: string
  farcasterFid: number
  email: string
  name: string
  isContributor: boolean
  createdAt: string
}

export interface Talk {
  id: string
  title: string
  date: string
  description: string
  status: 'upcoming' | 'live' | 'archived'
  recordingUrl?: string
  transcriptUrl?: string
}

export interface Post {
  id: string
  eventId: string
  authorFid: number
  authorUsername: string
  content: string
  mediaUrl?: string
  likes: number
  createdAt: string
}