import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SeoJsonLd } from "@/components/seo-json-ld";
import { experienceProjects } from "@/lib/experience-projects";
import { breadcrumbSchema, defaultSocialImage, personSchema } from "@/lib/seo-schema";
import { site } from "@/lib/site";

const pageUrl = `${site.domain}/experience/intelligencex`;
const pageTitle = "IntelligenceX Internship Projects | Ujjwal Baunthiyal";
const pageDescription =
  "Three projects Ujjwal Baunthiyal contributed to during a three-month Web Developer Internship at IntelligenceX: CSPMX, AIPTX, and XRepAI.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["Ujjwal Baunthiyal internship", "Web Developer Intern projects", "CSPMX", "AIPTX", "XRepAI"],
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

const experienceJsonLd = {
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
      { name: "Experience", url: `${site.domain}/#experience` },
      { name: "IntelligenceX Projects", url: pageUrl },
    ]),
  ],
};

export default function ExperiencePage() {
  return (
    <>
      <SeoJsonLd data={experienceJsonLd} />
      <SiteHeader />
      <main className="experience-page paper-texture">
        <section className="experience-page-hero">
          <div className="page-shell">
            <p className="experience-page-eyebrow">INTERNSHIP <span aria-hidden="true">/</span> 3 PROJECTS</p>
            <div className="experience-page-intro">
              <div>
                <h1 className="display-heading experience-page-title">THREE PROJECTS.<br />THREE MONTHS.</h1>
                <p className="experience-page-company">
                  <a href="https://intelligencex.org" target="_blank" rel="noopener noreferrer">IntelligenceX</a> is a cybersecurity company providing penetration testing, managed security, and compliance services.
                </p>
                <p className="experience-page-summary">
                  During my three-month Web Developer Internship, I contributed to three projects for the company.
                </p>
              </div>
              <Image
                className="experience-page-character"
                src="/assets/hero-char.webp"
                alt="Illustrated portrait of Ujjwal with a frog on his head"
                width={1024}
                height={1536}
                sizes="(max-width: 1000px) 140px, 150px"
                priority
              />
            </div>
          </div>
        </section>

        <section className="experience-projects-section" aria-label="Internship projects">
          <div className="page-shell experience-projects-grid">
            {experienceProjects.map((project, index) => (
              <article key={project.name} className={`experience-project-card experience-project-card--${index + 1}`}>
                <div className="experience-project-card-head">
                  <span className="experience-project-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <a
                    className="experience-project-link"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name} website, opens in a new tab`}
                  >
                    <Image
                      className={`experience-project-logo experience-project-logo--${project.name.toLowerCase()}`}
                      src={project.logo}
                      alt={`${project.name} logo`}
                      width={project.logoWidth}
                      height={project.logoHeight}
                      sizes="(max-width: 767px) 170px, 200px"
                    />
                  </a>
                </div>
                <section className="experience-project-about" aria-labelledby={`about-${project.name}`}>
                  <h3 id={`about-${project.name}`}>About the project</h3>
                  <p>{project.about}</p>
                </section>
                <section className="experience-project-work" aria-labelledby={`work-${project.name}`}>
                  <h3 id={`work-${project.name}`}>My work</h3>
                  <ul className="experience-project-contributions">
                    {project.work.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </section>
              </article>
            ))}
          </div>
          <section className="page-shell experience-company-github" aria-labelledby="experience-company-github-title">
            <div className="experience-company-github-copy">
              <p className="experience-page-eyebrow">COMPANY ACCOUNT</p>
              <h2 id="experience-company-github-title">My GitHub work at IntelligenceX</h2>
              <p>This contribution graph is from my work GitHub account at IntelligenceX.</p>
            </div>
            <figure className="experience-company-github-figure">
              <Image
                src="/assets/intelligencex-github-contributions.png"
                alt="GitHub contribution chart from my IntelligenceX work account, showing 278 contributions in the last year for 2026."
                width={1106}
                height={270}
                sizes="(max-width: 767px) 100vw, 1100px"
              />
            </figure>
          </section>
          <div className="page-shell experience-page-back-wrap">
            <Link className="button button-outline experience-page-back" href="/#experience"><span aria-hidden="true">←</span> Back to experience</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
