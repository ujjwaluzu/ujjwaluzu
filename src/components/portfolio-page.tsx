"use client";

import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Arrow, SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { decorativeAssets } from "@/lib/decorative-assets";
import { homeContent } from "@/lib/home-content";
import { useParallax } from "@/lib/use-parallax";

const assetRoot = "/assets";

function HeroDecoration() {
  const buildRef = useParallax<HTMLImageElement>(10);
  const biggerRef = useParallax<HTMLImageElement>(12);
  const goodRef = useParallax<HTMLImageElement>(10);
  const codingRef = useParallax<HTMLImageElement>(12);

  return (
    <div className="hero-decorations" aria-hidden="true">
      <Image ref={buildRef} className="hero-asset hero-asset-build" src={decorativeAssets.heroStickyBuild} width={220} height={285} alt="" />
      <Image ref={biggerRef} className="hero-asset hero-asset-bigger" src={decorativeAssets.heroStickyBiggerThings} width={225} height={205} alt="" />
      <Image ref={goodRef} className="hero-asset hero-asset-good" src={decorativeAssets.heroGoodIdeas} width={250} height={245} alt="" />
      <Image ref={codingRef} className="hero-asset hero-asset-coding" src={decorativeAssets.heroCodingDoodle} width={195} height={205} alt="" />
    </div>
  );
}

export function HeroSection() {
  const { hero } = homeContent;
  const characterRef = useParallax<HTMLImageElement>(14);

  return (
    <section className="hero" id="top">
      <SiteHeader />
      <div className="hero-inner page-shell">
        <div className="hero-copy">
          <p className="hero-intro animate-rise" style={{ animationDelay: "100ms" }}>{hero.intro}<span className="intro-spark">〽</span></p>
          <h1 className="hero-title animate-rise" style={{ animationDelay: "180ms" }}>
            <span>{hero.firstName}</span>
            <span>{hero.lastName}</span>
          </h1>
          <p className="hero-tagline animate-rise" style={{ animationDelay: "260ms" }}>{hero.tagline}</p>
          <p className="hero-description animate-rise" style={{ animationDelay: "340ms" }}>{hero.description}</p>
          <div className="hero-actions animate-rise" style={{ animationDelay: "420ms" }}>
            <a className="button button-dark" href="#projects">View My Work <Arrow /></a>
            <a className="text-link" href="#about">About Me <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-art">
          <HeroDecoration />
          <Image
            ref={characterRef}
            className="character character-hero"
            src={`${assetRoot}/hero-char.png`}
            alt="Illustrated full-body portrait of Ujjwal with a frog on his head"
            width={1024}
            height={1536}
            priority
            sizes="(max-width: 767px) 82vw, 54vw"
          />
        </div>
      </div>
      <div className="hero-edge" aria-hidden="true" />
    </section>
  );
}

function TechIcon({ icon, alt, size = 22 }: { icon: string; alt: string; size?: number }) {
  return (
    <Image
      className="tech-icon"
      src={`${assetRoot}/${icon}`}
      alt={alt}
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}

function GitHubMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function ProjectVisual({ theme }: { theme: string }) {
  if (theme === "cinema") {
    return (
      <div className="project-visual project-visual-cinema" aria-hidden="true">
        <div className="vis-poster">
          <span className="vis-poster-label" />
          <b>UZZUTV</b>
          <span className="vis-play">▶</span>
        </div>
        <div className="vis-player-bar"><span /><i /></div>
      </div>
    );
  }
  if (theme === "collab") {
    return (
      <div className="project-visual project-visual-collab" aria-hidden="true">
        <div className="visual-window"><span /><span /><span /></div>
        <div className="vis-board">
          <div className="vis-column"><i /><i /><i /></div>
          <div className="vis-column"><i /><i /></div>
          <div className="vis-column"><i /><i /><i /></div>
        </div>
        <div className="visual-lines"><i /><i /><i /></div>
      </div>
    );
  }
  if (theme === "auction") {
    return (
      <div className="project-visual project-visual-auction" aria-hidden="true">
        <div className="vis-item" />
        <div className="vis-item vis-item-front">
          <span className="vis-bid">BID</span>
          <div className="vis-item-lines"><i /><i /><i /></div>
          <b>$24</b>
        </div>
        <div className="vis-bidder"><i /><span>Current bid</span><b>▲ 2</b></div>
      </div>
    );
  }
  return (
    <div className="project-visual project-visual-wiki" aria-hidden="true">
      <div className="vis-doc">
        <span className="vis-search">⌕ Search entries…</span>
        <b>Encyclopedia</b>
        <div className="vis-md"><i /><i /><i /><i /></div>
      </div>
      <div className="vis-hash">#</div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof homeContent.projects[number]; index: number }) {
  return (
    <article className={`project-card project-card-${index + 1}`}>
      <Reveal delayMs={index * 70}>
        <ProjectVisual theme={project.theme} />
        <div className="project-card-body">
          <span className={`project-label${project.category === "MVP" ? " project-label--green" : project.category === "Streaming platform" ? " project-label--warm" : ""}`}>{project.category}</span>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="tag-list">{project.technologies.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <div className="project-links">
            <a className="github-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on GitHub`}><GitHubMark /> View code</a>
            <a className="round-arrow" href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} repository on GitHub`}><Arrow /></a>
          </div>
        </div>
      </Reveal>
    </article>
  );
}

export function FeaturedProjects() {
  return (
    <section className="projects-section paper-texture" id="projects">
      <div className="page-shell">
        <Reveal className="section-heading projects-heading">
          <div><h2 className="display-heading">Some things<br /><span>I&apos;ve built.</span></h2></div>
          <div className="heading-aside"><p>Ideas <span>→</span> products<br /><em>One commit at a time.</em></p><a className="button button-dark" href="#contact">View All Projects <Arrow /></a></div>
        </Reveal>
        <div className="projects-grid">{homeContent.projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
      </div>
    </section>
  );
}

export function AboutSection() {
  const { about } = homeContent;
  const polaroidRef = useParallax<HTMLImageElement>(16);
  const noteRef = useParallax<HTMLImageElement>(12);

  return (
    <section className="about-section paper-texture" id="about">
      <Reveal className="page-shell about-grid">
        <div className="about-art-wrap">
          <Image ref={polaroidRef} className="about-left-asset" src={`${assetRoot}/about-left.png`} alt="Illustrated polaroid portrait of Ujjwal coding with a frog on his head." width={1210} height={1300} sizes="(max-width: 767px) 84vw, 34vw" />
        </div>
        <div className="about-copy">
          <h2 className="display-heading">{about.titleLines.map((line) => <span key={line}>{line}</span>)}</h2>
          <p className="about-description">{about.description}</p>
          <div className="about-labels">{about.labels.map((label, index) => <div key={label}><strong>{index === 0 ? "∞" : index === 1 ? "4+" : "20+"}</strong><span>{label}</span></div>)}</div>
        </div>
        <aside className="about-right-art">
          <Image ref={noteRef} className="about-right-asset" src={`${assetRoot}/about-right.png`} alt="Handwritten note listing Development, Design, Problem Solving, Good Coffee, And, and A Brighter Tomorrow." width={1067} height={1475} sizes="(max-width: 767px) 72vw, 24vw" />
        </aside>
      </Reveal>
    </section>
  );
}

export function ExperienceSection() {
  const { experience } = homeContent;
  return (
    <section className="experience-section dark-texture" id="experience">
      <Reveal className="page-shell">
        <div className="experience-grid">
          <div className="experience-entry"><Image src="/assets/company.png" alt="Company logo" width={48} height={48} className="experience-icon" /><div><h2>{experience.role}</h2><h3>{experience.company}</h3><p>{experience.description}</p></div><span className="experience-mark">{experience.period}</span></div>
          <blockquote><span aria-hidden="true">“</span><p>{experience.quote}</p><span aria-hidden="true">”</span></blockquote>
        </div>
      </Reveal>
    </section>
  );
}

export function TechStackSection() {
  const learningRef = useParallax<HTMLImageElement>(10);

  const renderIcon = (tool: { name: string; icon: string; alt: string }, suffix: string) => (
    <div className="stack-marquee-item" key={`${tool.name}-${suffix}`}>
      <TechIcon icon={tool.icon} alt={tool.alt} size={88} />
    </div>
  );

  return (
    <section className="stack-section paper-texture" id="stack">
      <div className="page-shell">
        <Reveal className="stack-heading"><div><h2 className="display-heading">Technologies<br /><span>I work with.</span></h2></div><Image ref={learningRef} className="always-learning-asset" src={decorativeAssets.alwaysLearning} alt="Always learning handwritten note." width={380} height={190} /></Reveal>
        <div className="stack-tools-note"><span>tools I like</span><b aria-hidden="true">↓</b></div>
        <Reveal className="stack-marquee">
          <div className="stack-marquee-track">
            <div className="stack-marquee-group">{homeContent.tools.map((tool) => renderIcon(tool, "a"))}</div>
            <div className="stack-marquee-group" aria-hidden="true">{homeContent.tools.map((tool) => renderIcon(tool, "b"))}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SocialMark({ label }: { label: string }) {
  return <span className="social-mark" aria-hidden="true">{label === "Email" ? "@" : label === "X" ? "𝕏" : label.slice(0, 1)}</span>;
}

export function ContactSection() {
  const { contact } = homeContent;
  return (
    <section className="contact-section dark-texture" id="contact">
      <Reveal className="page-shell contact-grid">
        <div className="contact-copy"><h2 className="display-heading">{contact.title.map((line) => <span key={line}>{line === "COOL TOGETHER." ? <><b>COOL</b> TOGETHER.</> : line}</span>)}</h2><p>{contact.description}</p><Link className="button button-light" href="/contact">Get in Touch <Arrow /></Link><div className="social-row">{contact.socials.map((social) => <a key={social} href="#contact" aria-label={`${social} placeholder`}><SocialMark label={social} /></a>)}</div></div>
      </Reveal>
    </section>
  );
}

export function PortfolioPage() {
  return <><main><HeroSection /><FeaturedProjects /><AboutSection /><ExperienceSection /><TechStackSection /><ContactSection /></main><SiteFooter /></>;
}
