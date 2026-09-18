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
  title: "Ujjwal Baunthiyal | ujjwaluzu Web Developer Portfolio",
  description: "Explore the portfolio, projects, experiments, and YouTube work of Ujjwal Baunthiyal, a web developer building with React, Next.js, Python, and Django.",
  applicationName: "ujjwaluzu",
  authors: [{ name: "Ujjwal Baunthiyal", url: site.domain }],
  creator: "Ujjwal Baunthiyal",
  publisher: "Ujjwal Baunthiyal",
  keywords: [
    "ujjwaluzu",
    "Ujjwal Baunthiyal",
    "Ujjwal web developer",
    "Ujjwal developer portfolio",
    "portfolio",
    "web developer",
    "React developer",
    "Next.js developer",
    "Python developer",
    "Django developer",
    "IntelligenceX",
  ],
  openGraph: {
    title: "Ujjwal Baunthiyal | ujjwaluzu Web Developer Portfolio",
    description: "Explore the portfolio, projects, experiments, and YouTube work of Ujjwal Baunthiyal.",
    url: site.domain,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/assets/ujjwal-character.webp", alt: "Ujjwal Baunthiyal illustrated portrait" }],
  },
  twitter: {
    card: "summary",
    title: "Ujjwal Baunthiyal | ujjwaluzu Web Developer Portfolio",
    description: "Explore the portfolio, projects, experiments, and YouTube work of Ujjwal Baunthiyal.",
    images: ["/assets/ujjwal-character.webp"],
  },
  icons: {
    icon: "/assets/favicon-new.png",
    shortcut: "/assets/favicon-new.png",
    apple: "/assets/favicon-new.png",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${cormorant.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');" }} />
        {children}
      </body>
    </html>
  );
}
