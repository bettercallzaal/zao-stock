'use client';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-white'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold mb-4'>ZAO Stock 🎸</h1>
        <p className='text-lg text-gray-600 mb-8'>
          Farcaster-native music gathering for musicians building with emerging tech
        </p>
        <div className='bg-gray-100 p-8 rounded-lg'>
          <p className='text-gray-700 mb-4'>📅 October 3 • 📍 Ellsworth, Maine</p>
          <p className='text-gray-700'>Coming soon...</p>
        </div>
      </div>
    </main>
  );
}