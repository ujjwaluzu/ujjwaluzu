import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { GitHubMark } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Arrow, SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { ProjectCaseStudy } from "@/lib/case-studies";
import { homeContent } from "@/lib/home-content";

const assetRoot = "/assets";

const shotDims: Record<string, { w: number; h: number }> = {
  "auction.png": { w: 1907, h: 915 },
  "repoteam-listing-detail.png": { w: 1899, h: 916 },
  "repoteam-create-listing.png": { w: 1899, h: 911 },
  "repoteam-watchlist.png": { w: 1917, h: 912 },
};

const closingTones = ["open", "bidding", "closed", "winner"];

export function CommerceDetail({
  study,
  project,
}: {
  study: ProjectCaseStudy;
  project: (typeof homeContent.projects)[number];
}) {
  const cm = study.commerce!;
  const heroImage = `${assetRoot}/${project.image}`;
  const shots = study.screenshots.filter((s): s is Extract<typeof s, { kind: "image" }> => s.kind === "image");
  const mainShot = shots[0];
  const mainDims = mainShot ? shotDims[mainShot.image] ?? { w: 1907, h: 915 } : { w: 1907, h: 915 };

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
              </div>
            </div>
            <div className="case-hero-visual animate-rise" style={{ animationDelay: "320ms" }}>
              <figure className="case-frame">
                <Image
                  className="case-frame-img"
                  src={heroImage}
                  alt="Commerce auction application marketplace preview"
                  width={mainDims.w}
                  height={mainDims.h}
                  priority
                  sizes="(max-width: 767px) calc(100vw - 56px), 460px"
                />
                <figcaption className="case-frame-caption">auction marketplace preview</figcaption>
              </figure>
              <p className="case-hero-note" aria-hidden="true">list → bid → close ✓</p>
            </div>
          </div>
        </section>

        <section className="case-section case-status" id="context">
          <div className="page-shell">
            <Reveal className="status-strip">
              <p className="section-eyebrow">{cm.context.eyebrow}</p>
              <h2 className="display-heading status-heading">{cm.context.heading}</h2>
              <p className="status-text">{cm.context.text}</p>
              <span className="status-pill">{cm.context.tag}</span>
              <span className="status-stamp" aria-hidden="true">{cm.context.stamp}</span>
            </Reveal>
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
              <p className="section-eyebrow">{cm.workflow.eyebrow}</p>
              <h2 className="display-heading case-section-title">{cm.workflow.title}</h2>
              <p className="case-section-sub">{cm.workflow.subtitle}</p>
            </Reveal>
            <div className="core-workflow-grid">
              <Reveal className="wf-path-wrap">
                <ol className="wf-path">
                  {cm.workflow.path.map((step, index) => (
                    <li key={`workflow-path-${index}-${step}`} className="wf-step">
                      <span className="wf-step-num" aria-hidden="true">{index + 1}</span>
                      <span className="wf-step-label">{step}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
              <Reveal className="au-panel" delayMs={120}>
                <p className="au-panel-kicker" aria-hidden="true">checked, every time</p>
                <h3 className="au-panel-title">{cm.workflow.panelTitle}</h3>
                <p className="au-panel-text">{cm.workflow.panelText}</p>
                <ol className="au-panel-checks">
                  {cm.workflow.panelChecks.map((check, index) => (
                    <li key={check}>
                      <b aria-hidden="true">{index + 1}</b>
                      <span>{check}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="case-section case-features" id="features">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">WHAT I BUILT</p>
              <h2 className="display-heading case-section-title">The core features.</h2>
              <p className="case-section-sub">Eight compact areas cover the whole app - no production features promised yet.</p>
            </Reveal>
            <div className="feature-grid feature-grid--three">
              {study.featureGroups.map((group, index) => (
                <Reveal key={group.id} delayMs={index * 60}>
                  <article className={`feature-card feature-card--rt feature-card--${group.id}${group.featured ? " feature-card--featured" : ""}`}>
                    {group.featured && <span className="feature-star">core logic</span>}
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

        <section className="case-section case-detail-cards paper-texture" id="feature-details">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{cm.details.eyebrow}</p>
              <h2 className="display-heading case-section-title">{cm.details.title}</h2>
              <p className="case-section-sub">{cm.details.subtitle}</p>
            </Reveal>
            <div className="au-detail-grid">
              {cm.details.cards.map((card, index) => (
                <Reveal key={card.eyebrow} delayMs={index * 40}>
                  <article className="au-detail-card">
                    <p className="au-detail-eyebrow">{card.eyebrow}</p>
                    <h3 className="au-detail-title">{card.title}</h3>
                    <p className="au-detail-text">{card.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className="admin-strip" delayMs={80}>
              <p className="admin-strip-title" aria-hidden="true">ADMIN CONTROL</p>
              <div className="admin-strip-chips">
                {cm.details.adminChips.map((chip) => <span key={chip} className="admin-strip-chip">{chip}</span>)}
              </div>
              <p className="admin-strip-text">{cm.details.adminText}</p>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-bidding" id="bidding-logic">
          <div className="page-shell">
            <Reveal className="spotlight spotlight--bid" delayMs={60}>
              <div className="spotlight-copy">
                <p className="section-eyebrow spotlight-eyebrow">{cm.bidding.eyebrow}</p>
                <h3 className="display-heading spotlight-title">{cm.bidding.title}</h3>
                <p className="spotlight-text">{cm.bidding.text}</p>
                <ul className="bid-rules">
                  {cm.bidding.rules.map((rule, index) => (
                    <li key={rule}>
                      <span aria-hidden="true">✓</span>
                      {rule}
                      {index === 2 && <b aria-hidden="true">✕</b>}
                    </li>
                  ))}
                </ul>
                <p className="spotlight-note" aria-hidden="true">{cm.bidding.note}</p>
              </div>
              <div className="bid-ticket" aria-hidden="true">
                <span className="bid-ticket-tag">LIVE LOT</span>
                <span className="bid-ticket-title">Current price</span>
                <strong className="bid-ticket-amount">$1,250</strong>
                <span className="bid-ticket-label">your bid must beat this</span>
                <span className="bid-ticket-stamp">Place bid ✓</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-closing paper-texture" id="closing">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{cm.closing.eyebrow}</p>
              <h2 className="display-heading case-section-title">{cm.closing.title}</h2>
              <p className="case-section-sub">{cm.closing.text}</p>
            </Reveal>
            <Reveal className="rt-progress closing-progress" delayMs={80}>
              {cm.closing.states.map((state, index) => (
                <Fragment key={state}>
                  <span className={`rt-progress-step closing-state closing-state--${closingTones[index]}`}>
                    <b aria-hidden="true">{index + 1}</b>
                    {state}
                  </span>
                  {index < cm.closing.states.length - 1 && <span className="rt-progress-arrow" aria-hidden="true">→</span>}
                </Fragment>
              ))}
            </Reveal>
            <Reveal className="closing-note" delayMs={140}>
              <span aria-hidden="true">✎</span> {cm.closing.note}
            </Reveal>
          </div>
        </section>

        <section className="case-section case-stack" id="under-the-hood">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">UNDER THE HOOD</p>
              <h2 className="display-heading case-section-title">How it&apos;s built.</h2>
              <p className="case-section-sub">A server-rendered Django app on SQLite, styled with plain HTML and CSS.</p>
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
          </div>
        </section>

        <section className="case-section case-model paper-texture" id="data-model">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{cm.dataModel.eyebrow}</p>
              <h2 className="display-heading case-section-title">{cm.dataModel.title}</h2>
              <p className="case-section-sub">{cm.dataModel.text}</p>
            </Reveal>
            <div className="cm-model-grid">
              {cm.dataModel.relations.map((rel, index) => (
                <Reveal key={rel.caption} delayMs={index * 50}>
                  <article className="cm-rel">
                    <div className="cm-rel-nodes">
                      {rel.nodes.map((node, nodeIndex) => (
                        <Fragment key={node}>
                          <span className="cm-rel-node">{node}</span>
                          {nodeIndex < rel.nodes.length - 1 && <span className="cm-rel-edge" aria-hidden="true">↔</span>}
                        </Fragment>
                      ))}
                    </div>
                    <p className="cm-rel-caption">{rel.caption}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-relational" id="relational-data">
          <div className="page-shell">
            <Reveal className="rt-server" delayMs={60}>
              <div>
                <p className="section-eyebrow">{cm.relational.eyebrow}</p>
                <h3 className="display-heading rt-server-title">{cm.relational.title}</h3>
              </div>
              <div className="rt-server-chips">
                {cm.relational.chips.map((chip) => <span key={chip} className="rt-server-chip">{chip}</span>)}
              </div>
              <p className="rt-server-text">{cm.relational.text}</p>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-forms paper-texture" id="forms">
          <div className="page-shell">
            <Reveal className="rt-server" delayMs={60}>
              <div>
                <p className="section-eyebrow">{cm.forms.eyebrow}</p>
                <h3 className="display-heading rt-server-title">{cm.forms.title}</h3>
              </div>
              <div className="rt-server-chips">
                {cm.forms.chips.map((chip) => <span key={chip} className="rt-server-chip">{chip}</span>)}
              </div>
              <p className="rt-server-text">{cm.forms.text}</p>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-learning" id="learning">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{cm.learning.objectives.eyebrow}</p>
              <h2 className="display-heading case-section-title">{cm.learning.objectives.title}</h2>
              <p className="case-section-sub">Each objective from the project brief, matched by what got built.</p>
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

        <section className="case-section case-outcomes paper-texture" id="outcomes">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{cm.learning.outcomes.eyebrow}</p>
              <h2 className="display-heading case-section-title">{cm.learning.outcomes.title}</h2>
              <p className="case-section-sub">What the build left behind - the skills that rest on the code, not the other way around.</p>
            </Reveal>
            <ol className="rt-steps outcomes-steps">
              {cm.outcomes.map((outcome, index) => (
                <Reveal key={outcome} delayMs={index * 50} className="rt-step">
                  <b aria-hidden="true">{index + 1}</b>
                  <span>{outcome}</span>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="case-section case-gallery" id="screenshots">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">PROJECT SCREENSHOTS</p>
              <h2 className="display-heading case-section-title">See it in action.</h2>
              <p className="case-section-sub">A look at the auction marketplace flows.</p>
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
                  const dims = shotDims[shot.image] ?? { w: 1907, h: 915 };
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
              <p className="section-eyebrow">{cm.structure.eyebrow}</p>
              <h2 className="display-heading case-section-title">{cm.structure.title}</h2>
              <p className="case-section-sub">{cm.structure.note}</p>
            </Reveal>
            <Reveal className="rt-chain" delayMs={60}>
              {cm.structure.chain.map((item, index) => (
                <Fragment key={`commerce-${index}-${item}`}>
                  <span className="rt-chain-step">{item}</span>
                  {index < cm.structure.chain.length - 1 && <span className="rt-chain-arrow" aria-hidden="true">→</span>}
                </Fragment>
              ))}
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
              <h2>Want to see the code?</h2>
              <p>From Django models to the bidding rules - the whole marketplace is on GitHub.</p>
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
