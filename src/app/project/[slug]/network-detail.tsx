import Link from "next/link";
import { Fragment } from "react";

import { GitHubMark } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Arrow, SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { ProjectCaseStudy } from "@/lib/case-studies";
import { homeContent } from "@/lib/home-content";

export function NetworkDetail({
  study,
  project,
}: {
  study: ProjectCaseStudy;
  project: (typeof homeContent.projects)[number];
}) {
  const net = study.network!;
  const placeholders = study.screenshots.filter((s): s is Extract<typeof s, { kind: "placeholder" }> => s.kind === "placeholder");
  const mainPlaceholder = placeholders[0];
  const sidePlaceholders = placeholders.slice(1);

  return (
    <>
      <SiteHeader />
      <main className="case-page">
        <section className="case-hero paper-texture" id="top">
          <div className="page-shell case-hero-inner">
            <div className="case-hero-copy">
              <span className="project-badge animate-rise" style={{ animationDelay: "60ms" }}>{project.category}</span>
              <h1 className="display-heading case-hero-title animate-rise" style={{ animationDelay: "140ms" }}>{project.name}</h1>
              <p className="case-hero-desc animate-rise" style={{ animationDelay: "220ms" }}>{net.heroIntro}</p>
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
              <div className="nt-mock" aria-hidden="true">
                <div className="nt-mock-head">
                  <span className="nt-mock-brand">network</span>
                  <span className="nt-mock-status">all posts ← feed</span>
                </div>
                <div className="nt-mock-compose">
                  <span className="nt-mock-compose-ring" aria-hidden="true">+</span>
                  <span className="nt-mock-compose-text">compose a new post…</span>
                </div>
                <div className="nt-mock-post">
                  <span className="nt-mock-avatar">A</span>
                  <span className="nt-mock-postline"><b>@alice</b> built a network with django</span>
                  <span className="nt-mock-like">♡</span>
                </div>
                <div className="nt-mock-post nt-mock-post--featured">
                  <span className="nt-mock-avatar nt-mock-avatar--alt">B</span>
                  <span className="nt-mock-postline"><b>@bob</b> following → their own feed</span>
                  <span className="nt-mock-like">♡</span>
                </div>
                <div className="nt-mock-post">
                  <span className="nt-mock-avatar">C</span>
                  <span className="nt-mock-postline"><b>@cara</b> like. unlike. update.</span>
                  <span className="nt-mock-like">♥</span>
                </div>
              </div>
              <p className="nt-note">posts, profiles, following, likes.</p>
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
              <div className="nt-idea-combo" aria-label="Network combines users, posts, following, likes, AJAX, and pagination">
                {net.ideaCombo.map((item, index) => (
                  <Fragment key={item}>
                    {index > 0 && <span className="nt-idea-plus" aria-hidden="true">+</span>}
                    <span className="nt-idea-chip">{item}</span>
                  </Fragment>
                ))}
              </div>
              <p className="case-idea-note" aria-hidden="true">{study.idea.note}</p>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-challenge paper-texture" id="social-graph">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{net.socialGraph.eyebrow}</p>
              <h2 className="display-heading case-section-title">{net.socialGraph.title}</h2>
              <p className="case-section-sub">{net.socialGraph.text}</p>
            </Reveal>
            <div className="wk-flow-grid mp-compare-grid">
              {net.socialGraph.flows.map((flow, index) => (
                <Reveal key={flow.label} delayMs={index * 80} className={`wk-flow${index === net.socialGraph.flows.length - 1 ? " nt-flow-alt" : ""}`}>
                  <span className="wk-flow-label">{flow.label}</span>
                  <ol className="wf-path wk-flow-path">
                    {flow.steps.map((step, stepIndex) => (
                      <li key={step} className="wf-step">
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
              <h2 className="display-heading case-section-title">Seven core flows, one connected app.</h2>
              <p className="case-section-sub">Every feature the network needs — built around the documented spec.</p>
            </Reveal>
            <div className="feature-grid feature-grid--three">
              {study.featureGroups.map((group, index) => (
                <Reveal key={group.id} delayMs={index * 60}>
                  <article className={`feature-card feature-card--rt feature-card--${group.id}${group.featured ? " feature-card--featured" : ""}`}>
                    {group.featured && <span className="feature-star">the AJAX core</span>}
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

        <section className="case-section case-ajax paper-texture" id="ajax">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{net.ajax.eyebrow}</p>
              <h2 className="display-heading case-section-title">{net.ajax.title}</h2>
              <p className="case-section-sub">{net.ajax.text}</p>
            </Reveal>
            <Reveal className="rt-server nt-ajax-support" delayMs={60}>
              <h3 className="display-heading rt-server-title">AJAX-driven interactions</h3>
              <div className="rt-server-chips">
                {net.ajax.interactions.map((interaction) => <span key={interaction} className="rt-server-chip">{interaction}</span>)}
              </div>
              <p className="rt-server-text">These are the actions that update the page in place — no full browser refresh.</p>
            </Reveal>
            <Reveal className="rt-chain" delayMs={80}>
              {net.ajax.chain.map((item, index) => (
                <Fragment key={item}>
                  <span className="rt-chain-step rt-chain-step--alt">{item}</span>
                  {index < net.ajax.chain.length - 1 && <span className="rt-chain-arrow" aria-hidden="true">→</span>}
                </Fragment>
              ))}
            </Reveal>
            <Reveal className="wk-md-note nt-note-need" delayMs={120}>
              <span aria-hidden="true">→</span> {net.ajax.note}
            </Reveal>
          </div>
        </section>

        <section className="case-section case-posts" id="posts">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{net.posts.eyebrow}</p>
              <h2 className="display-heading case-section-title">{net.posts.title}</h2>
              <p className="case-section-sub">{net.posts.text}</p>
            </Reveal>
            <Reveal className="nt-post-loop" delayMs={60}>
              <ol className="wf-path wk-flow-path nt-post-loop-path">
                {net.posts.chain.map((step, index) => (
                  <li key={step} className="wf-step">
                    <span className="wf-step-num" aria-hidden="true">{index + 1}</span>
                    <span className="wf-step-label">{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-profiles paper-texture" id="profiles">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{net.profiles.eyebrow}</p>
              <h2 className="display-heading case-section-title">{net.profiles.title}</h2>
              <p className="case-section-sub">{net.profiles.text}</p>
            </Reveal>
            <div className="nt-profile-wrap">
              <Reveal className="nt-profile" delayMs={60}>
                <div className="nt-profile-cover" aria-hidden="true" />
                <div className="nt-profile-body">
                  <span className="nt-profile-avatar" aria-hidden="true">@</span>
                  <span className="nt-profile-name">@user</span>
                  <span className="nt-profile-meta">posts · followers · following</span>
                  <div className="nt-profile-stats" aria-hidden="true">
                    {net.profiles.items.map((item) => <span key={item} className="nt-profile-stat"><b>{item}</b></span>)}
                  </div>
                </div>
              </Reveal>
              <Reveal className="nt-profile-caption" delayMs={120}>
                <span aria-hidden="true">→</span> every profile shows its corner of the network
              </Reveal>
            </div>
          </div>
        </section>

        <section className="case-section case-following" id="following">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{net.following.eyebrow}</p>
              <h2 className="display-heading case-section-title">{net.following.title}</h2>
              <p className="case-section-sub">{net.following.text}</p>
            </Reveal>
            <Reveal className="rt-chain" delayMs={60}>
              {net.following.chain.map((item, index) => (
                <Fragment key={item}>
                  <span className="rt-chain-step">{item}</span>
                  {index < net.following.chain.length - 1 && <span className="rt-chain-arrow" aria-hidden="true">→</span>}
                </Fragment>
              ))}
            </Reveal>
            <Reveal className="rt-server nt-follow-points" delayMs={100}>
              <div className="rt-server-chips rt-server-chips--start">
                {net.following.points.map((point) => <span key={point} className="rt-server-chip">{point}</span>)}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-likes paper-texture" id="likes">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{net.likes.eyebrow}</p>
              <h2 className="display-heading case-section-title">{net.likes.title}</h2>
              <p className="case-section-sub">{net.likes.text}</p>
            </Reveal>
            <div className="nt-likes-grid">
              {[net.likes.like, net.likes.unlike].map((chain, index) => (
                <Reveal key={chain[0]} delayMs={index * 80} className="nt-like-card">
                  <ol className="rt-chain nt-like-chain">
                    {chain.map((item, stepIndex) => (
                      <Fragment key={item}>
                        <li className="rt-chain-step nt-like-step">{item}</li>
                        {stepIndex < chain.length - 1 && <span className="rt-chain-arrow nt-like-arrow" aria-hidden="true">→</span>}
                      </Fragment>
                    ))}
                  </ol>
                </Reveal>
              ))}
            </div>
            <Reveal className="wk-md-note nt-note-need" delayMs={120}>
              <span aria-hidden="true">♥</span> {net.likes.note}
            </Reveal>
          </div>
        </section>

        <section className="case-section case-pagination" id="pagination">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{net.pagination.eyebrow}</p>
              <h2 className="display-heading case-section-title">{net.pagination.title}</h2>
              <p className="case-section-sub">{net.pagination.text}</p>
            </Reveal>
            <Reveal className="rt-server nt-page-targets" delayMs={60}>
              <div className="rt-server-chips rt-server-chips--start">
                {net.pagination.targets.map((target) => <span key={target} className="rt-server-chip">{target}</span>)}
              </div>
            </Reveal>
            <Reveal className="nt-pagination" delayMs={100} aria-label="Pagination control illustration">
              <span className="nt-page-btn nt-page-prev"><span aria-hidden="true">←</span> PREVIOUS</span>
              <span className="nt-page-num" aria-hidden="true">1</span>
              <span className="nt-page-num nt-page-num--active" aria-hidden="true">2</span>
              <span className="nt-page-num" aria-hidden="true">3</span>
              <span className="nt-page-btn nt-page-next">NEXT <span aria-hidden="true">→</span></span>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-stack paper-texture" id="under-the-hood">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{net.hood.eyebrow}</p>
              <h2 className="display-heading case-section-title">{net.hood.title}</h2>
              <p className="case-section-sub">{net.hood.subtitle}</p>
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
            <div className="nt-hood">
              {net.hood.columns.map((column, index) => (
                <Reveal key={column.label} delayMs={index * 40} className="mp-hood-col">
                  <b className="mp-hood-label">{column.label}</b>
                  <ul className="mp-hood-list">
                    {column.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-model" id="model">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{net.model.eyebrow}</p>
              <h2 className="display-heading case-section-title">{net.model.title}</h2>
              <p className="case-section-sub">{net.model.text}</p>
            </Reveal>
            <Reveal className="nt-model" delayMs={60} aria-label="Conceptual application model">
              <div className="nt-model-user">
                <span className="nt-model-node nt-model-node--user">USER</span>
                <div className="nt-model-branches" aria-hidden="true">
                  <span className="nt-model-branch"><b>├──</b> POSTS</span>
                  <span className="nt-model-branch"><b>├──</b> FOLLOWERS</span>
                  <span className="nt-model-branch"><b>└──</b> FOLLOWING</span>
                </div>
              </div>
              <div className="nt-model-post">
                <span className="nt-model-node nt-model-node--post">POST</span>
                <div className="nt-model-branches" aria-hidden="true">
                  <span className="nt-model-branch"><b>└──</b> LIKES</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-auth paper-texture" id="auth">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{net.auth.eyebrow}</p>
              <h2 className="display-heading case-section-title">{net.auth.title}</h2>
              <p className="case-section-sub">{net.auth.text}</p>
            </Reveal>
            <Reveal className="rt-progress mp-auth-progress" delayMs={60}>
              {net.auth.steps.map((step, index) => (
                <Fragment key={step}>
                  <span className="rt-progress-step">
                    <b aria-hidden="true">{index + 1}</b>
                    {step}
                  </span>
                  {index < net.auth.steps.length - 1 && <span className="rt-progress-arrow" aria-hidden="true">→</span>}
                </Fragment>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="case-section case-feed" id="feed">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{net.feed.eyebrow}</p>
              <h2 className="display-heading case-section-title">{net.feed.title}</h2>
              <p className="case-section-sub">{net.feed.text}</p>
            </Reveal>
            <div className="wk-flow-grid mp-compare-grid">
              {net.feed.views.map((view, index) => (
                <Reveal key={view.label} delayMs={index * 80} className="wk-flow">
                  <span className="wk-flow-label">{view.label}</span>
                  <p className="nt-feed-text">{view.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-learning paper-texture" id="learning">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{net.learning.eyebrow}</p>
              <h2 className="display-heading case-section-title">{net.learning.title}</h2>
              <p className="case-section-sub">{net.learning.subtitle}</p>
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

        <section className="case-section case-structure" id="structure">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{net.structure.eyebrow}</p>
              <h2 className="display-heading case-section-title">{net.structure.title}</h2>
              <p className="case-section-sub">{net.structure.text}</p>
            </Reveal>
            <Reveal className="nt-post-loop" delayMs={60}>
              <ol className="wf-path wk-flow-path nt-post-loop-path">
                {net.structure.chain.map((step, index) => (
                  <li key={step} className="wf-step">
                    <span className="wf-step-num" aria-hidden="true">{index + 1}</span>
                    <span className="wf-step-label">{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal className="wk-md-note nt-note-need" delayMs={100}>
              <span aria-hidden="true">→</span> conceptual architecture — layout verified in the repository
            </Reveal>
          </div>
        </section>

        <section className="case-section case-gallery" id="screenshots">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">PROJECT SCREENSHOTS</p>
              <h2 className="display-heading case-section-title">See it in action.</h2>
              <p className="case-section-sub">A look at the social network, with room for more screenshots.</p>
            </Reveal>
            <div className="gallery">
              {mainPlaceholder && (
                <Reveal className="gallery-main">
                  <div className="gallery-item gallery-placeholder">
                    <span className="gallery-ph" aria-hidden="true">▭</span>
                    <b>{mainPlaceholder.label}</b>
                    <i>screenshot placeholder</i>
                  </div>
                </Reveal>
              )}
              <div className="gallery-side">
                {sidePlaceholders.map((shot, index) => (
                  <Reveal key={shot.label} delayMs={index * 60} className="gallery-side-item">
                    <div className="gallery-item gallery-placeholder">
                      <span className="gallery-ph" aria-hidden="true">▭</span>
                      <b>{shot.label}</b>
                      <i>screenshot placeholder</i>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="case-section case-pipeline" id="flow">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{net.flow.eyebrow}</p>
              <h2 className="display-heading case-section-title">{net.flow.title}</h2>
              <p className="case-section-sub">{net.flow.text}</p>
            </Reveal>
            <Reveal className="mp-pipeline nt-flow" delayMs={80}>
              <ol className="mp-pipeline-chain">
                {net.flow.chain.map((item, index) => (
                  <Fragment key={item}>
                    <li className="mp-pipeline-step"><span aria-hidden="true">{index + 1}</span>{item}</li>
                    {index < net.flow.chain.length - 1 && <span className="mp-pipeline-arrow" aria-hidden="true">↓</span>}
                  </Fragment>
                ))}
              </ol>
            </Reveal>
            <Reveal className="wk-md-note mp-pipeline-caption nt-note-need" delayMs={120}>← {net.flow.note}</Reveal>
          </div>
        </section>

        <section className="case-section case-status" id="context">
          <div className="page-shell">
            <Reveal className="status-strip">
              <p className="section-eyebrow">{net.context.eyebrow}</p>
              <h2 className="display-heading status-heading">{net.context.heading}</h2>
              <p className="status-text">{net.context.text}</p>
              <span className="status-pill">{net.context.tag}</span>
              <span className="status-stamp" aria-hidden="true">{net.context.stamp}</span>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-closing paper-texture" id="details">
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
              <h2>{net.cta.title}</h2>
              <p>{net.cta.text}</p>
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
      <SiteFooter />
    </>
  );
}