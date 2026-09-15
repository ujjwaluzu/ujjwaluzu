"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { Monogram } from "@/components/monogram";
import { decorativeAssets } from "@/lib/decorative-assets";
import { homeContent } from "@/lib/home-content";

const assetRoot = "/assets";

function Arrow() {
  return <span className="button-arrow" aria-hidden="true">→</span>;
}

function SectionEyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`section-eyebrow ${light ? "section-eyebrow-light" : ""}`}><span aria-hidden="true" />{children}</p>;
}

export function SiteHeader() {
  const links = ["About", "Projects", "Experience", "Contact"];
  const [isHiddenWhileScrolling, setIsHiddenWhileScrolling] = useState(false);
  const lastScrollY = useRef(0);
  const scrollStopTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const revealHeader = () => {
      setIsHiddenWhileScrolling(false);
      scrollStopTimer.current = undefined;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current && currentScrollY > 72;

      setIsHiddenWhileScrolling(isScrollingDown);
      lastScrollY.current = currentScrollY;

      if (scrollStopTimer.current) window.clearTimeout(scrollStopTimer.current);
      scrollStopTimer.current = window.setTimeout(revealHeader, 180);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollStopTimer.current) window.clearTimeout(scrollStopTimer.current);
    };
  }, []);

  return (
    <header className={`site-header${isHiddenWhileScrolling ? " is-hidden-while-scrolling" : ""}`}>
      <a href="#top" className="brand-lockup" aria-label="ujjwaluzu home">
        <Image className="brand-favicon" src={`${assetRoot}/faviconicon.png`} alt="" width={1254} height={1254} priority />
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <a className="active" href="#top">Home</a>
        {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}
      </nav>

      <a className="button button-dark header-cta" href="#contact">Let&apos;s Talk <Arrow /></a>

      <details className="mobile-menu">
        <summary aria-label="Open navigation"><span /><span /><span /></summary>
        <nav aria-label="Mobile navigation">
          <a href="#top">Home</a>
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}
          <a className="button button-dark" href="#contact">Let&apos;s Talk <Arrow /></a>
        </nav>
      </details>
    </header>
  );
}

function HeroDecoration() {
  return (
    <div className="hero-decorations" aria-hidden="true">
      <Image className="hero-asset hero-asset-build" src={decorativeAssets.heroStickyBuild} width={220} height={285} alt="" />
      <Image className="hero-asset hero-asset-bigger" src={decorativeAssets.heroStickyBiggerThings} width={225} height={205} alt="" />
      <Image className="hero-asset hero-asset-good" src={decorativeAssets.heroGoodIdeas} width={250} height={245} alt="" />
      <Image className="hero-asset hero-asset-coding" src={decorativeAssets.heroCodingDoodle} width={195} height={205} alt="" />
    </div>
  );
}

export function HeroSection() {
  const { hero } = homeContent;
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

function ToolMark({ tool }: { tool: string }) {
  const initial = tool === "Tailwind CSS" ? "~" : tool === "MongoDB" ? "◆" : tool.slice(0, 2);
  return <span className={`tool-mark tool-${tool.toLowerCase().replace(/[^a-z]/g, "-")}`}>{initial}</span>;
}

export function TechnologyStrip() {
  return (
    <section className="tool-strip paper-texture" aria-label="Tools I love">
      <div className="page-shell tool-strip-inner">
        <div className="tool-intro"><span>tools I love</span><b aria-hidden="true">↘</b></div>
        <div className="tool-list">
          {homeContent.tools.map((tool) => <div className="tool-item" key={tool}><ToolMark tool={tool} /><span>{tool}</span></div>)}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ accent, mark }: { accent: string; mark: string }) {
  return (
    <div className={`project-visual project-visual-${accent}`} aria-hidden="true">
      <div className="visual-window"><span /><span /><span /></div>
      <strong>{mark}</strong>
      <div className="visual-lines"><i /><i /><i /></div>
      {accent === "sky" && <div className="visual-modal"><b>↗</b><span /><span /><span /></div>}
      {accent === "charcoal" && <div className="visual-play">▶</div>}
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof homeContent.projects[number]; index: number }) {
  return (
    <article className={`project-card project-card-${index + 1}`}>
      <ProjectVisual accent={project.accent} mark={project.mark} />
      <div className="project-card-body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <a href="#contact" className="round-arrow" aria-label={`Learn more about ${project.name}`}><Arrow /></a>
      </div>
    </article>
  );
}

export function FeaturedProjects() {
  return (
    <section className="projects-section paper-texture" id="projects">
      <div className="page-shell">
        <div className="section-heading projects-heading">
          <div><SectionEyebrow>FEATURED PROJECTS</SectionEyebrow><h2 className="display-heading">Some things<br /><span>I&apos;ve built.</span><i aria-hidden="true">✦</i></h2></div>
          <div className="heading-aside"><p>Ideas <span>→</span> products<br /><em>One commit at a time.</em></p><a className="button button-dark" href="#contact">View All Projects <Arrow /></a></div>
        </div>
        <div className="projects-grid">{homeContent.projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
      </div>
    </section>
  );
}

export function AboutSection() {
  const { about } = homeContent;
  return (
    <section className="about-section paper-texture" id="about">
      <div className="page-shell about-grid">
        <div className="about-art-wrap">
          <Image className="about-left-asset" src={`${assetRoot}/about-left.png`} alt="Illustrated polaroid portrait of Ujjwal coding with a frog on his head." width={1210} height={1300} sizes="(max-width: 767px) 84vw, 34vw" />
        </div>
        <div className="about-copy">
          <SectionEyebrow>{about.eyebrow}</SectionEyebrow>
          <h2 className="display-heading">{about.titleLines.map((line) => <span key={line}>{line}</span>)}<i aria-hidden="true">✦</i></h2>
          <p className="about-description">{about.description}</p>
          <div className="about-labels">{about.labels.map((label, index) => <div key={label}><strong>{index === 0 ? "∞" : index === 1 ? "✦" : "↗"}</strong><span>{label}</span></div>)}</div>
        </div>
        <aside className="about-right-art">
          <Image className="about-right-asset" src={`${assetRoot}/about-right.png`} alt="Handwritten note listing Development, Design, Problem Solving, Good Coffee, And, and A Brighter Tomorrow." width={1067} height={1475} sizes="(max-width: 767px) 72vw, 24vw" />
        </aside>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  const { experience } = homeContent;
  return (
    <section className="experience-section dark-texture" id="experience">
      <div className="page-shell">
        <SectionEyebrow light>{experience.eyebrow}</SectionEyebrow>
        <div className="experience-grid">
          <div className="experience-entry"><div className="experience-icon" aria-hidden="true">⌘</div><div><h2>{experience.role}</h2><h3>{experience.company}</h3><p>{experience.description}</p></div><span className="experience-mark">now</span></div>
          <blockquote><span aria-hidden="true">“</span><p>{experience.quote}</p><span aria-hidden="true">”</span></blockquote>
        </div>
      </div>
    </section>
  );
}

export function TechStackSection() {
  return (
    <section className="stack-section paper-texture" id="stack">
      <div className="page-shell">
        <div className="stack-heading"><div><SectionEyebrow>MY TECH STACK</SectionEyebrow><h2 className="display-heading">Technologies<br /><span>I work with.</span><i aria-hidden="true">✦</i></h2></div><Image className="always-learning-asset" src={decorativeAssets.alwaysLearning} alt="Always learning handwritten note." width={380} height={190} /></div>
        <div className="stack-grid">{homeContent.tools.map((tool) => <div className="stack-card" key={tool}><ToolMark tool={tool} /><span>{tool}</span></div>)}</div>
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
      <div className="page-shell contact-grid">
        <div className="contact-copy"><SectionEyebrow light>{contact.eyebrow}</SectionEyebrow><h2 className="display-heading">{contact.title.map((line) => <span key={line}>{line === "COOL TOGETHER." ? <><b>COOL</b> TOGETHER.</> : line}</span>)}</h2><p>{contact.description}</p><a className="button button-light" href="#top">Get in Touch <Arrow /></a><div className="social-row">{contact.socials.map((social) => <a key={social} href="#contact" aria-label={`${social} placeholder`}><SocialMark label={social} /></a>)}</div></div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="page-shell footer-inner"><a href="#top" className="footer-brand"><Monogram className="brand-monogram" /><span>{homeContent.identity.brand}</span></a><span>© 2026 Ujjwaluzu</span><span>Built with curiosity.</span></div></footer>;
}

export function PortfolioPage() {
  return <><main><HeroSection /><TechnologyStrip /><FeaturedProjects /><AboutSection /><ExperienceSection /><TechStackSection /><ContactSection /></main><SiteFooter /></>;
}
