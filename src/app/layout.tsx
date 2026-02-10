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
  title: {
    default: "Ben Ronen — CS & Philosophy at NYU",
    template: "%s | Ben Ronen",
  },
  description: "Personal website of Ben Ronen, studying computer science and philosophy at NYU. Interests include AI, human cognition, and ethics.",
  openGraph: {
    title: "Ben Ronen — CS & Philosophy at NYU",
    description: "Personal website of Ben Ronen, studying computer science and philosophy at NYU. Interests include AI, human cognition, and ethics.",
    url: "https://benronen.me",
    siteName: "Ben Ronen",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/ben_img_4_website.JPG",
        width: 1200,
        height: 630,
        alt: "Ben Ronen",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Ben Ronen",
    card: "summary_large_image",
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
