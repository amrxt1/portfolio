import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "amritveer singh",
    template: "%s | amritveer singh",
  },
  description: "amritveer singh portfolio website",
  keywords: [
    "",
    "amritveer",
    "amritveer singh",
    "amritv",
    "portfolio",
    "vancouver",
  ],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "amritveer singh",
    description: "Portfolio website of Amritveer Singh",
    url: "https://amritv.space",
    siteName: "amritv.space",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased select-none`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
