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

const GITHUB_URL = "https://github.com/ujjwaluzu/ghprofile";
const PYPI_URL = "https://pypi.org/project/ghprofile/";

const code = String.raw`from ghprofile.core import Ghprofile

gh = Ghprofile("octocat", "your_github_token")

print(gh.get_bio())
print(gh.get_followers())
print(gh.get_repo())
print(gh.get_stars())
print(gh.get_pinned_repos())`;

const codeError = String.raw`from ghprofile.core import GhprofileError

try:
    gh = Ghprofile("unknownuser", "badtoken")
except GhprofileError as e:
    print("Something went wrong:", e)`;

const codeImport = String.raw`pip install ghprofile

from ghprofile.core import Ghprofile

gh = Ghprofile("octocat")

gh.get_repo()`;

export function GhprofileDetail({
  study,
  project,
}: {
  study: ProjectCaseStudy;
  project: (typeof homeContent.projects)[number];
}) {
  const gp = study.ghprofile!;
  const relatedVideo = allVideos.find((video) => video.projectSlug === project.slug);

  return (
    <>
      <SiteHeader />
      <main className="case-page">
        <section className="case-hero paper-texture gp-hero" id="top">
          <div className="page-shell case-hero-inner">
            <div className="case-hero-copy">
              <span className="project-badge gp-hero-badge animate-rise" style={{ animationDelay: "60ms" }}>
                PYTHON LIBRARY
              </span>
              <h1 className="display-heading case-hero-title animate-rise" style={{ animationDelay: "140ms" }}>
                {project.name}
              </h1>
              <p className="case-hero-desc animate-rise" style={{ animationDelay: "220ms" }}>
                {gp.heroIntro}
              </p>
              <ul className="case-hero-techs animate-rise" style={{ animationDelay: "300ms" }}>
                {study.heroTechs.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="case-hero-actions animate-rise" style={{ animationDelay: "380ms" }}>
                <a
                  className="view-github"
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View ghprofile source code on GitHub"
                >
                  <GitHubMark /> View on GitHub <Arrow />
                </a>
                <a
                  className="view-outline"
                  href={PYPI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View the ghprofile package on PyPI"
                >
                  View on PyPI <Arrow />
                </a>
              </div>
            </div>
            <div className="case-hero-visual animate-rise" style={{ animationDelay: "320ms" }}>
              <div className="gp-terminal" aria-hidden="true">
                <div className="gp-terminal-head">
                  <span className="gp-terminal-dots"><i /><i /><i /></span>
                  <span className="gp-terminal-title">pip install ghprofile</span>
                  <span className="gp-terminal-tag">python package</span>
                </div>
                <div className="gp-terminal-body">
                  <pre><code>$ pip install ghprofile</code></pre>
                  <pre><code>Collecting ghprofile</code></pre>
                  <pre><code>  Downloading ghprofile-...-py3-none-any.whl</code></pre>
                  <pre><code>Successfully installed ghprofile</code></pre>
                </div>
              </div>
              <p className="gp-hero-note">{gp.heroNote}</p>
            </div>
          </div>
        </section>

        <section className="case-section case-idea" id="idea">
          <div className="page-shell case-split">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">THE IDEA</p>
              <h2 className="display-heading case-section-title">THE IDEA.</h2>
            </Reveal>
            <Reveal className="case-idea-body" delayMs={120}>
              {study.idea.paragraphs.map((paragraph) => (
                <p key={paragraph} className="case-idea-text">{paragraph}</p>
              ))}
              <div className="gp-idea-combo" aria-label="ghprofile combines GitHub profile, repositories, stars, and pinned repos behind a simple Python API">
                {gp.ideaCombo.map((item, index) => (
                  <Fragment key={`idea-${index}-${item}`}>
                    {index > 0 && <span className="gp-idea-plus" aria-hidden="true">+</span>}
                    <span className="gp-idea-chip">{item}</span>
                  </Fragment>
                ))}
                <span className="gp-idea-down" aria-hidden="true">↓</span>
              </div>
              <p className="case-idea-note" aria-hidden="true">{study.idea.note}</p>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-challenge paper-texture" id="why-library">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{gp.whyLibrary.eyebrow}</p>
              <h2 className="display-heading case-section-title">{gp.whyLibrary.title}</h2>
              <p className="case-section-sub">{gp.whyLibrary.subtitle}</p>
            </Reveal>
            <Reveal className="gp-methods" delayMs={60}>
              {gp.whyLibrary.methods.map((method, index) => (
                <Fragment key={`method-${index}-${method}`}>
                  {index > 0 && <span className="gp-method-arrow" aria-hidden="true">→</span>}
                  <code className="gp-method">{method}</code>
                </Fragment>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="case-section case-fetches" id="fetches">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{gp.fetches.eyebrow}</p>
              <h2 className="display-heading case-section-title">{gp.fetches.title}</h2>
              <p className="case-section-sub">{gp.fetches.subtitle}</p>
            </Reveal>
            <div className="au-detail-grid gp-fetch-grid">
              {gp.fetches.items.map((item, index) => (
                <Reveal key={`${item.label}-${index}`} delayMs={index * 40} className="au-detail-card gp-fetch-card">
                  <p className="au-detail-eyebrow">{item.label}</p>
                  <h3 className="au-detail-title display-heading">{item.title}</h3>
                  <p className="au-detail-text">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-username paper-texture" id="username-flow">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{gp.flow.eyebrow}</p>
              <h2 className="display-heading case-section-title">{gp.flow.title}</h2>
              <p className="case-section-sub">{gp.flow.subtitle}</p>
            </Reveal>
            <div className="gp-flow-wrap">
              <Reveal className="gp-flow" delayMs={60}>
                <ul className="model-chain gp-flow-chain">
                  {gp.flow.steps.map((step, index) => (
                    <li key={`flow-${index}-${step}`}>
                      <span className="model-node gp-flow-node">{step}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="gp-flow-calls" delayMs={140}>
                <div className="gp-code gp-code--calls">
                  <div className="gp-code-head">
                    <span className="gp-code-title">example calls</span>
                    <span className="gp-code-lang">python</span>
                  </div>
                  <pre><code>{`gh = Ghprofile("octocat")

`}{gp.flow.calls.map((call) => `${call}\n`).join("")}</code></pre>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="case-section case-simple-api" id="simple-api">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{gp.simpleApi.eyebrow}</p>
              <h2 className="display-heading case-section-title">{gp.simpleApi.title}</h2>
              <p className="case-section-sub">{gp.simpleApi.subtitle}</p>
            </Reveal>
            <Reveal className="gp-terminal gp-terminal--api" delayMs={60}>
              <div className="gp-terminal-head">
                <span className="gp-terminal-dots"><i /><i /><i /></span>
                <span className="gp-terminal-title">ghprofile - documented usage</span>
                <span className="gp-terminal-tag">python</span>
              </div>
              <pre><code>{code}</code></pre>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-auth paper-texture" id="auth">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{gp.auth.eyebrow}</p>
              <h2 className="display-heading case-section-title">{gp.auth.title}</h2>
            </Reveal>
            <div className="gp-auth-grid">
              <Reveal className="gp-auth-card" delayMs={60}>
                <span className="gp-auth-label">{gp.auth.without.label}</span>
                <ul className="gp-auth-list">
                  {gp.auth.without.items.map((item, index) => (
                    <li key={`without-${index}-${item}`}><span aria-hidden="true">−</span>{item}</li>
                  ))}
                </ul>
                <div className="gp-auth-code" aria-hidden="true">
                  <code>{`gh = Ghprofile("octocat")`}</code>
                </div>
                <p className="gp-auth-rate">~60 <b>API calls / hour</b> - according to the project&apos;s documentation</p>
              </Reveal>
              <Reveal className="gp-auth-card gp-auth-card--token" delayMs={120}>
                <span className="gp-auth-label gp-auth-label--token">{gp.auth.with.label}</span>
                <ul className="gp-auth-list">
                  {gp.auth.with.items.map((item, index) => (
                    <li key={`with-${index}-${item}`}><span aria-hidden="true">+</span>{item}</li>
                  ))}
                </ul>
                <p className="gp-auth-rate">~5000 <b>API calls / hour</b> - according to the project&apos;s documentation</p>
              </Reveal>
            </div>
            <Reveal className="wk-md-note gp-auth-note" delayMs={160}>
              <span aria-hidden="true">→</span> {gp.auth.note}
            </Reveal>
          </div>
        </section>

        <section className="case-section case-pinned" id="pinned">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{gp.pinned.eyebrow}</p>
              <h2 className="display-heading case-section-title">{gp.pinned.title}</h2>
              <p className="case-section-sub">{gp.pinned.text}</p>
            </Reveal>
            <Reveal className="gp-pinned" delayMs={80}>
              <div className="gp-pinned-label">GITHUB API + SCRAPING</div>
              <div className="gp-pinned-flow">
                <span className="gp-pinned-node">USER PAGE</span>
                <span className="gp-pinned-arrow" aria-hidden="true">→</span>
                <span className="gp-pinned-node gp-pinned-node--accent">SCRAPE</span>
                <span className="gp-pinned-arrow" aria-hidden="true">→</span>
                <span className="gp-pinned-node">PINNED REPOS</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-errors paper-texture" id="error-handling">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{gp.errorHandling.eyebrow}</p>
              <h2 className="display-heading case-section-title">{gp.errorHandling.title}</h2>
              <p className="case-section-sub">{gp.errorHandling.text}</p>
            </Reveal>
            <Reveal className="rt-chain gp-error-chain" delayMs={60}>
              {gp.errorHandling.chain.map((item, index) => (
                <Fragment key={`error-${index}-${item}`}>
                  <span className="rt-chain-step">{item}</span>
                  {index < gp.errorHandling.chain.length - 1 && <span className="rt-chain-arrow" aria-hidden="true">↓</span>}
                </Fragment>
              ))}
            </Reveal>
            <Reveal className="gp-code gp-code--error" delayMs={120}>
              <div className="gp-code-head">
                <span className="gp-code-title">catching the exception</span>
                <span className="gp-code-lang">python</span>
              </div>
              <pre><code>{codeError}</code></pre>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-hood" id="under-the-hood">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{gp.hood.eyebrow}</p>
              <h2 className="display-heading case-section-title">{gp.hood.title}</h2>
              <p className="case-section-sub">{gp.hood.subtitle}</p>
            </Reveal>
            <div className="gp-hood-wrap">
              <Reveal className="gp-arch" delayMs={60} aria-label="Conceptual architecture diagram">
                <div className="gp-arch-row gp-arch-row--app">
                  <span className="gp-arch-node">PYTHON APPLICATION</span>
                  <span className="gp-arch-down" aria-hidden="true">↓</span>
                </div>
                <div className="gp-arch-row gp-arch-row--lib">
                  <span className="gp-arch-node gp-arch-node--lib">GHPROFILE</span>
                  <span className="gp-arch-down" aria-hidden="true">↓</span>
                </div>
                <div className="gp-arch-row">
                  <div className="gp-arch-box">
                    <b>GITHUB API</b>
                    <span>PROFILE DATA · REPOSITORIES · STAR COUNTS</span>
                  </div>
                  <span className="gp-arch-plus" aria-hidden="true">+</span>
                  <div className="gp-arch-box gp-arch-box--scrape">
                    <b>PINNED REPO SCRAPING</b>
                    <span>PINNED REPOSITORIES</span>
                  </div>
                </div>
                <div className="gp-arch-row gp-arch-row--result">
                  <span className="gp-arch-down" aria-hidden="true">↓</span>
                  <span className="gp-arch-node gp-arch-node--result">PYTHON RESULTS</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="case-section case-structure paper-texture" id="structure">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{gp.packageStructure.eyebrow}</p>
              <h2 className="display-heading case-section-title">{gp.packageStructure.title}</h2>
              <p className="case-section-sub">The documented public surface - verified against the project&apos;s documentation.</p>
            </Reveal>
            <div className="wk-files">
              {gp.packageStructure.files.map((file, index) => (
                <Reveal key={file.path} delayMs={index * 40} className={`wk-file${file.featured ? " wk-file--featured" : ""}`}>
                  <code className="wk-file-path">{file.path}</code>
                  <span className="wk-file-desc">{file.desc}</span>
                  {file.featured && <span className="wk-file-star">the import path</span>}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-code-first" id="code-first">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">CODE-FIRST</p>
              <h2 className="display-heading case-section-title">A tool you can import.</h2>
              <p className="case-section-sub">Install once, import anywhere - this is a Python package, not a web page.</p>
            </Reveal>
            <Reveal className="gp-code gp-code--install" delayMs={60}>
              <div className="gp-code-head">
                <span className="gp-code-title">package use</span>
                <span className="gp-code-lang">terminal / python</span>
              </div>
              <pre><code>{codeImport}</code></pre>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-contributing paper-texture" id="contributing">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{gp.contributing.eyebrow}</p>
              <h2 className="display-heading case-section-title">{gp.contributing.title}</h2>
              <p className="case-section-sub">{gp.contributing.subtitle}</p>
            </Reveal>
            <Reveal className="rt-server-chips gp-contrib-chips" delayMs={60}>
              {gp.contributing.items.map((item, index) => (
                <span key={`contributing-${index}-${item}`} className="rt-server-chip">{item}</span>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="case-section case-license" id="license">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">LICENSE</p>
              <h2 className="display-heading case-section-title">OPEN SOURCE.</h2>
              <p className="case-section-sub">ghprofile is licensed under the MIT License according to the project documentation.</p>
            </Reveal>
            <Reveal className="gp-license" delayMs={60}>
              <div className="gp-license-block">
                <b>LICENSE</b>
                <span>MIT</span>
              </div>
              <a
                className="view-outline"
                href="https://github.com/ujjwaluzu/ghprofile/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read the ghprofile MIT license on GitHub"
              >
                Read the license on GitHub <Arrow />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="case-section case-learning paper-texture" id="learning">
          <div className="page-shell">
            <Reveal className="case-section-head">
              <p className="section-eyebrow">{gp.learning.eyebrow}</p>
              <h2 className="display-heading case-section-title">{gp.learning.title}</h2>
              <p className="case-section-sub">{gp.learning.subtitle}</p>
            </Reveal>
            <div className="highlight-grid gp-learning-grid">
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

        <section className="gp-pypi dark-texture" id="pypi">
          <div className="page-shell gp-pypi-inner">
            <Reveal className="gp-pypi-copy">
              <p className="section-eyebrow section-eyebrow-light">{gp.pypi.eyebrow}</p>
              <h2 className="display-heading gp-pypi-title">{gp.pypi.title}</h2>
              <p className="gp-pypi-sub">{gp.pypi.subtitle}</p>
            </Reveal>
            <Reveal className="gp-pypi-card" delayMs={80}>
              <div className="gp-terminal gp-terminal--dark">
                <div className="gp-terminal-head">
                  <span className="gp-terminal-dots"><i /><i /><i /></span>
                  <span className="gp-terminal-title">install from PyPI</span>
                </div>
                <pre><code>$ pip install ghprofile</code></pre>
              </div>
              <div className="gp-pypi-package" aria-hidden="true">
                <span className="gp-pypi-icon">Py</span>
                <div className="gp-pypi-meta">
                  <b>PyPI</b>
                  <span>ghprofile</span>
                </div>
              </div>
            </Reveal>
            <Reveal className="gp-pypi-cta" delayMs={120}>
              <a
                className="view-github view-github--lg"
                href={PYPI_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the ghprofile package on PyPI"
              >
                View package on PyPI <Arrow />
              </a>
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
              <h2>{gp.cta.title}</h2>
              <p>{gp.cta.text}</p>
              <div className="case-cta-actions">
                <a
                  className="view-github view-github--lg"
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View the ghprofile project on GitHub"
                >
                  <GitHubMark /> View the project on GitHub <Arrow />
                </a>
                <a
                  className="view-outline view-outline--lg"
                  href={PYPI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Install the ghprofile package from PyPI"
                >
                  Install it from PyPI <Arrow />
                </a>
              </div>
              <div className="gp-cta-install">
                <code>pip install ghprofile</code>
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
      {relatedVideo && <RelatedVideoLink title={relatedVideo.title ?? "ghprofile video"} videoId={relatedVideo.id} projectName={project.name} />}
      <SiteFooter />
    </>
  );
}
