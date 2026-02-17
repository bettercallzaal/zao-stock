export default function PastEventsPage() {
  const pastEvents = [
    {
      name: 'ZAO-PALOOZA',
      date: 'April 4, 2024',
      location: 'NFT NYC side event',
      attendees: '~250',
      artists: '12',
      description: '6 new to Web3'
    },
    {
      name: 'ZAO-CHELLA',
      date: 'December 6, 2024',
      location: 'Art Basel side event',
      attendees: '1000+',
      artists: '17',
      description: '50 communities collaborated, 100+ visual artists'
    }
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-5xl font-bold mb-4 text-gradient">Past Festivals</h1>
        <p className="text-lg text-gray-300">
          Building the ZAO legacy one festival at a time
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pastEvents.map((event, idx) => (
          <div key={idx} className="card">
            <h2 className="text-3xl font-bold mb-4">{event.name}</h2>
            <div className="space-y-3 mb-6">
              <div>
                <div className="text-sm text-gray-400">Date</div>
                <div className="font-bold">{event.date}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Location</div>
                <div className="font-bold">{event.location}</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-400">Attendees</div>
                  <div className="font-bold">{event.attendees}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Artists</div>
                  <div className="font-bold">{event.artists}</div>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{event.description}</p>
            <button className="mt-6 btn btn-secondary w-full">
              View Gallery (Coming Soon)
            </button>
          </div>
        ))}
      </div>

      <section className="mt-12 card border-zao-purple/50 bg-gradient-to-r from-zao-purple/10 to-pink-500/10">
        <h2 className="text-2xl font-bold mb-4">Help us gather media</h2>
        <p className="text-gray-300 mb-4">
          Have photos or videos from Palooza or Chella? Share them with us!
        </p>
        <a href="mailto:zaofestivals@gmail.com" className="btn btn-primary">
          Send Media
        </a>
      </section>
    </main>
  )
}