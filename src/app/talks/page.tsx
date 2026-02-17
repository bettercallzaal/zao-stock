export default function TalksPage() {
  const talks = [
    {
      date: 'Mar 7, 2026',
      title: 'COC Metaverse Concerts',
      description: 'First Schelling Point roundtable on music + tech',
      status: 'upcoming'
    },
    {
      date: 'TBD (Monthly)',
      title: 'More Roundtables Through July',
      description: 'Pre-event discussions leading up to ZAO-STOCK Oct 3',
      status: 'scheduled'
    },
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-5xl font-bold mb-4 text-gradient">Schelling Point Talks</h1>
        <p className="text-lg text-gray-300">
          Pre-event roundtables building momentum for ZAO-STOCK Oct 3
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {talks.map((talk, idx) => (
          <div key={idx} className="card hover:border-zao-purple/60">
            <div className="flex items-start justify-between mb-2">
              <div className="text-sm text-zao-purple font-bold">{talk.date}</div>
              <span className="text-xs px-2 py-1 rounded bg-zao-purple/20 text-zao-purple">
                {talk.status}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">{talk.title}</h3>
            <p className="text-gray-400">{talk.description}</p>
          </div>
        ))}
      </div>

      <section className="mt-12 card border-zao-purple/50">
        <h2 className="text-2xl font-bold mb-4">Archive</h2>
        <p className="text-gray-400">
          Past talks, transcripts, and key insights coming soon.
        </p>
      </section>
    </main>
  )
}