import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ZAO Stock',
  description: 'Farcaster-native music gathering for musicians building with emerging tech',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
