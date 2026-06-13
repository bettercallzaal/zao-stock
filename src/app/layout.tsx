import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZAO Festivals presents ZAOstock - The ZAO",
  description:
    "ZAOstock - the flagship event from ZAO Festivals, the events arm of The ZAO. A Farcaster-native music gathering for musicians building with emerging tech. October 3, Ellsworth Maine.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
