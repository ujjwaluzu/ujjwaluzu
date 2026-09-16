import type { Metadata } from "next";

import { MorePage } from "@/components/more-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "More Than Code — Ujjwal Baunthiyal",
  description:
    "A collection of music and technology videos curated by Ujjwal Baunthiyal.",
  openGraph: {
    title: "More Than Code — Ujjwal Baunthiyal",
    description:
      "A collection of music and technology videos curated by Ujjwal Baunthiyal.",
    url: `${site.domain}/more`,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "More Than Code — Ujjwal Baunthiyal",
    description:
      "A collection of music and technology videos curated by Ujjwal Baunthiyal.",
  },
  alternates: {
    canonical: `${site.domain}/more`,
  },
};

export default function MoreRoute() {
  return <MorePage />;
}