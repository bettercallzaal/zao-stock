import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ZAO-STOCK | Oct 3, Ellsworth Maine',
  description: 'Farcaster-native music gathering for musicians building with emerging tech.',
  openGraph: {
    title: 'ZAO-STOCK',
    description: 'Music + Emerging Tech + Community',
    url: 'https://zaofestivals.com',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zao-dark text-white font-sans">
        <nav className="sticky top-0 z-50 bg-zao-gray/80 backdrop-blur border-b border-zao-purple/20 px-4 py-3">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-zao-purple">
              🎸 ZAO-STOCK
            </a>
            <div className="flex gap-4 text-sm">
              <a href="/stock" className="hover:text-zao-purple transition">Event</a>
              <a href="/talks" className="hover:text-zao-purple transition">Talks</a>
              <a href="/past" className="hover:text-zao-purple transition">Past Events</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-zao-gray border-t border-zao-purple/20 px-4 py-6 mt-12">
          <div className="max-w-6xl mx-auto text-center text-sm text-gray-400">
            <p>Built with 🎸 by Zaal | <a href="https://warpcast.com/bettercallzaal" className="text-zao-purple hover:underline">@bettercallzaal</a></p>
            <p>Farcaster-native music gathering for musicians building with emerging tech</p>
          </div>
        </footer>
      </body>
    </html>
  )
}