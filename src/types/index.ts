export interface EventProfile {
  id: string;
  farcaster_username: string;
  email?: string;
  display_name?: string;
  pfp_url?: string;
  created_at: string;
}

export interface Event {
  id: string;
  slug: string;
  name: string;
  date: string;
  venue: string;
  description: string;
  capacity: number;
  ticket_price: number;
  discount_tier_price?: number;
  status: "draft" | "published" | "archived";
}

export interface RSVP {
  id: string;
  event_id: string;
  user_id: string;
  status: "confirmed" | "waitlist" | "cancelled";
  tier: "base" | "active_guest";
  payment_status: "pending" | "completed" | "failed";
  created_at: string;
}

export interface LineupItem {
  id: string;
  event_id: string;
  artist_name: string;
  genre: string;
  bio: string;
  social_links: Record<string, string>;
  image_url: string;
  order: number;
}

export interface CommunityPost {
  id: string;
  event_id: string;
  user_id: string;
  content: string;
  media_urls: string[];
  created_at: string;
  moderated: boolean;
}

export interface Talk {
  id: string;
  slug: string;
  title: string;
  date: string;
  topic: string;
  status: "scheduled" | "completed";
  video_url?: string;
  transcript?: string;
}
