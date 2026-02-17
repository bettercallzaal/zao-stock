# ZAO-Stock 🎸

**Farcaster-native event platform** for ZAO-Stock — Oct 3 music gathering in Ellsworth Maine.

## Features

- 🎵 **Event Page** — Main event details, RSVP, lineup, schedule
- 🗣️ **Schelling Point Archive** — Pre-event talks & roundtables
- 📸 **Past Events Galleries** — ZAO-Palooza & ZAO-Chella showcase
- 👥 **Community Feed** — Live posts from attendees (moderated)
- ⚙️ **Admin Dashboard** — Edit schedule, lineup, venue, RSVP analytics
- 🔐 **Farcaster Auth** — Seamless sign-in via Farcaster usernames
- 💳 **Flexible Pricing** — $10 base + configurable "active guest" discount

## Tech Stack

- **Frontend**: Next.js 16 (App Router), TypeScript, Tailwind CSS, DaisyUI
- **Backend**: Supabase (PostgreSQL), Neynar API (Farcaster)
- **Deployment**: Vercel → zaofestivals.com
- **Design**: Mobile-first, Farcaster-native UX

## Quick Start

1. **Clone & install**:
   \`\`\`bash
   npm install
   \`\`\`

2. **Set up environment**:
   \`\`\`bash
   cp .env.example .env.local
   # Fill in Supabase & Neynar API keys
   \`\`\`

3. **Run dev server**:
   \`\`\`bash
   npm run dev
   # Open http://localhost:3000
   \`\`\`

4. **Initialize Supabase**:
   \`\`\`bash
   npx supabase migration up
   \`\`\`

## Project Structure

\`\`\`
src/
  app/
    (events)/
      stock/          # Oct 3 event page
      palooza/        # April 2024 gallery
      chella/         # Dec 2024 gallery
    (talks)/
      /               # Schelling Point archive
    admin/            # Dashboard (schedule, lineup, RSVPs, moderation)
    page.tsx          # Home
  api/
    farcaster/        # Neynar auth & share endpoints
    rsvp/             # RSVP + payment logic
  components/         # Reusable UI (cards, forms, etc.)
  lib/
    farcaster.ts      # Farcaster SDK utilities
    supabase/         # DB client & helpers
\`\`\`

## Key Decisions

✅ **Farcaster-native from day one** — All UX designed for embedded frames & mobile viewports  
✅ **No external RSVP tools** — Custom forms + Supabase  
✅ **Admin-editable everything** — Schedule, lineup, venue all changeable in-app  
✅ **Open + contributor perks** — Public feed visible to all; badging for contributors  
✅ **Streaming support** — Link to live stream during event, shareable via community feed  

## Event Details

- **Event**: ZAO-Stock
- **Date**: October 3, 2026
- **Location**: Franklin Street Parklet, Ellsworth Maine
- **Capacity**: 100–250 attendees
- **Price**: $10 base; discount for "active guests" (contributors)
- **Initial Lineup**: Hurric4n3ike, DJANGO UU, CLEJAN, ATTABOTTY, Mr. Darius (scalable to 15+)

## Next Steps

1. ✅ Repo initialized with reusable code
2. ⏳ Supabase schema setup
3. ⏳ Home page build (hero + event preview)
4. ⏳ /stock event page (details, RSVP, lineup)
5. ⏳ Farcaster auth integration
6. ⏳ Admin dashboard
7. ⏳ Deploy to Vercel

## Contact

**Organizer**: @bettercallzaal (Farcaster)  
**Email**: zaofestivals@gmail.com  
**Domain**: zaofestivals.com

---

Built with ❤️ for creators building with emerging tech.
