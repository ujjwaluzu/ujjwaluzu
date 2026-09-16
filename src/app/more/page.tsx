import type { Metadata } from "next";

import { MorePage } from "@/components/more-page";
import { SeoJsonLd } from "@/components/seo-json-ld";
import { allVideos } from "@/lib/more-content";
import { defaultSocialImage, breadcrumbSchema, personSchema } from "@/lib/seo-schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ujjwal Baunthiyal YouTube | Music and Tech Videos",
  description:
    "Watch music and technology videos from Ujjwal Baunthiyal, including Ujjwaluzu music, CS50W projects, Python, Django, and web development.",
  keywords: [
    "Ujjwal Baunthiyal YouTube",
    "Ujjwaluzu YouTube",
    "Ujjwaluzu music",
    "Ujjwal Baunthiyal music",
    "Ujjwal Baunthiyal CS50W",
    "Ujjwal Baunthiyal tech videos",
  ],
  openGraph: {
    title: "Ujjwal Baunthiyal YouTube | Music and Tech Videos",
    description:
      "Watch music and technology videos from Ujjwal Baunthiyal, including Ujjwaluzu music and CS50W project videos.",
    url: `${site.domain}/more`,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [{ url: defaultSocialImage, alt: "Ujjwal Baunthiyal illustrated portrait" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ujjwal Baunthiyal YouTube | Music and Tech Videos",
    description:
      "Watch music and technology videos from Ujjwal Baunthiyal.",
    images: [defaultSocialImage],
  },
  alternates: {
    canonical: `${site.domain}/more`,
  },
};

const moreJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${site.domain}/more#collection`,
      url: `${site.domain}/more`,
      name: "Ujjwal Baunthiyal YouTube | Music and Tech Videos",
      description: metadata.description,
      author: personSchema(),
    },
    {
      "@type": "ItemList",
      name: "Ujjwaluzu music and technology videos",
      itemListElement: allVideos.map((video, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: video.title,
        url: `${site.domain}/more/${video.id}`,
      })),
    },
    breadcrumbSchema([
      { name: "Home", url: site.domain },
      { name: "More", url: `${site.domain}/more` },
    ]),
  ],
};

export default function MoreRoute() {
  return (
    <>
      <SeoJsonLd data={moreJsonLd} />
      <MorePage />
    </>
  );
}
