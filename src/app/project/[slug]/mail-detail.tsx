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

export function MailDetail({
  study,
  project,
}: {
  study: ProjectCaseStudy;
  project: (typeof homeContent.projects)[number];
}) {
  const mail = study.mail!;
  const relatedVideo = allVideos.find((video) => video.projectSlug === project.slug);

  return (
    <>
      <SiteHeader />
      <main className="case-page">
        <section className="case-hero paper-texture" id="top">
          <div className="page-shell case-hero-inner">
            <div className="case-hero-copy">
              <span className="project-badge animate-rise" style={{ animationDelay: "60ms" }}>{project.category}</span>
              <h1 className="display-heading case-hero-title animate-rise" style={{ animationDelay: "140ms" }}>{project.name}</h1>
              <p className="case-hero-desc animate-rise" style={{ animationDelay: "220ms" }}>{mail.heroIntro}</p>
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
                  href={mail.screencastHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch the ${project.name} screencast`}
                >
                  Watch the screencast <Arrow />
                </a>
              </div>
            </div>
            <div className="case-hero-visual animate-rise" style={{ animationDelay: "320ms" }}>
              <div className="mail-mock" aria-hidden="true">
                <div className="mail-mock-head">
                  <span className="mail-mock-dots"><i /><i /><i /></span>
                  <span className="mail-mock-brand">mail</span>
                  <span className="mail-mock-status">fetch ←→ api</span>
                </div>
                <div className="mail-mock-tabs">
                  <span className="mail-mock-tab mail-mock-tab--active">Inbox</span>
                  <span className="mail-mock-tab">Sent</span>
                  <span className="mail-mock-tab">Archive</span>
                </div>
                <div className="mail-mock-rows">
                  <div className="mail-mock-row"><b>A.</b><span className="mail-mock-sender">Alice</span><span className="mail-mock-subject">Re: launch timeline</span><i>read</i></div>
                  <div className="mail-mock-row mail-mock-row--unread"><b>B.</b><span className="mail-mock-sender">Sam</span><span className="mail-mock-subject">Design pass ready</span><i>unread</i></div>
                  <div className="mail-mock-row"><b>C.</b><span className="mail-mock-sender">Rin</span><span className="mail-mock-subject">Weekly notes</span><i>read</i></div>
                </div>
                <div className="mail-mock-body">
                  <span className="mail-mock-bodyline">re: launch timeline</span>
                  <span className="mail-mock-bodyline">sounds good - ship</span>
                  <span className="mail-mock-bodyline">it by friday ✓</span>
                </div>
              </div>
              <p className="mp-note-mail">no reload - just render</p>
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

        <section className="case-section case-challenge paper-texture" id="challenge">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{mail.challenge.eyebrow}</p>
              <h2 className="display-heading case-section-title">{mail.challenge.title}</h2>
              <p className="case-section-sub">{mail.challenge.text}</p>
            </Reveal>
            <div className="wk-flow-grid mp-compare-grid">
              <Reveal className="wk-flow wk-flow--plain" delayMs={80}>
                <span className="wk-flow-label mp-label-traditional">{mail.challenge.traditional.label}</span>
                <ol className="wf-path wk-flow-path">
                  {mail.challenge.traditional.steps.map((step, index) => (
                    <li key={`traditional-${index}-${step}`} className="wf-step">
                      <span className="wf-step-num" aria-hidden="true">{index + 1}</span>
                      <span className="wf-step-label">{step}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
              <Reveal className="wk-flow wk-flow--plain mp-flow-spa" delayMs={140}>
                <span className="wk-flow-label mp-label-spa">{mail.challenge.mail.label}</span>
                <ol className="wf-path wk-flow-path">
                  {mail.challenge.mail.steps.map((step, index) => (
                    <li key={`mail-${index}-${step}`} className="wf-step">
                      <span className="wf-step-num" aria-hidden="true">{index + 1}</span>
                      <span className="wf-step-label">{step}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="case-section case-mailboxes" id="mailboxes">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{mail.mailboxes.eyebrow}</p>
              <h2 className="display-heading case-section-title">{mail.mailboxes.title}</h2>
              <p className="case-section-sub">{mail.mailboxes.subtitle}</p>
            </Reveal>
            <div className="mp-mailboxes">
              {mail.mailboxes.boxes.map((box, index) => (
                <Reveal key={box.label} delayMs={index * 70} className="mp-mailbox">
                  <span className={`mp-mailbox-label ${["mp--orange", "mp--blue", "mp--green"][index % 3]}`}>{box.label}</span>
                  <p className="mp-mailbox-text">{box.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-workflow paper-texture" id="features">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">WHAT I BUILT</p>
              <h2 className="display-heading case-section-title">The email client, feature by feature.</h2>
              <p className="case-section-sub">Eight focused features - nothing claimed that wasn&apos;t built.</p>
            </Reveal>
            <div className="feature-grid feature-grid--three">
              {study.featureGroups.map((group, index) => (
                <Reveal key={group.id} delayMs={index * 60}>
                  <article className={`feature-card feature-card--rt feature-card--${group.id}${group.featured ? " feature-card--featured" : ""}`}>
                    {group.featured && <span className="feature-star">the whole point</span>}
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

        <section className="case-section case-lifecycle" id="lifecycle">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{mail.lifecycle.eyebrow}</p>
              <h2 className="display-heading case-section-title">{mail.lifecycle.title}</h2>
              <p className="case-section-sub">{mail.lifecycle.subtitle}</p>
            </Reveal>
            <div className="wk-flow-grid">
              {mail.lifecycle.flows.map((flow, index) => (
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

        <section className="case-section case-fetch paper-texture" id="fetch">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{mail.fetchFlow.eyebrow}</p>
              <h2 className="display-heading case-section-title">{mail.fetchFlow.title}</h2>
              <p className="case-section-sub">{mail.fetchFlow.text}</p>
            </Reveal>
            <Reveal className="rt-chain" delayMs={60}>
              {mail.fetchFlow.chain.map((item, index) => (
                <Fragment key={`fetch-${index}-${item}`}>
                  <span className="rt-chain-step">{item}</span>
                  {index < mail.fetchFlow.chain.length - 1 && <span className="rt-chain-arrow" aria-hidden="true">→</span>}
                </Fragment>
              ))}
            </Reveal>
            <Reveal className="wk-md-note mp-fetch-note" delayMs={120}>
              ← <b>{mail.fetchFlow.note}</b>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-state" id="state">
          <div className="page-shell">
            <Reveal className="rt-server" delayMs={60}>
              <div>
                <p className="section-eyebrow">{mail.state.eyebrow}</p>
                <h3 className="display-heading rt-server-title">{mail.state.title}</h3>
              </div>
              <div className="rt-server-chips">
                {mail.state.examples.map((example, index) => <span key={`state-${index}-${example}`} className="rt-server-chip">{example}</span>)}
              </div>
              <p className="rt-server-text">{mail.state.text}</p>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-auth paper-texture" id="auth">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{mail.auth.eyebrow}</p>
              <h2 className="display-heading case-section-title">{mail.auth.title}</h2>
              <p className="case-section-sub">{mail.auth.text}</p>
            </Reveal>
            <Reveal className="rt-progress mp-auth-progress" delayMs={60}>
              {mail.auth.steps.map((step, index) => (
                <Fragment key={`auth-${index}-${step}`}>
                  <span className="rt-progress-step">
                    <b aria-hidden="true">{index + 1}</b>
                    {step}
                  </span>
                  {index < mail.auth.steps.length - 1 && <span className="rt-progress-arrow" aria-hidden="true">→</span>}
                </Fragment>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="case-section case-archive" id="archive">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{mail.archive.eyebrow}</p>
              <h2 className="display-heading case-section-title">{mail.archive.title}</h2>
              <p className="case-section-sub">{mail.archive.text}</p>
            </Reveal>
            <Reveal className="rt-chain" delayMs={60}>
              {mail.archive.chain.map((item, index) => (
                <Fragment key={`archive-${index}-${item}`}>
                  <span className="rt-chain-step">{item}</span>
                  {index < mail.archive.chain.length - 1 && <span className="rt-chain-arrow" aria-hidden="true">→</span>}
                </Fragment>
              ))}
            </Reveal>
            <Reveal className="wk-md-note" delayMs={120}><span aria-hidden="true">▣</span> {mail.archive.note}</Reveal>
          </div>
        </section>

        <section className="case-section case-reply paper-texture" id="reply">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{mail.reply.eyebrow}</p>
              <h2 className="display-heading case-section-title">{mail.reply.title}</h2>
              <p className="case-section-sub">{mail.reply.text}</p>
            </Reveal>
            <Reveal className="rt-chain" delayMs={60}>
              {mail.reply.chain.map((item, index) => (
                <Fragment key={`reply-${index}-${item}`}>
                  <span className="rt-chain-step">{item}</span>
                  {index < mail.reply.chain.length - 1 && <span className="rt-chain-arrow" aria-hidden="true">→</span>}
                </Fragment>
              ))}
            </Reveal>
            <Reveal className="wk-md-note" delayMs={120}><span aria-hidden="true">✎</span> {mail.reply.note}</Reveal>
          </div>
        </section>

        <section className="case-section case-stack" id="under-the-hood">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{mail.hood.eyebrow}</p>
              <h2 className="display-heading case-section-title">{mail.hood.title}</h2>
              <p className="case-section-sub">{mail.hood.subtitle}</p>
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
            <div className="mp-hood">
              {mail.hood.columns.map((column, index) => (
                <Reveal key={column.label} delayMs={index * 50} className="mp-hood-col">
                  <b className="mp-hood-label">{column.label}</b>
                  <ul className="mp-hood-list">
                    {column.items.map((item, itemIndex) => <li key={`${column.label}-${itemIndex}-${item}`}>{item}</li>)}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-structure paper-texture" id="structure">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{mail.structure.eyebrow}</p>
              <h2 className="display-heading case-section-title">{mail.structure.title}</h2>
              <p className="case-section-sub">The documented project layout - with the SPA&apos;s heart up front.</p>
            </Reveal>
            <div className="wk-files">
              {mail.structure.files.map((file, index) => (
                <Reveal key={file.path} delayMs={index * 40} className={`wk-file${file.featured ? " wk-file--featured" : ""}`}>
                  <code className="wk-file-path">{file.path}</code>
                  <span className="wk-file-desc">{file.desc}</span>
                  {file.featured && <span className="wk-file-star">the SPA core</span>}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-jscore" id="javascript-core">
          <div className="page-shell">
            <Reveal className="spotlight spotlight--mail" delayMs={60}>
              <div className="spotlight-copy">
                <p className="section-eyebrow spotlight-eyebrow">{mail.jsCore.eyebrow}</p>
                <h3 className="display-heading spotlight-title">{mail.jsCore.title}</h3>
                <p className="spotlight-text">{mail.jsCore.text}</p>
                <ul className="bid-rules mp-js-bullets">
                  {mail.jsCore.bullets.map((bullet, index) => (
                    <li key={`js-core-${index}-${bullet}`}><span aria-hidden="true">✓</span>{bullet}</li>
                  ))}
                </ul>
              </div>
              <div className="mail-mock-mail" aria-hidden="true">
                <span className="mail-mock-mail-tag">inbox.js</span>
                <span className="mail-mock-mail-line">fetch(&quot;/emails/inbox&quot;)</span>
                <span className="mail-mock-mail-line">.then(render)</span>
                <span className="mail-mock-mail-line">render(emails)</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-learning" id="learning">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{mail.learning.eyebrow}</p>
              <h2 className="display-heading case-section-title">{mail.learning.title}</h2>
              <p className="case-section-sub">{mail.learning.subtitle}</p>
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

        <section className="case-section case-pipeline" id="pipeline">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{mail.pipeline.eyebrow}</p>
              <h2 className="display-heading case-section-title">{mail.pipeline.title}</h2>
              <p className="case-section-sub">{mail.pipeline.text}</p>
            </Reveal>
            <Reveal className="mp-pipeline" delayMs={80}>
              <ol className="mp-pipeline-chain">
                {mail.pipeline.chain.map((item, index) => (
                  <Fragment key={`pipeline-${index}-${item}`}>
                    <li className="mp-pipeline-step"><span aria-hidden="true">{index + 1}</span>{item}</li>
                    {index < mail.pipeline.chain.length - 1 && <span className="mp-pipeline-arrow" aria-hidden="true">↓</span>}
                  </Fragment>
                ))}
              </ol>
              <p className="mp-pipeline-note"><b>0</b> full-page reloads. <b>1</b> page. <b>{mail.pipeline.chain.length}</b> steps.</p>
            </Reveal>
            <Reveal className="wk-md-note mp-pipeline-caption" delayMs={140}>← {mail.pipeline.note}</Reveal>
          </div>
        </section>

        <section className="case-section case-status" id="context">
          <div className="page-shell">
            <Reveal className="status-strip">
              <p className="section-eyebrow">{mail.context.eyebrow}</p>
              <h2 className="display-heading status-heading">{mail.context.heading}</h2>
              <p className="status-text">{mail.context.text}</p>
              <span className="status-pill">{mail.context.tag}</span>
              <span className="status-stamp" aria-hidden="true">{mail.context.stamp}</span>
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
              <h2>{mail.cta.title}</h2>
              <p>{mail.cta.text}</p>
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
                  href={mail.screencastHref}
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
      {relatedVideo && <RelatedVideoLink title={relatedVideo.title ?? "Mail video"} videoId={relatedVideo.id} projectName={project.name} />}
      <SiteFooter />
    </>
  );
}
