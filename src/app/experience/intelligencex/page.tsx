import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SeoJsonLd } from "@/components/seo-json-ld";
import { experienceProjects } from "@/lib/experience-projects";
import { homeContent } from "@/lib/home-content";
import { breadcrumbSchema, defaultSocialImage, personSchema } from "@/lib/seo-schema";
import { site } from "@/lib/site";

const pageUrl = `${site.domain}/experience/intelligencex`;
const pageTitle = "Ujjwal at IntelligenceX: XRepAI, AIPTX & CSPMX";
const pageDescription =
  "Ujjwal Baunthiyal’s three-month Web Developer Internship at IntelligenceX, with project work on XRepAI, AIPTX, and CSPMX.";

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
      mainEntity: {
        "@type": "ItemList",
        name: "Projects Ujjwal Baunthiyal contributed to at IntelligenceX",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: experienceProjects.length,
        itemListElement: experienceProjects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "WebPage",
            name: project.name,
            url: `${pageUrl}/${project.slug}`,
            description: project.about,
          },
        })),
      },
    },
    breadcrumbSchema([
      { name: "Home", url: site.domain },
      { name: "Experience", url: `${site.domain}/experience` },
      { name: "IntelligenceX Projects", url: pageUrl },
    ]),
  ],
};

export default function ExperiencePage() {
  const { experience } = homeContent;

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
                <h1 className="display-heading experience-page-title">WEB DEVELOPER<br />INTERN AT<br />INTELLIGENCEX.</h1>
                <p className="experience-page-company">
                  <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer">{experience.company}</a> {experience.companyDescription}
                </p>
                <p className="experience-page-summary">
                  During my three-month internship at IntelligenceX, I contributed to XRepAI, AIPTX, and CSPMX. Here’s what each product does and the work I did on it.
                </p>
              </div>
              <Image
                className="experience-page-company-logo"
                src="/assets/intelligencex-logo.svg"
                alt="IntelligenceX logo"
                width={1110}
                height={60}
                sizes="(max-width: 767px) 200px, (max-width: 1000px) 280px, 300px"
                priority
              />
            </div>
          </div>
        </section>

        <section className="experience-projects-section" aria-label="Internship projects">
          <div className="page-shell">
            <h2 className="experience-projects-heading">Three projects. Three months.</h2>
          </div>
          <div className="page-shell experience-projects-grid">
            {experienceProjects.map((project, index) => (
              <div key={project.name} className={`experience-project-card-wrap experience-project-card-wrap--${index + 1}`}>
                <Link
                  className="experience-project-card"
                  href={`/experience/intelligencex/${project.slug}`}
                  aria-label={`Read Ujjwal's ${project.name} project case study`}
                >
                  <article>
                    <div className="experience-project-card-head">
                      <span className="experience-project-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                      <span className="experience-project-link">
                        <Image
                          className={`experience-project-logo experience-project-logo--${project.name.toLowerCase()}`}
                          src={project.logo}
                          alt={`${project.name} logo`}
                          width={project.logoWidth}
                          height={project.logoHeight}
                          sizes="(max-width: 767px) 170px, 200px"
                        />
                      </span>
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
                    <span className="experience-project-read-more">Read the project story <span aria-hidden="true">→</span></span>
                  </article>
                </Link>
                <a className="experience-project-external" href={project.url} target="_blank" rel="noopener noreferrer">
                  Visit {project.name} <span aria-hidden="true">↗</span>
                </a>
              </div>
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
                src="/assets/intelligencex-github-contributions.webp"
                alt="GitHub contribution chart from my IntelligenceX work account, showing 278 contributions in the last year for 2026."
                width={1106}
                height={270}
                sizes="(max-width: 767px) 100vw, 1100px"
              />
            </figure>
          </section>
          <div className="page-shell experience-page-back-wrap">
            <Link className="button button-outline experience-page-back" href="/experience"><span aria-hidden="true">←</span> Back to experience</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
