import type { Metadata } from "next";

import { PortfolioPage } from "@/components/portfolio-page";
import { SeoJsonLd } from "@/components/seo-json-ld";
import { homeContent } from "@/lib/home-content";
import { defaultSocialImage, personSchema } from "@/lib/seo-schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ujjwal Baunthiyal | ujjwaluzu Web Developer Portfolio",
  description:
    "Explore the portfolio, projects, experiments, and YouTube work of Ujjwal Baunthiyal, a web developer building with React, Next.js, Python, and Django.",
  keywords: [
    "ujjwaluzu",
    "Ujjwal",
    "Ujjwal Baunthiyal",
    "Ujjwal Baunthiyal web developer",
    "ujjwaluzu portfolio",
    "Ujjwal developer portfolio",
    "Ujjwal web developer",
  ],
  openGraph: {
    title: "Ujjwal Baunthiyal | ujjwaluzu Web Developer Portfolio",
    description: "Explore Ujjwal Baunthiyal's projects, experiments, and YouTube work.",
    url: site.domain,
    siteName: site.name,
    locale: "en_US",
    type: "profile",
    images: [{ url: defaultSocialImage, alt: "Ujjwal Baunthiyal illustrated portrait" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ujjwal Baunthiyal | ujjwaluzu Web Developer Portfolio",
    description: "Explore Ujjwal Baunthiyal's projects, experiments, and YouTube work.",
    images: [defaultSocialImage],
  },
  alternates: { canonical: site.domain },
};

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema(),
    {
      "@type": "WebSite",
      "@id": `${site.domain}/#website`,
      url: site.domain,
      name: "ujjwaluzu",
      description: site.description,
      publisher: { "@id": `${site.domain}/#ujjwal-baunthiyal` },
    },
    {
      "@type": "ProfilePage",
      url: site.domain,
      name: "Ujjwal Baunthiyal | ujjwaluzu",
      mainEntity: { "@id": `${site.domain}/#ujjwal-baunthiyal` },
    },
    {
      "@type": "ItemList",
      name: "Projects by Ujjwal Baunthiyal",
      itemListElement: homeContent.projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.name,
        url: `${site.domain}/project/${project.slug}`,
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <SeoJsonLd data={homepageJsonLd} />
      <PortfolioPage />
    </>
  );
}
