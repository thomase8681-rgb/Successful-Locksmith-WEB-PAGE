import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Galvin Locksmiths – Emergency locksmith services across Greater Manchester",
  description:
    "5-star rated Manchester locksmith. Locked out? Nathan and the team arrive in 30 minutes. No call-out fee, damage-free entry, honest prices. Call 07930 229289.",
  keywords: [
    "locksmith Manchester",
    "emergency locksmith",
    "locked out Manchester",
    "lock change",
    "UPVC door repair",
    "Galvin Locksmiths",
  ],
  metadataBase: new URL("https://galvinlocksmiths.co.uk"),
  openGraph: {
    title: "Galvin Locksmiths – Emergency locksmith across Greater Manchester",
    description:
      "Locked out in Manchester? 30-minute response, no call-out fee, 5-star rated since 2014.",
    type: "website",
    locale: "en_GB",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d1b2a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
