export default function StockEvent() {
  const lineup = [
    'Hurric4n3ike',
    'DJANGO UU',
    'CLEJAN',
    'ATTABOTTY',
    'Mr. Darius',
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-5xl font-bold mb-4 text-gradient">ZAO-STOCK</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="card">
            <div className="text-sm text-gray-400">Date</div>
            <div className="text-xl font-bold">Oct 3, 2026</div>
          </div>
          <div className="card">
            <div className="text-sm text-gray-400">Location</div>
            <div className="text-xl font-bold">Franklin Street</div>
          </div>
          <div className="card">
            <div className="text-sm text-gray-400">Capacity</div>
            <div className="text-xl font-bold">100-250</div>
          </div>
          <div className="card">
            <div className="text-sm text-gray-400">Ticket</div>
            <div className="text-xl font-bold">$10</div>
          </div>
        </div>
      </section>

      {/* RSVP CTA */}
      <section className="mb-12 card border-zao-purple/50 bg-gradient-to-r from-zao-purple/10 to-pink-500/10">
        <h2 className="text-3xl font-bold mb-4">Ready to join?</h2>
        <p className="text-gray-300 mb-6">
          RSVP via Farcaster and be part of the community. Active contributors get exclusive perks.
        </p>
        <button className="btn btn-primary">
          Sign in with Farcaster & RSVP
        </button>
      </section>

      {/* Lineup */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🎵 Lineup</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lineup.map((artist) => (
            <div key={artist} className="card hover:border-zao-purple/60 cursor-pointer">
              <div className="font-bold text-lg">{artist}</div>
              <div className="text-sm text-gray-400">Artist • TBA</div>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">📅 Schedule (TBD)</h2>
        <div className="card">
          <p className="text-gray-400">Schedule coming soon. Check back for updates.</p>
        </div>
      </section>

      {/* Community Feed */}
      <section>
        <h2 className="text-3xl font-bold mb-6">💬 Community Feed</h2>
        <div className="card">
          <p className="text-gray-400">Live feed from attendees coming soon.</p>
        </div>
      </section>
    </main>
  )
}