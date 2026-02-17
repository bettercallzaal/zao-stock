# 🎸 ZAO-STOCK

Farcaster-native music gathering for musicians building with emerging tech.

**Date:** October 3, 2026  
**Location:** Franklin Street Parklet, Ellsworth, Maine  
**Capacity:** 100–250 attendees  
**Ticket:** $10 base (discounts for active contributors)

## Features

- 🎵 Live music showcase (5-15+ artists)
- 💬 Farcaster-native RSVP & community feed
- 📱 Mobile-first design
- 🎤 Schelling Point pre-event roundtables
- 📸 Past events showcase (Palooza, Chella)
- 🏗️ Bonfire-inspired knowledge archive

## Tech Stack

- **Frontend:** Next.js 15 + React 19 + Tailwind CSS
- **Backend:** Supabase (PostgreSQL)
- **Farcaster:** Neynar SDK
- **Deployment:** Vercel

## Development

```bash
# Install dependencies
npm install

# Set up environment (copy .env.local.example to .env.local)
cp .env.local.example .env.local

# Run dev server
npm run dev
```

## Project Structure

```
src/
├── app/              # Next.js pages & routes
├── components/       # Reusable React components
├── lib/              # Utilities (Farcaster, Supabase, etc.)
├── styles/           # Global styles
└── types/            # TypeScript types
supabase/
├── migrations/       # Database migrations
└── seed/             # Seed data
```

## Deployment

Push to main branch → Vercel auto-deploys to zaofestivals.com

---

Built with 🎸 by Zaal (@bettercallzaal)