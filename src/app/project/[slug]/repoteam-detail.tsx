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
  "repoteam/dashboard.png": { w: 1921, h: 919 },
  "repoteam/team-detail.png": { w: 1921, h: 955 },
  "repoteam/project-detail.png": { w: 1921, h: 919 },
  "repoteam/home.png": { w: 1921, h: 1168 },
};

const statusTones = ["todo", "progress", "review", "done"];
const priorityTones = ["low", "medium", "high"];
const roleAccents = ["owner", "admin", "member"];

export function RepoTeamDetail({
  study,
  project,
}: {
  study: ProjectCaseStudy;
  project: (typeof homeContent.projects)[number];
}) {
  const rt = study.repoteam!;
  const heroImage = `${assetRoot}/${project.image}`;
  const shots = study.screenshots.filter((s): s is Extract<typeof s, { kind: "image" }> => s.kind === "image");
  const mainShot = shots[0];
  const mainDims = mainShot ? shotDims[mainShot.image] ?? { w: 1921, h: 919 } : { w: 1921, h: 919 };

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
                  alt={mainShot?.alt ?? "RepoTeam dashboard"}
                  width={mainDims.w}
                  height={mainDims.h}
                  priority
                  sizes="(max-width: 767px) calc(100vw - 56px), 460px"
                />
                <figcaption className="case-frame-caption">dashboard preview</figcaption>
              </figure>
              <p className="case-hero-note" aria-hidden="true">team → project → issue flow ✓</p>
            </div>
          </div>
        </section>

        <section className="case-section case-status" id="status">
          <div className="page-shell">
            <Reveal className="status-strip">
              <p className="section-eyebrow">{rt.status.eyebrow}</p>
              <h2 className="display-heading status-heading">{rt.status.heading}</h2>
              <p className="status-text">{rt.status.text}</p>
              <span className="status-pill">{rt.status.tag}</span>
              <span className="status-stamp" aria-hidden="true">(an honest MVP)</span>
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

        <section className="case-section case-workflow paper-texture" id="workflow">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{rt.workflow.eyebrow}</p>
              <h2 className="display-heading case-section-title">{rt.workflow.title}</h2>
              <p className="case-section-sub">{rt.workflow.subtitle}</p>
            </Reveal>
            <div className="core-workflow-grid">
              <Reveal className="wf-path-wrap">
                <ol className="wf-path">
                  {rt.workflow.path.map((step, index) => (
                    <li key={`workflow-path-${index}-${step}`} className="wf-step">
                      <span className="wf-step-num" aria-hidden="true">{index + 1}</span>
                      <span className="wf-step-label">{step}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
              <Reveal className="rt-steps-wrap" delayMs={120}>
                <p className="wf-path-title">The documented typical flow</p>
                <ol className="rt-steps">
                  {rt.workflow.steps.map((step, index) => (
                    <li key={`rt-${index}-${step}`} className="rt-step">
                      <b aria-hidden="true">{index + 1}</b>
                      <span>{step}</span>
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
              <p className="case-section-sub">Six compact areas cover the whole MVP - no production features promised yet.</p>
            </Reveal>
            <div className="feature-grid feature-grid--three">
              {study.featureGroups.map((group, index) => (
                <Reveal key={group.id} delayMs={index * 60}>
                  <article className={`feature-card feature-card--rt feature-card--${group.id}${group.featured ? " feature-card--featured" : ""}`}>
                    {group.featured && <span className="feature-star">core flow</span>}
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

        <section className="case-section case-issue paper-texture" id="issue-tracking">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{rt.issues.eyebrow}</p>
              <h2 className="display-heading case-section-title">{rt.issues.title}</h2>
              <p className="case-section-sub">{rt.issues.text}</p>
            </Reveal>
            <Reveal className="rt-issue" delayMs={80}>
              <div className="rt-statuses">
                {rt.issues.statuses.map((status, index) => (
                  <Fragment key={`status-${index}-${status}`}>
                    <span className={`rt-status rt-status--${statusTones[index]}`}>{status}</span>
                    {index < rt.issues.statuses.length - 1 && <span className="rt-status-arrow" aria-hidden="true">→</span>}
                  </Fragment>
                ))}
              </div>
              <div className="rt-priorities">
                <span className="rt-priority-label">Priorities</span>
                {rt.issues.priorities.map((priority, index) => (
                  <span key={`priority-${index}-${priority}`} className={`rt-priority rt-priority--${priorityTones[index]}`}>{priority}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-roles" id="permissions">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{rt.roles.eyebrow}</p>
              <h2 className="display-heading case-section-title">{rt.roles.title}</h2>
              <p className="case-section-sub">{rt.roles.subtitle}</p>
            </Reveal>
            <div className="roles-grid">
              {rt.roles.groups.map((role, index) => (
                <Reveal key={role.name} delayMs={index * 80}>
                  <article className={`role-card role-card--${roleAccents[index]}`}>
                    <h3>{role.name}</h3>
                    <p className="role-tagline">{role.tagline}</p>
                    <ul className="role-list">
                      {role.items.map((item, itemIndex) => <li key={`${role.name}-${itemIndex}-${item}`}>{item}</li>)}
                    </ul>
                    {index === 0 && <p className="role-owner-note">{rt.roles.ownerNote}</p>}
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className="role-note" delayMs={120}>
              <span aria-hidden="true">⚑</span> {rt.roles.note}
            </Reveal>
          </div>
        </section>

        <section className="case-section case-stack paper-texture" id="under-the-hood">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">UNDER THE HOOD</p>
              <h2 className="display-heading case-section-title">How it&apos;s built.</h2>
              <p className="case-section-sub">A server-rendered Django app with a custom CSS design system.</p>
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
            <Reveal className="rt-server" delayMs={80}>
              <div>
                <p className="section-eyebrow">{rt.server.eyebrow}</p>
                <h3 className="display-heading rt-server-title">{rt.server.title}</h3>
              </div>
              <div className="rt-server-chips">
                {rt.server.chips.map((chip) => <span key={chip} className="rt-server-chip">{chip}</span>)}
              </div>
              <p className="rt-server-text">{rt.server.text}</p>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-model" id="data-model">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{rt.dataModel.eyebrow}</p>
              <h2 className="display-heading case-section-title">{rt.dataModel.title}</h2>
            </Reveal>
            <div className="model-wrap">
              <Reveal className="model-chain-wrap">
                <ol className="model-chain">
                  {rt.dataModel.chain.map((node) => (
                    <li key={node} className="model-node">{node}</li>
                  ))}
                </ol>
              </Reveal>
              <Reveal className="model-assign-wrap" delayMs={120}>
                <div className="model-assign">
                  <span className="model-chip">{rt.dataModel.assignment.from}</span>
                  <span className="model-assign-label" aria-hidden="true">{rt.dataModel.assignment.arrow}</span>
                  <span className="model-chip">{rt.dataModel.assignment.to}</span>
                </div>
                <p className="model-assign-note">{rt.dataModel.assignment.note}</p>
              </Reveal>
              <Reveal className="model-note" delayMs={160}>
                <span aria-hidden="true">✎</span> {rt.dataModel.note}
              </Reveal>
            </div>
          </div>
        </section>

        <section className="case-section case-idea-done paper-texture" id="issue-lifecycle">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{rt.ideaToDone.eyebrow}</p>
              <h2 className="display-heading case-section-title">{rt.ideaToDone.title}</h2>
              <p className="case-section-sub">The six moves an issue goes through in the current MVP.</p>
            </Reveal>
            <div className="rt-progress">
              {rt.ideaToDone.steps.map((step, index) => (
                <Fragment key={`auth-${index}-${step}`}>
                  <span className="rt-progress-step"><b aria-hidden="true">{index + 1}</b>{step}</span>
                  {index < rt.ideaToDone.steps.length - 1 && <span className="rt-progress-arrow" aria-hidden="true">→</span>}
                </Fragment>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-gallery" id="screenshots">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">PROJECT SCREENSHOTS</p>
              <h2 className="display-heading case-section-title">See it in action.</h2>
              <p className="case-section-sub">A look at the team workspace, with room for more screenshots.</p>
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
                {study.screenshots.slice(1).map((shot, index) => {
                  const dims = shot.kind === "image" ? shotDims[shot.image] ?? { w: 1921, h: 919 } : { w: 1921, h: 919 };
                  return (
                    <Reveal key={shot.label} delayMs={index * 60} className="gallery-side-item">
                      {shot.kind === "image" ? (
                        <figure className="gallery-item gallery-item--image">
                          <Image src={`${assetRoot}/${shot.image}`} alt={shot.alt} width={dims.w} height={dims.h} sizes="(max-width: 767px) 100vw, 320px" />
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
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="case-section case-structure paper-texture" id="structure">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{rt.structure.eyebrow}</p>
              <h2 className="display-heading case-section-title">{rt.structure.title}</h2>
              <p className="case-section-sub">{rt.structure.note}</p>
            </Reveal>
            <Reveal className="rt-chain" delayMs={60}>
              {rt.structure.chain.map((item, index) => (
                <Fragment key={`structure-${index}-${item}`}>
                  <span className="rt-chain-step">{item}</span>
                  {index < rt.structure.chain.length - 1 && <span className="rt-chain-arrow" aria-hidden="true">→</span>}
                </Fragment>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="case-section case-tests" id="testing">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">TESTED WORKFLOWS</p>
              <h2 className="display-heading case-section-title">Kept honest by the test suite.</h2>
              <p className="case-section-sub">The documented automated tests that keep the MVP grounded.</p>
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

        <section className="case-section case-next paper-texture" id="next">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{rt.next.eyebrow}</p>
              <h2 className="display-heading case-section-title">{rt.next.title}</h2>
              <p className="case-section-sub">{rt.next.subtitle}</p>
            </Reveal>
            <div className="next-grid">
              <Reveal className="next-col next-col--now" delayMs={60}>
                <span className="next-col-label">{rt.next.currentLabel}</span>
                <span className="next-col-desc">{rt.next.currentDesc}</span>
                <div>
                  {rt.next.current.map((item, index) => <span key={`current-${index}-${item}`} className="next-chip">{item}</span>)}
                </div>
              </Reveal>
              <Reveal className="next-col next-col--later" delayMs={140}>
                <span className="next-col-label">{rt.next.futureLabel}</span>
                <span className="next-col-desc">{rt.next.futureDesc}</span>
                <div>
                  {rt.next.future.map((item, index) => <span key={`future-${index}-${item}`} className="next-chip">{item}</span>)}
                </div>
              </Reveal>
            </div>
            <Reveal className="next-note" delayMs={180}>
              <span aria-hidden="true">✍</span> {rt.next.note}
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
              <h2>Want to explore the code?</h2>
              <p>Dive into the implementation, the permission checks, and the test suite.</p>
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
