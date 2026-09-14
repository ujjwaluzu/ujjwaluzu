import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";

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

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: "ujjwaluzu - Coming Soon",
  description: site.description,
  keywords: [
    "ujjwaluzu",
    "portfolio",
    "coming soon",
    "product designer",
    "developer",
  ],
  openGraph: {
    title: "ujjwaluzu - Coming Soon",
    description: site.description,
    url: site.domain,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ujjwaluzu - Coming Soon",
    description: site.description,
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
      className={`${geistSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}