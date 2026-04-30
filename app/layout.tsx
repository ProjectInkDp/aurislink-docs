import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AurisLink - High-Performance Audio Server",
  description: "AurisLink is a high-performance, Lavalink v4-compatible audio server built with Node.js. Stream music from SoundCloud, Deezer, Spotify, and more.",
  keywords: ["audio server", "lavalink", "music streaming", "node.js", "discord"],
  authors: [{ name: "Dreep", url: "https://github.com/ProjectInkDp" }],
  openGraph: {
    title: "AurisLink - High-Performance Audio Server",
    description: "A modern, feature-rich audio server compatible with Lavalink v4",
    url: "https://aurislink.dev",
    siteName: "AurisLink",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
