import type { Metadata } from "next";
import { Anton, Cormorant_Garamond, Geist } from "next/font/google";

import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: "ujjwaluzu — Web Developer Portfolio",
  description: "Ujjwal Baunthiyal is a web developer exploring ideas, building products, and turning concepts into real experiences.",
  keywords: [
    "ujjwaluzu",
    "portfolio",
    "web developer",
    "IntelligenceX",
  ],
  openGraph: {
    title: "ujjwaluzu — Web Developer Portfolio",
    description: "Exploring ideas, building products, and turning concepts into real experiences.",
    url: site.domain,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ujjwaluzu — Web Developer Portfolio",
    description: "Exploring ideas, building products, and turning concepts into real experiences.",
  },
  icons: {
    icon: "/assets/faviconicon.png",
    shortcut: "/assets/faviconicon.png",
    apple: "/assets/faviconicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${cormorant.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
