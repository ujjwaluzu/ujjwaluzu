import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SeoJsonLd } from "@/components/seo-json-ld";
import { experienceProjects, getExperienceProject } from "@/lib/experience-projects";
import { breadcrumbSchema } from "@/lib/seo-schema";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return experienceProjects.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getExperienceProject(slug);
  if (!project) return {};

  const url = `${site.domain}/experience/intelligencex/${project.slug}`;
  const title = project.detail.seoTitle;
  const description = project.detail.seoDescription;
  const image = `${site.domain}${project.logo}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [{ url: image, alt: `${project.name} logo` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
    alternates: { canonical: url },
  };
}

export default async function ExperienceProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getExperienceProject(slug);
  if (!project) notFound();

  const pageUrl = `${site.domain}/experience/intelligencex/${project.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: project.detail.seoTitle,
        description: project.detail.intro,
        isPartOf: { "@id": `${site.domain}/#website` },
        about: { "@type": "Thing", name: project.name, sameAs: project.url },
        breadcrumb: { "@id": `${pageUrl}#breadcrumbs` },
      },
      {
        ...breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Experience", url: `${site.domain}/experience` },
          { name: "IntelligenceX", url: `${site.domain}/experience/intelligencex` },
          { name: project.name, url: pageUrl },
        ]),
        "@id": `${pageUrl}#breadcrumbs`,
      },
    ],
  };

  const otherProjects = experienceProjects.filter((item) => item.slug !== project.slug);

  return (
    <>
      <SeoJsonLd data={jsonLd} />
      <SiteHeader />
      <main className="experience-detail paper-texture">
        <section className="experience-detail-hero">
          <div className="page-shell">
            <nav className="experience-detail-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">/</span>
              <Link href="/experience">Experience</Link><span aria-hidden="true">/</span>
              <Link href="/experience/intelligencex">IntelligenceX</Link><span aria-hidden="true">/</span>
              <span aria-current="page">{project.name}</span>
            </nav>
            <p className="experience-page-eyebrow">INTELLIGENCEX <span aria-hidden="true">/</span> PROJECT STORY</p>
            <div className="experience-detail-hero-grid">
              <div>
                <h1 className="display-heading experience-detail-title">{project.detail.heading}<span>.</span></h1>
                <p className="experience-detail-category">{project.category}</p>
                <p className="experience-detail-intro">{project.detail.intro}</p>
                <p className="experience-detail-byline">A portfolio account of <strong>Ujjwal Baunthiyal’s</strong> documented work during a Web Developer Internship at IntelligenceX. This is not the official {project.name} website.</p>
                <div className="experience-detail-actions">
                  <a className="button button-dark" href={project.url} target="_blank" rel="noopener noreferrer">Visit {project.name} <span aria-hidden="true">↗</span></a>
                  <Link className="button button-outline" href="/experience/intelligencex">All IntelligenceX projects</Link>
                </div>
              </div>
              <a className={`experience-detail-logo experience-detail-logo--${project.slug}`} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit the official ${project.name} website`}>
                <Image src={project.logo} alt={`${project.name} logo`} width={project.logoWidth} height={project.logoHeight} priority sizes="(max-width: 767px) 220px, 340px" />
              </a>
            </div>
          </div>
        </section>

        <div className="page-shell experience-detail-body">
          <aside className="experience-detail-facts" aria-label={`${project.name} project details`}>
            <div><span>PROJECT</span><strong>{project.name}</strong></div>
            <div><span>COMPANY</span><strong>IntelligenceX</strong></div>
            <div><span>ROLE</span><strong>Web Developer Intern</strong></div>
            <div><span>FOCUS</span><strong>{project.category}</strong></div>
          </aside>

          <article className="experience-detail-article">
            <h2>{project.detail.title}</h2>
            {project.detail.sections.map((section) => (
              <section key={section.title} className="experience-detail-section">
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </section>
            ))}
            <section className="experience-detail-section">
              <h3>My contributions</h3>
              <ul className="experience-project-contributions">
                {project.work.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
            <section className="experience-detail-section">
              <h3>Skills and focus areas</h3>
              <ul className="experience-detail-skills">
                {project.detail.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </section>
            <section className="experience-detail-section" aria-labelledby="experience-detail-links-title">
              <h3 id="experience-detail-links-title">Official product references</h3>
              <ul className="experience-project-contributions">
                {project.detail.links.map((item) => (
                  <li key={item.url}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">{item.label} <span aria-hidden="true">↗</span></a>
                  </li>
                ))}
              </ul>
            </section>
            <section className="experience-detail-faq" aria-labelledby="experience-detail-faq-title">
              <p className="experience-page-eyebrow">QUICK ANSWERS</p>
              <h2 id="experience-detail-faq-title">Frequently asked about {project.name}</h2>
              {project.detail.faq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </section>
          </article>
        </div>

        <section className="page-shell experience-detail-more" aria-labelledby="experience-detail-more-title">
          <p className="experience-page-eyebrow">MORE FROM THIS INTERNSHIP</p>
          <h2 id="experience-detail-more-title">Explore the other projects</h2>
          <div className="experience-detail-more-grid">
            {otherProjects.map((item) => (
              <Link key={item.slug} href={`/experience/intelligencex/${item.slug}`} className="experience-detail-more-card">
                <Image src={item.logo} alt="" width={item.logoWidth} height={item.logoHeight} sizes="(max-width: 767px) 160px, 200px" />
                <span>{item.category}</span>
                <strong>{item.name} <span aria-hidden="true">→</span></strong>
              </Link>
            ))}
          </div>
          <div className="experience-page-back-wrap">
            <Link className="button button-outline experience-page-back" href="/experience/intelligencex"><span aria-hidden="true">←</span> Back to IntelligenceX projects</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
