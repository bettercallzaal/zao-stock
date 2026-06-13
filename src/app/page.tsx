'use client';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-black">
      <div className="text-center px-4 max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-purple-300 mb-3">
          ZAO Festivals presents
        </p>
        <h1 className="text-6xl font-bold text-white mb-2">ZAOstock</h1>
        <p className="text-sm text-purple-300 mb-6">by The ZAO</p>
        <p className="text-xl text-purple-200 mb-8">
          A Farcaster-native music gathering for musicians building with emerging tech.
        </p>
        <div className="bg-purple-900/50 backdrop-blur border border-purple-700 p-8 rounded-lg">
          <p className="text-lg text-purple-100 mb-6">October 3 - Ellsworth, Maine</p>

          {/* Two clear entry points: musicians and helpers/volunteers */}
          <div className="grid gap-4 sm:grid-cols-2 text-left">
            <div className="bg-purple-950/40 border border-purple-700 rounded-lg p-5">
              <h2 className="text-lg font-bold text-white mb-1">Musicians</h2>
              <p className="text-sm text-purple-200 mb-4">
                Building with emerging tech? Get on the ZAOstock lineup.
              </p>
              {/* TODO: confirm submission link - replace mailto with the lineup submission form when it exists */}
              <a
                href="mailto:zaofestivals@gmail.com?subject=ZAOstock%20lineup%20submission"
                className="inline-block text-sm font-semibold text-purple-100 underline underline-offset-4 hover:text-white"
              >
                Submit to the lineup
              </a>
              <p className="mt-2 text-xs text-purple-400">Submission form coming soon.</p>
            </div>

            <div className="bg-purple-950/40 border border-purple-700 rounded-lg p-5">
              <h2 className="text-lg font-bold text-white mb-1">Helpers and volunteers</h2>
              <p className="text-sm text-purple-200 mb-4">
                Want to help make ZAOstock happen? Reach out and get involved.
              </p>
              {/* TODO: confirm submission link - replace mailto with the volunteer signup form when it exists */}
              <a
                href="mailto:zaofestivals@gmail.com?subject=ZAOstock%20volunteer"
                className="inline-block text-sm font-semibold text-purple-100 underline underline-offset-4 hover:text-white"
              >
                Get involved
              </a>
              <p className="mt-2 text-xs text-purple-400">Volunteer signup coming soon.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
