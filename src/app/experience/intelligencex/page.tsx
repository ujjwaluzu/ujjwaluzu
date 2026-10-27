import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SeoJsonLd } from "@/components/seo-json-ld";
import { intelligencexContent as content, intelligencexSources } from "@/lib/intelligencex-content";
import { intelligencexGuideSchema } from "@/lib/intelligencex-schema";
import { site } from "@/lib/site";

const pageUrl = `${site.domain}${content.path}`;
const socialImage = { url: `${site.domain}${content.socialImage}`, width: 1200, height: 630, alt: content.socialImageAlt };

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  keywords: null,
  openGraph: {
    title: content.title, description: content.description, url: pageUrl,
    siteName: site.name, locale: "en_US", type: "website", images: [socialImage],
  },
  twitter: { card: "summary_large_image", title: content.title, description: content.description, images: [socialImage] },
  alternates: { canonical: pageUrl },
};

function SourceLink({ id }: { id: keyof typeof intelligencexSources }) {
  const source = intelligencexSources[id];
  return <a className="guide-source-link" href={source.url}>{source.label} <span aria-hidden="true">↗</span></a>;
}

function GuideSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section className="guide-section page-shell" id={id} aria-labelledby={`${id}-title`}>
    <h2 id={`${id}-title`}>{title}</h2>{children}
  </section>;
}

export default function IntelligencexPage() {
  return <>
    <SeoJsonLd data={intelligencexGuideSchema()} />
    <SiteHeader />
    <main className="experience-page intelligencex-guide paper-texture">
      <header className="experience-page-hero">
        <div className="page-shell">
          <nav className="experience-detail-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/experience">Experience</Link><span aria-hidden="true">/</span>
            <span aria-current="page">IntelligenceX</span>
          </nav>
          <p className="experience-page-eyebrow">COMPANY GUIDE <span aria-hidden="true">/</span> DEVELOPER EXPERIENCE</p>
          <h1 className="display-heading guide-title">{content.heading}</h1>
          <p className="guide-byline">By <Link href="/">{content.author}</Link> · Updated <time dateTime={content.updated}>{content.dateLabel}</time></p>
          <p className="guide-disclosure">{content.disclosure}</p>
          <nav className="guide-toc" aria-label="On this page">
            <strong>In this guide</strong>
            <ul>{content.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.label}</a></li>)}</ul>
          </nav>
        </div>
      </header>

      <GuideSection id="company" title="What is IntelligenceX?">
        <div className="guide-company-intro">
          <div><p>{content.introduction}</p><SourceLink id="company" /><p>{content.identityNote}</p></div>
          <Image src="/assets/intelligencex-logo.svg" alt="IntelligenceX logo" width={1110} height={60} sizes="(max-width: 767px) 230px, 300px" />
        </div>
        <h3>Company at a glance</h3>
        <dl className="guide-facts">
          {content.atAGlance.map((fact) => <div key={fact.title}><dt>{fact.title}</dt><dd>{fact.text}<SourceLink id={fact.source} /></dd></div>)}
          <div><dt>My relationship</dt><dd>{content.relationship}<a className="guide-source-link" href="#my-work">My recorded contributions ↓</a></dd></div>
        </dl>
      </GuideSection>

      <GuideSection id="services" title="IntelligenceX services, explained">
        <div className="guide-service-grid">{content.services.map((service, index) => <article key={service.title} className={`guide-service guide-service--${index}`}>
          <h3>{service.title}</h3><p>{service.text}</p><SourceLink id={service.source} />
        </article>)}</div>
      </GuideSection>

      <GuideSection id="platforms" title="IntelligenceX platform directory">
        <p>{content.platformIntro}</p><SourceLink id="platforms" />
        <table className="guide-platform-table">
          <caption>Eight platforms in the official company directory</caption>
          <thead><tr><th scope="col">Platform / official overview</th><th scope="col">Published purpose</th></tr></thead>
          <tbody>{content.platforms.map((platform) => <tr key={platform.slug}>
            <th scope="row"><a href={platform.url}>{platform.name} <span aria-hidden="true">↗</span></a></th><td>{platform.purpose}</td>
          </tr>)}</tbody>
        </table>
      </GuideSection>

      <GuideSection id="my-work" title="My developer work at IntelligenceX">
        <p>{content.workIntro}</p><p className="guide-note">{content.ownershipNote}</p>
        <div className="guide-projects">{content.projects.map((project) => <article className="guide-project" key={project.slug}>
          <div className="guide-project-heading">
            <h3><Link href={`${content.path}/${project.slug}`}>{project.name}</Link></h3>
            <span>{project.category}</span>
          </div>
          <ul>{project.work.map((work) => <li key={work}>{work}</li>)}</ul>
          <div className="guide-project-actions">
          {project.detail.links.filter((source) => source.id.startsWith("agentReadiness")).map((source) => (
            <a className="guide-source-link" href={source.url} key={source.id}>
              {source.id === "agentReadinessAll" ? "View all-checks scan (60)" : "View content-profile scan (86)"} →
            </a>
          ))}
            <Link className="guide-source-link" href={`${content.path}/${project.slug}`}>Read my {project.name} case study →</Link>
          </div>
        </article>)}</div>
        <figure className="guide-evidence">
          <Image src="/assets/intelligencex-github-contributions.webp" alt="GitHub contribution graph from my IntelligenceX work account, showing activity in 2026." width={1106} height={270} sizes="(max-width: 767px) 100vw, 1100px" />
          <figcaption>{content.evidenceNote}</figcaption>
        </figure>
      </GuideSection>

      <GuideSection id="questions" title="Questions and answers">
        <div className="guide-questions">{content.questions.map((item) => <section key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></section>)}</div>
      </GuideSection>

      <GuideSection id="sources" title="Sources and review notes">
        <p>Official sources checked on <time dateTime={content.reviewed}>{content.dateLabel}</time>.</p>
        <ul className="guide-sources">{Object.values(intelligencexSources).map((source) => <li key={source.url}><a href={source.url}>{source.label}</a><span>{source.supports}</span></li>)}</ul>
        {content.reviewNotes.map((note) => <p key={note}>{note}</p>)}
        <Link className="guide-source-link" href="/experience">← Explore my work experience</Link>
      </GuideSection>
    </main>
    <SiteFooter />
  </>;
}
