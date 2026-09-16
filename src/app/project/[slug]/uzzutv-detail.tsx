import Image from "next/image";
import Link from "next/link";

import { GitHubMark } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Arrow, SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { ProjectCaseStudy } from "@/lib/case-studies";
import { homeContent } from "@/lib/home-content";

const assetRoot = "/assets";

export function UzzutvDetail({
  study,
  project,
}: {
  study: ProjectCaseStudy;
  project: (typeof homeContent.projects)[number];
}) {
  const heroImage = `${assetRoot}/${project.image}`;
  const watchParty = study.watchParty!;
  const aniuzu = study.aniuzu!;
  const continueWatching = study.continueWatching!;
  const journey = study.journey!;

  return (
    <>
      <SiteHeader />
      <main className="case-page">
        <section className="case-hero paper-texture" id="top">
          <div className="page-shell case-hero-inner">
            <div className="case-hero-copy">
              <span className="project-badge project-badge--warm animate-rise" style={{ animationDelay: "60ms" }}>{project.category}</span>
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
              </div>
            </div>
            <div className="case-hero-visual animate-rise" style={{ animationDelay: "320ms" }}>
              <figure className="case-frame">
                <Image
                  className="case-frame-img"
                  src={heroImage}
                  alt="UzzUTV homepage showing movies and TV series to discover"
                  width={1904}
                  height={911}
                  priority
                  sizes="(max-width: 767px) calc(100vw - 56px), 460px"
                />
                <figcaption className="case-frame-caption">streaming platform preview</figcaption>
              </figure>
              <p className="case-hero-note" aria-hidden="true">watch parties &amp; anime inside ✓</p>
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

        <section className="case-section case-features paper-texture" id="features">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">WHAT I BUILT</p>
              <h2 className="display-heading case-section-title">The features.</h2>
              <p className="case-section-sub">Four rough groups: discovery, watching, the social layer, and the anime catalogue.</p>
            </Reveal>
            <div className="feature-grid">
              {study.featureGroups.map((group, index) => (
                <Reveal key={group.id} delayMs={index * 80}>
                  <article className={`feature-card feature-card--${group.id}`}>
                    <span className="feature-num">{group.index}</span>
                    <h3 className="feature-card-title">{group.title}</h3>
                    <ul className="feature-card-list">
                      {group.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-stack" id="technologies">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">UNDER THE HOOD</p>
              <h2 className="display-heading case-section-title">How it&apos;s built.</h2>
              <p className="case-section-sub">A classic Django stack with a couple of modern twists for auth and realtime.</p>
            </Reveal>
            <div className="stack-breakdown">
              {study.stack.map((entry, index) => (
                <Reveal key={entry.label} delayMs={index * 40} className="stack-entry">
                  <span className="stack-label">{entry.label}</span>
                  <div className="stack-pills">
                    {entry.value.map((pill) => <span key={pill} className="stack-pill">{pill}</span>)}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-highlights" id="highlights">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">ENGINEERING HIGHLIGHTS</p>
              <h2 className="display-heading case-section-title">Behind the scenes.</h2>
              <p className="case-section-sub">The interesting decisions, not just the technology list.</p>
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

        <section className="case-section case-spotlights paper-texture" id="watch-party">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">FEATURE SPOTLIGHTS</p>
              <h2 className="display-heading case-section-title">Two features worth the detail.</h2>
            </Reveal>

            <Reveal className="spotlight" delayMs={60}>
              <div className="spotlight-copy">
                <h3 className="display-heading spotlight-title">{watchParty.title}</h3>
                <p className="spotlight-text">{watchParty.text}</p>
                <p className="spotlight-call-title">{watchParty.callTitle}</p>
                <div className="spotlight-chips">
                  {watchParty.callControls.map((control) => <span key={control} className="spotlight-chip">{control}</span>)}
                </div>
                <p className="spotlight-note" aria-hidden="true">{watchParty.note}</p>
              </div>
              <div className="spotlight-call-mock" aria-hidden="true">
                <div className="call-screen">
                  <span className="call-camera" />
                  <b className="call-play">▶</b>
                  <span className="call-label">HOST</span>
                </div>
                <div className="call-controls">
                  <i>✕</i>
                  <i className="is-accept">✓</i>
                  <i>◎</i>
                  <i>●</i>
                  <i>—</i>
                </div>
              </div>
            </Reveal>

            <Reveal className="spotlight-anime" delayMs={140}>
              <div className="spotlight-anime-head">
                <p className="spotlight-anime-label" aria-hidden="true">ANIME</p>
                <h3 className="display-heading spotlight-anime-title">{aniuzu.title}</h3>
              </div>
              <p className="spotlight-anime-text">{aniuzu.text}</p>
              <ul className="spotlight-anime-chips">
                {aniuzu.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-continue" id="continue-watching">
          <div className="page-shell case-split">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{continueWatching.eyebrow}</p>
              <h2 className="display-heading case-section-title">{continueWatching.title}</h2>
            </Reveal>
            <Reveal className="continue-body" delayMs={120}>
              <p className="case-idea-text">{continueWatching.text}</p>
              <div className="continue-fields">
                {continueWatching.fields.map((field) => <span key={field} className="continue-chip">{field}</span>)}
              </div>
              <div className="continue-bar-wrap">
                <div className="continue-bar"><i /></div>
                <span className="continue-bar-label">where you left off</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-journey paper-texture" id="journey">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">PROJECT JOURNEY</p>
              <h2 className="display-heading case-section-title">Idea to learning.</h2>
              <p className="case-section-sub">How UzzUTV reads as a portfolio piece.</p>
            </Reveal>
            <div className="journey">
              {journey.map((item, index) => (
                <Reveal key={item.step} delayMs={index * 90} className={`journey-step${index < journey.length - 1 ? " journey-step--linked" : ""}`}>
                  {index < journey.length - 1 && <span className="journey-arrow" aria-hidden="true">→</span>}
                  <b>{item.step}</b>
                  <p>{item.text}</p>
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
              <p className="case-section-sub">A look at the discovery experience, with room for more screenshots.</p>
            </Reveal>
            <div className="gallery">
              <Reveal className="gallery-main">
                <figure className="gallery-item gallery-item--image">
                  <Image
                    src={heroImage}
                    alt={study.screenshots[0]?.kind === "image" ? study.screenshots[0].alt : "UzzUTV interface screenshot"}
                    width={1904}
                    height={911}
                    sizes="(max-width: 767px) 100vw, 720px"
                  />
                  <figcaption className="gallery-label">{study.screenshots[0]?.kind === "image" ? study.screenshots[0].label : "Home / discovery"}</figcaption>
                </figure>
              </Reveal>
              <div className="gallery-side">
                {study.screenshots.slice(1).map((shot, index) => (
                  <Reveal key={shot.label} delayMs={index * 60} className="gallery-side-item">
                    {shot.kind === "image" ? (
                      <figure className="gallery-item gallery-item--image">
                        <Image src={`${assetRoot}/${shot.image}`} alt={shot.alt} width={1904} height={911} sizes="(max-width: 767px) 100vw, 320px" />
                        <figcaption className="gallery-label">{shot.label}</figcaption>
                      </figure>
                    ) : (
                      <div className="gallery-item gallery-placeholder">
                        <span className="gallery-ph" aria-hidden="true">▭</span>
                        <b>{shot.label}</b>
                        <i>screenshot placeholder</i>
                      </div>
                    )}
                  </Reveal>
                ))}
              </div>
            </div>
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
              <h2>Want to see the code?</h2>
              <p>Explore the implementation, architecture, and source code.</p>
              <a
                className="view-github view-github--lg"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} source code on GitHub`}
              >
                <GitHubMark /> View {project.name} on GitHub <Arrow />
              </a>
            </Reveal>

            <Reveal className="case-back-wrap" delayMs={100}>
              <Link className="case-back" href="/project">
                <span aria-hidden="true">←</span> Back to all projects
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}