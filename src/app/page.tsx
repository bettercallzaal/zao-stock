'use client';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-black">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-4">ZAO Stock 🎸</h1>
        <p className="text-xl text-purple-200 mb-8">
          Farcaster-native music gathering for musicians building with emerging tech
        </p>
        <div className="bg-purple-900/50 backdrop-blur border border-purple-700 p-8 rounded-lg max-w-md">
          <p className="text-lg text-purple-100 mb-4">📅 October 3 • 📍 Ellsworth, Maine</p>
          <p className="text-purple-200">Coming soon...</p>
        </div>
      </div>
    </main>
  );
}
