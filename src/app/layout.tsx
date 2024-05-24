import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import MusicPlayer from "../components/Audio/AudioPlayer"; // Correct path

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "k1zmt's profile",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <main style={{ flex: "1" }}>
            {children}
          </main>
          <Analytics />
          <MusicPlayer />
        </div>
      </body>
    </html>
  );
}