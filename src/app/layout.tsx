import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZAO-Stock",
  description: "Farcaster-native music gathering for musicians building with emerging tech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zaofestivals.com",
    siteName: "ZAO-Stock",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@bettercallzaal",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white dark:bg-black">{children}</body>
    </html>
  );
}
