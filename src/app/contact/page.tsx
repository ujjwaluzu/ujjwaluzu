import type { Metadata } from "next";

import { ContactPage } from "@/components/contact-page";
import { SeoJsonLd } from "@/components/seo-json-ld";
import { breadcrumbSchema, defaultSocialImage, personSchema } from "@/lib/seo-schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Ujjwal Baunthiyal | ujjwaluzu",
  description: "Contact Ujjwal Baunthiyal about web development, project ideas, collaboration, opportunities, or a friendly hello.",
  keywords: ["Contact Ujjwal Baunthiyal", "contact ujjwaluzu", "Ujjwal web developer"],
  openGraph: {
    title: "Contact Ujjwal Baunthiyal | ujjwaluzu",
    description: "Get in touch with Ujjwal Baunthiyal about web development, projects, and collaboration.",
    url: `${site.domain}/contact`,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [{ url: defaultSocialImage, alt: "Ujjwal Baunthiyal illustrated portrait" }],
  },
  twitter: {
    card: "summary",
    title: "Contact Ujjwal Baunthiyal | ujjwaluzu",
    description: "Get in touch with Ujjwal Baunthiyal about web development, projects, and collaboration.",
    images: [defaultSocialImage],
  },
  alternates: {
    canonical: `${site.domain}/contact`,
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      url: `${site.domain}/contact`,
      name: "Contact Ujjwal Baunthiyal",
      description: metadata.description,
      mainEntity: personSchema(),
    },
    breadcrumbSchema([
      { name: "Home", url: site.domain },
      { name: "Contact", url: `${site.domain}/contact` },
    ]),
  ],
};

export default function ContactRoute() {
  return (
    <>
      <SeoJsonLd data={contactJsonLd} />
      <ContactPage />
    </>
  );
}
