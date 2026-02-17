import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="py-12 md:py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-gradient">ZAO-STOCK</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Farcaster-native music gathering for musicians building with emerging tech
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/stock" className="btn btn-primary">
            RSVP for Oct 3 →
          </Link>
          <a href="https://warpcast.com/bettercallzaal" className="btn btn-secondary">
            Follow on Farcaster
          </a>
        </div>
      </section>

      {/* Key Details */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
        <div className="card">
          <h3 className="text-xl font-bold mb-2">📅 Oct 3, 2026</h3>
          <p className="text-gray-400">Franklin Street Parklet<br/>Ellsworth, Maine</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-bold mb-2">🎵 Live Music</h3>
          <p className="text-gray-400">5-15+ musicians building with emerging tech</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-bold mb-2">💬 Farcaster-Native</h3>
          <p className="text-gray-400">RSVP, community feed, live updates</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-bold mb-2">💰 $10 Ticket</h3>
          <p className="text-gray-400">Active contributors get discounts</p>
        </div>
      </section>

      {/* CTA Sections */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
        <Link href="/stock" className="card hover:border-zao-purple/60 group cursor-pointer">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-zao-purple">🎤 Oct 3 Event</h3>
          <p className="text-gray-400">Lineup, schedule, RSVP, live feed</p>
        </Link>
        <Link href="/talks" className="card hover:border-zao-purple/60 group cursor-pointer">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-zao-purple">🎤 Schelling Point</h3>
          <p className="text-gray-400">Pre-event roundtables & discussions</p>
        </Link>
        <Link href="/past" className="card hover:border-zao-purple/60 group cursor-pointer">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-zao-purple">📸 Past Events</h3>
          <p className="text-gray-400">Palooza & Chella galleries</p>
        </Link>
      </section>
    </main>
  )
}