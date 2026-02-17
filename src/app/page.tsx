export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zao-purple/10 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-zao-dark mb-4">ZAO-Stock 🎸</h1>
        <p className="text-xl text-gray-700 mb-8">
          Farcaster-native music gathering for musicians building with emerging tech
        </p>
        <p className="text-lg text-gray-600 mb-12">
          October 3, 2026 — Franklin Street Parklet, Ellsworth Maine
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="card-zao">
            <h2 className="text-2xl font-bold mb-2">🎵 Lineup</h2>
            <p className="text-gray-600">Discover amazing musicians</p>
          </div>
          <div className="card-zao">
            <h2 className="text-2xl font-bold mb-2">🗓️ Schedule</h2>
            <p className="text-gray-600">See the full day plan</p>
          </div>
          <div className="card-zao">
            <h2 className="text-2xl font-bold mb-2">🎫 RSVP</h2>
            <p className="text-gray-600">Secure your spot ($10)</p>
          </div>
        </div>

        <button className="btn-zao text-lg">Coming Soon</button>
      </div>
    </main>
  );
}
