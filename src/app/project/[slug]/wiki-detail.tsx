import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { GitHubMark } from "@/components/icons";
import { RelatedVideoLink } from "@/components/related-video-link";
import { Reveal } from "@/components/reveal";
import { Arrow, SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { ProjectCaseStudy } from "@/lib/case-studies";
import { homeContent } from "@/lib/home-content";
import { allVideos } from "@/lib/more-content";

const assetRoot = "/assets";

const shotDims: Record<string, { w: number; h: number }> = {
  "wiki.webp": { w: 1920, h: 909 },
  "wiki-create.webp": { w: 1920, h: 910 },
  "wiki-search.webp": { w: 1157, h: 590 },
};

export function WikiDetail({
  study,
  project,
}: {
  study: ProjectCaseStudy;
  project: (typeof homeContent.projects)[number];
}) {
  const wk = study.wiki!;
  const relatedVideo = allVideos.find((video) => video.projectSlug === project.slug);
  const heroImage = `${assetRoot}/${project.image}`;
  const shots = study.screenshots.filter((s): s is Extract<typeof s, { kind: "image" }> => s.kind === "image");
  const mainShot = shots[0];
  const mainDims = mainShot ? shotDims[mainShot.image] ?? { w: 1920, h: 909 } : { w: 1920, h: 909 };

  return (
    <>
      <SiteHeader />
      <main className="case-page">
        <section className="case-hero paper-texture" id="top">
          <div className="page-shell case-hero-inner">
            <div className="case-hero-copy">
              <span className="project-badge animate-rise" style={{ animationDelay: "60ms" }}>{project.category}</span>
              <h1 className="display-heading case-hero-title animate-rise" style={{ animationDelay: "140ms" }}>{project.name}</h1>
              <p className="case-hero-desc animate-rise" style={{ animationDelay: "220ms" }}>{project.description}</p>
              <ul className="case-hero-techs animate-rise" style={{ animationDelay: "300ms" }}>
                {study.heroTechs.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <div className="case-hero-actions animate-rise" style={{ animationDelay: "380ms" }}>
                <a
                  className="view-github"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} source code on GitHub`}
                >
                  <GitHubMark /> View on GitHub <Arrow />
                </a>
                <a
                  className="view-outline"
                  href={wk.screencastHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch the ${project.name} screencast`}
                >
                  Watch the screencast <Arrow />
                </a>
              </div>
            </div>
            <div className="case-hero-visual animate-rise" style={{ animationDelay: "320ms" }}>
              <figure className="case-frame">
                <Image
                  className="case-frame-img"
                  src={heroImage}
                  alt="Wiki encyclopedia interface built with Django"
                  width={mainDims.w}
                  height={mainDims.h}
                  priority
                  sizes="(max-width: 767px) calc(100vw - 56px), 460px"
                />
                <figcaption className="case-frame-caption">a markdown encyclopedia</figcaption>
              </figure>
              <p className="case-hero-note" aria-hidden="true">search → read → create ✓</p>
            </div>
          </div>
        </section>

        <section className="case-section case-idea" id="idea">
          <div className="page-shell case-split">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{study.idea.eyebrow}</p>
              <h2 className="display-heading case-section-title">{study.idea.heading}</h2>
            </Reveal>
            <Reveal className="case-idea-body" delayMs={120}>
              {study.idea.paragraphs.map((paragraph) => <p key={paragraph} className="case-idea-text">{paragraph}</p>)}
              <p className="case-idea-note" aria-hidden="true">{study.idea.note}</p>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-workflow paper-texture" id="how-it-works">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{wk.flows.eyebrow}</p>
              <h2 className="display-heading case-section-title">{wk.flows.title}</h2>
              <p className="case-section-sub">{wk.flows.subtitle}</p>
            </Reveal>
            <div className="wk-flow-grid">
              {wk.flows.flows.map((flow, index) => (
                <Reveal key={flow.label} delayMs={index * 80} className="wk-flow">
                  <span className="wk-flow-label">{flow.label}</span>
                  <ol className="wf-path wk-flow-path">
                    {flow.steps.map((step, stepIndex) => (
                      <li key={`${flow.label}-${stepIndex}-${step}`} className="wf-step">
                        <span className="wf-step-num" aria-hidden="true">{stepIndex + 1}</span>
                        <span className="wf-step-label">{step}</span>
                      </li>
                    ))}
                  </ol>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-features" id="features">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">WHAT I BUILT</p>
              <h2 className="display-heading case-section-title">The core features.</h2>
              <p className="case-section-sub">Seven focused features cover the whole encyclopedia - nothing claimed that wasn&apos;t built.</p>
            </Reveal>
            <div className="feature-grid feature-grid--three">
              {study.featureGroups.map((group, index) => (
                <Reveal key={group.id} delayMs={index * 60}>
                  <article className={`feature-card feature-card--rt feature-card--${group.id}${group.featured ? " feature-card--featured" : ""}`}>
                    {group.featured && <span className="feature-star">in the brief</span>}
                    <span className="feature-num">{group.index}</span>
                    <h3 className="feature-card-title">{group.title}</h3>
                    <ul className="feature-card-list">
                      {group.items.map((item, itemIndex) => <li key={`${group.id}-${itemIndex}-${item}`}>{item}</li>)}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-search paper-texture" id="search">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{wk.search.eyebrow}</p>
              <h2 className="display-heading case-section-title">{wk.search.title}</h2>
              <p className="case-section-sub">{wk.search.text}</p>
            </Reveal>
            <Reveal className="wk-query" delayMs={60}>
              <span className="wk-query-bar">
                <span className="wk-query-icon" aria-hidden="true">⌕</span>
                <span className="wk-query-text">{wk.search.query}</span>
                <span className="wk-query-caret" aria-hidden="true" />
              </span>
              <span className="wk-query-arrow" aria-hidden="true">→</span>
              <span className="wk-query-result">{wk.search.result}</span>
            </Reveal>
            <div className="wk-search-grid">
              <Reveal className="wk-search-card" delayMs={100}>
                <b className="wk-search-chip">{wk.search.exact.label}</b>
                <p className="wk-search-text">{wk.search.exact.text}</p>
              </Reveal>
              <Reveal className="wk-search-card" delayMs={160}>
                <b className="wk-search-chip wk-search-chip--partial">{wk.search.partial.label}</b>
                <p className="wk-search-text">{wk.search.partial.text}</p>
              </Reveal>
            </div>
            <Reveal className="wk-search-note" delayMs={120}>
              ← <b>{wk.search.query}</b> {wk.search.note}
            </Reveal>
          </div>
        </section>

        <section className="case-section case-markdown" id="markdown">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{wk.markdown.eyebrow}</p>
              <h2 className="display-heading case-section-title">{wk.markdown.title}</h2>
              <p className="case-section-sub">{wk.markdown.text}</p>
            </Reveal>
            <div className="wk-md-wrap">
              <Reveal className="wk-md-code" delayMs={80}>
                <span className="wk-md-file">entry.md</span>
                {wk.markdown.sample.md.map((line, index) => (
                  <pre key={`${line}-${index}`}><code>{line}</code></pre>
                ))}
              </Reveal>
              <span className="wk-md-arrow" aria-hidden="true">{wk.markdown.sample.arrow}</span>
              <Reveal className="wk-md-code" delayMs={140}>
                <span className="wk-md-file">rendered.html</span>
                {wk.markdown.sample.html.map((line, index) => (
                  <pre key={`${line}-${index}`}><code>{line}</code></pre>
                ))}
              </Reveal>
            </div>
            <Reveal className="rt-chain" delayMs={120}>
              {wk.markdown.chain.map((item, index) => (
                <Fragment key={`markdown-${index}-${item}`}>
                  <span className="rt-chain-step">{item}</span>
                  {index < wk.markdown.chain.length - 1 && <span className="rt-chain-arrow" aria-hidden="true">→</span>}
                </Fragment>
              ))}
            </Reveal>
            <Reveal className="wk-md-note" delayMs={180}>
              <span aria-hidden="true">✎</span> {wk.markdown.note}
            </Reveal>
          </div>
        </section>

        <section className="case-section case-edit paper-texture" id="edit">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{wk.edit.eyebrow}</p>
              <h2 className="display-heading case-section-title">{wk.edit.title}</h2>
              <p className="case-section-sub">{wk.edit.subtitle}</p>
            </Reveal>
            <div className="wk-edit-grid">
              <Reveal className="wk-edit-col" delayMs={80}>
                <span className="wk-edit-chip">{wk.edit.create.label}</span>
                <h3 className="wk-edit-title">{wk.edit.create.title}</h3>
                <ol className="wk-steps">
                  {wk.edit.create.steps.map((step, index) => (
                    <li key={`read-${index}-${step}`}>
                      <b aria-hidden="true">{index + 1}</b>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
              <Reveal className="wk-edit-col" delayMs={140}>
                <span className="wk-edit-chip wk-edit-chip--blue">{wk.edit.existing.label}</span>
                <h3 className="wk-edit-title">{wk.edit.existing.title}</h3>
                <ol className="wk-steps">
                  {wk.edit.existing.steps.map((step, index) => (
                    <li key={`create-${index}-${step}`}>
                      <b aria-hidden="true">{index + 1}</b>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="case-section case-edges" id="edges">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{wk.edges.eyebrow}</p>
              <h2 className="display-heading case-section-title">{wk.edges.title}</h2>
              <p className="case-section-sub">{wk.edges.subtitle}</p>
            </Reveal>
            <div className="wk-edge-grid">
              {wk.edges.cases.map((edge, index) => (
                <Reveal key={edge.label} delayMs={index * 60}>
                  <article className="wk-edge-card">
                    <p className="wk-edge-eyebrow">{edge.label}</p>
                    <h3 className="wk-edge-title">{edge.title}</h3>
                    <p className="wk-edge-text">{edge.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-stack paper-texture" id="under-the-hood">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">UNDER THE HOOD</p>
              <h2 className="display-heading case-section-title">How it&apos;s built.</h2>
              <p className="case-section-sub">{wk.layers.subtitle}</p>
            </Reveal>
            <div className="stack-breakdown">
              {study.stack.map((entry, index) => (
                <Reveal key={entry.label} delayMs={index * 40} className="stack-entry">
                  <span className="stack-label">{entry.label}</span>
                  <div className="stack-pills">
                    {entry.value.map((pill, pillIndex) => <span key={`${entry.label}-${pillIndex}-${pill}`} className="stack-pill">{pill}</span>)}
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="wk-layers">
              {wk.layers.layers.map((layer, index) => (
                <Reveal key={layer.label} delayMs={index * 40} className="wk-layer">
                  <b className="wk-layer-label">{layer.label}</b>
                  <span className="wk-layer-text">{layer.text}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-model" id="file-based">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{wk.fileChain.eyebrow}</p>
              <h2 className="display-heading case-section-title">{wk.fileChain.title}</h2>
              <p className="case-section-sub">{wk.fileChain.text}</p>
            </Reveal>
            <Reveal className="wk-model-wrap" delayMs={60}>
              <ol className="model-chain">
                {wk.fileChain.chain.map((node) => (
                  <li key={node} className="model-node">{node}</li>
                ))}
              </ol>
              <p className="wk-model-note"><span aria-hidden="true">📁</span> {wk.fileChain.note}</p>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-why paper-texture" id="why-django">
          <div className="page-shell">
            <Reveal className="rt-server" delayMs={60}>
              <div>
                <p className="section-eyebrow">{wk.why.eyebrow}</p>
                <h3 className="display-heading rt-server-title">{wk.why.title}</h3>
              </div>
              <div className="rt-server-chips">
                {wk.why.chips.map((chip) => <span key={chip} className="rt-server-chip">{chip}</span>)}
              </div>
              <p className="rt-server-text">{wk.why.text}</p>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-learning" id="learning">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{wk.learning.eyebrow}</p>
              <h2 className="display-heading case-section-title">{wk.learning.title}</h2>
              <p className="case-section-sub">{wk.learning.subtitle}</p>
            </Reveal>
            <div className="highlight-grid">
              {study.highlights.map((highlight, index) => (
                <Reveal key={highlight.heading} delayMs={index * 40}>
                  <article className="highlight-item">
                    <strong>{highlight.heading}</strong>
                    {highlight.text}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-gallery" id="screenshots">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">PROJECT SCREENSHOTS</p>
              <h2 className="display-heading case-section-title">See it in action.</h2>
              <p className="case-section-sub">A look at the encyclopedia screens that are available.</p>
            </Reveal>
            <div className="gallery">
              <Reveal className="gallery-main">
                {mainShot && (
                  <figure className="gallery-item gallery-item--image">
                    <Image
                      src={heroImage}
                      alt={mainShot.alt}
                      width={mainDims.w}
                      height={mainDims.h}
                      sizes="(max-width: 767px) 100vw, 720px"
                    />
                    <figcaption className="gallery-label">{mainShot.label}</figcaption>
                  </figure>
                )}
              </Reveal>
              <div className="gallery-side">
                {shots.slice(1).map((shot, index) => {
                  const dims = shotDims[shot.image] ?? { w: 1920, h: 909 };
                  return (
                    <Reveal key={shot.label} delayMs={index * 60} className="gallery-side-item">
                      <figure className="gallery-item gallery-item--image">
                        <Image src={`${assetRoot}/${shot.image}`} alt={shot.alt} width={dims.w} height={dims.h} sizes="(max-width: 767px) 100vw, 320px" />
                        <figcaption className="gallery-label">{shot.label}</figcaption>
                      </figure>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="case-section case-structure paper-texture" id="structure">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{wk.structure.eyebrow}</p>
              <h2 className="display-heading case-section-title">{wk.structure.title}</h2>
              <p className="case-section-sub">The documented project layout - a classic Django-simple structure.</p>
            </Reveal>
            <div className="wk-files">
              {wk.structure.files.map((file, index) => (
                <Reveal key={file.path} delayMs={index * 40} className="wk-file">
                  <code className="wk-file-path">{file.path}</code>
                  <span className="wk-file-desc">{file.desc}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-status" id="context">
          <div className="page-shell">
            <Reveal className="status-strip">
              <p className="section-eyebrow">{wk.context.eyebrow}</p>
              <h2 className="display-heading status-heading">{wk.context.heading}</h2>
              <p className="status-text">{wk.context.text}</p>
              <span className="status-pill">{wk.context.tag}</span>
              <span className="status-stamp" aria-hidden="true">{wk.context.stamp}</span>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-closing" id="details">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">PROJECT DETAILS</p>
              <h2 className="display-heading case-section-title">The essentials.</h2>
            </Reveal>
            <Reveal className="case-details" delayMs={60}>
              {study.details.map((detail) => (
                <div key={detail.label} className="case-detail-item">
                  <b>{detail.label}</b>
                  <span>{detail.value}</span>
                </div>
              ))}
            </Reveal>

            <Reveal className="case-cta" delayMs={80}>
              <h2>{wk.cta.title}</h2>
              <p>{wk.cta.text}</p>
              <div className="case-cta-actions">
                <a
                  className="view-github view-github--lg"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} source code on GitHub`}
                >
                  <GitHubMark /> View {project.name} on GitHub <Arrow />
                </a>
                <a
                  className="view-outline view-outline--lg"
                  href={wk.screencastHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch the ${project.name} screencast`}
                >
                  Watch the screencast <Arrow />
                </a>
              </div>
            </Reveal>

            <Reveal className="case-back-wrap" delayMs={100}>
              <Link className="case-back" href="/project">
                <span aria-hidden="true">←</span> Back to all projects
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      {relatedVideo && <RelatedVideoLink title={relatedVideo.title ?? "Wiki video"} videoId={relatedVideo.id} projectName={project.name} />}
      <SiteFooter />
    </>
  );
}
