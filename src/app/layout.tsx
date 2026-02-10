import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://benronen.me"),
  title: "Ben Ronen",
  description: "Computer Science & Philosophy at NYU",
  openGraph: {
    title: "Ben Ronen",
    description: "Computer Science & Philosophy at NYU",
    images: [
      {
        url: "/ben_logo.JPG",
        width: 1200,
        height: 630,
        alt: "Ben Ronen",
      },
    ],
  },
};



// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${satoshi.variable} antialiased bg-[#FBFAF2] text-black pt-20`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
