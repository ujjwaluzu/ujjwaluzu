import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SeoJsonLd } from "@/components/seo-json-ld";
import { homeContent } from "@/lib/home-content";
import { breadcrumbSchema, defaultSocialImage, personSchema } from "@/lib/seo-schema";
import { site } from "@/lib/site";

const pageUrl = `${site.domain}/experience`;
const pageTitle = "Web Developer Intern at IntelligenceX | Ujjwal Baunthiyal";
const pageDescription =
  "Ujjwal Baunthiyal’s work experience, including a three-month Web Developer Internship at IntelligenceX and contributions to XRepAI, AIPTX, and CSPMX.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [{ url: defaultSocialImage, alt: "Ujjwal Baunthiyal illustrated portrait" }],
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
    images: [defaultSocialImage],
  },
  alternates: { canonical: pageUrl },
};

const experiencePageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: pageTitle,
      description: pageDescription,
      isPartOf: { "@id": `${site.domain}/#website` },
      about: personSchema(),
    },
    breadcrumbSchema([
      { name: "Home", url: site.domain },
      { name: "Experience", url: pageUrl },
    ]),
  ],
};

export default function ExperienceIndexPage() {
  const { experience } = homeContent;

  return (
    <>
      <SeoJsonLd data={experiencePageJsonLd} />
      <SiteHeader />
      <main className="experience-directory paper-texture">
        <section className="experience-directory-hero">
          <div className="page-shell">
            <p className="experience-page-eyebrow">CAREER <span aria-hidden="true">/</span> EXPERIENCE</p>
            <h1 className="display-heading experience-directory-title">WORK EXPERIENCE</h1>
            <p className="experience-directory-summary">
              My role as a Web Developer Intern at IntelligenceX and the projects I contributed to during my three-month internship.
            </p>
          </div>
        </section>

        <section className="experience-directory-list" aria-label="Work experience">
          <div className="page-shell">
            <p className="experience-directory-kicker">INTERNSHIP</p>
            <Link className="experience-directory-card" href="/experience/intelligencex">
              <span className="experience-directory-logo-wrap" aria-hidden="true">
                <Image src="/assets/company.webp" alt="" width={48} height={48} />
              </span>
              <span className="experience-directory-copy">
                <span className="experience-directory-company">{experience.company}</span>
                <span className="experience-directory-role">{experience.role}</span>
                <span className="experience-directory-description">{experience.companyDescription}</span>
                <span className="experience-directory-action">VIEW PROJECTS AND WORK <span aria-hidden="true">→</span></span>
              </span>
              <span className="experience-directory-duration">{experience.duration}</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
