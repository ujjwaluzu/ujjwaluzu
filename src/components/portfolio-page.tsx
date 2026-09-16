"use client";

import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { GitHubMark } from "@/components/icons";
import { socialIcons } from "@/components/social-links";
import { Arrow, SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { decorativeAssets } from "@/lib/decorative-assets";
import { homeContent } from "@/lib/home-content";
import { site, socialLabels } from "@/lib/site";
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
            <a className="button button-outline" href="#about">About Me <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-art">
          <HeroDecoration />
          <Image
            ref={characterRef}
            className="character character-hero"
            src={`${assetRoot}/hero-char.webp`}
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

const MAX_VISIBLE_TAGS = 5;

function ProjectCard({ project, index }: { project: typeof homeContent.projects[number]; index: number }) {
  const visibleTags = project.technologies.slice(0, MAX_VISIBLE_TAGS);
  const hiddenCount = project.technologies.length - MAX_VISIBLE_TAGS;

  return (
    <article className={`project-card project-card-${index + 1}`}>
      <Reveal delayMs={index * 70}>
        <div className={`project-visual project-visual-${project.theme}`} aria-hidden="true">
          <div className="project-visual-inner">
            <Image
              src={`${assetRoot}/${project.image}`}
              alt=""
              fill
              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 340px, 285px"
              className="project-shot"
            />
          </div>
        </div>
        <div className="project-card-body">
          <div>
            <span className={`project-label${project.category === "MVP" ? " project-label--green" : project.category === "Streaming platform" ? " project-label--warm" : ""}`}>{project.category}</span>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tag-list">
              {visibleTags.map((tag) => <span key={tag}>{tag}</span>)}
              {hiddenCount > 0 && <span className="tag-more">+{hiddenCount} more</span>}
            </div>
          </div>
          <div className="project-links">
            <a
              className="github-link"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} source code on GitHub`}
              onClick={(e) => e.stopPropagation()}
            >
              <GitHubMark /> View code
            </a>
            <Link
              className="round-arrow"
              href="/project"
              aria-label={`View ${project.name} project details`}
              onClick={(e) => e.stopPropagation()}
            >
              <Arrow />
            </Link>
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
          <div className="heading-aside"><p>Ideas <span>→</span> products<br /><em>One commit at a time.</em></p><Link className="button button-dark" href="/project">View All Projects <Arrow /></Link></div>
        </Reveal>
        <div className="projects-grid">{homeContent.projects.slice(0, 4).map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
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
          <Image ref={polaroidRef} className="about-left-asset" src={`${assetRoot}/about-left.webp`} alt="Illustrated polaroid portrait of Ujjwal coding with a frog on his head." width={1210} height={1300} sizes="(max-width: 767px) 84vw, 34vw" />
        </div>
        <div className="about-copy">
          <h2 className="display-heading">{about.titleLines.map((line) => <span key={line}>{line}</span>)}</h2>
          <p className="about-description">{about.description}</p>
          <div className="about-labels">{about.labels.map((label, index) => <div key={label}><strong>{index === 0 ? "∞" : index === 1 ? "4+" : "20+"}</strong><span>{label}</span></div>)}</div>
        </div>
        <aside className="about-right-art">
          <Image ref={noteRef} className="about-right-asset" src={`${assetRoot}/about-right.webp`} alt="Handwritten note listing Development, Design, Problem Solving, Good Coffee, And, and A Brighter Tomorrow." width={1067} height={1475} sizes="(max-width: 767px) 72vw, 24vw" />
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
          <div className="experience-entry"><Image src="/assets/company.webp" alt="Company logo" width={48} height={48} className="experience-icon" /><div><h2>{experience.role}</h2><h3>{experience.company}</h3><p>{experience.description}</p></div><span className="experience-mark">{experience.period}</span></div>
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

export function MorePreviewSection() {
  return (
    <section className="more-preview paper-texture" id="more">
      <div className="page-shell">
        <Reveal className="more-preview-grid">
          <div className="more-preview-copy">
            <p className="more-preview-kicker">beyond the code editor ✎</p>
            <h2 className="display-heading">More than<br /><span>code.</span></h2>
            <p className="more-preview-text">A few things I&apos;m into when I&apos;m not building things.</p>
            <div className="more-preview-actions">
              <Link className="button button-dark" href="/more">MORE <Arrow /></Link>
              <span className="more-preview-hint">no readme required</span>
            </div>
          </div>
          <div className="more-preview-art" aria-hidden="true">
            <div className="more-preview-card">
              <span className="more-preview-card-tape" />
              <b>THE OTHER<br />50%</b>
              <span className="more-preview-card-list">music · tech · coffee · anything interesting</span>
              <span className="more-preview-card-play">▶</span>
            </div>
            <span className="more-doodle more-doodle-arrow">→</span>
            <span className="more-doodle more-doodle-note">♪</span>
            <span className="more-doodle more-doodle-star">✶</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactSection() {
  const { contact } = homeContent;
  return (
    <section className="contact-section dark-texture" id="contact">
      <Reveal className="page-shell contact-grid">
        <div className="contact-copy"><h2 className="display-heading">{contact.title.map((line) => <span key={line}>{line === "COOL TOGETHER." ? <><b>COOL</b> TOGETHER.</> : line}</span>)}</h2><p>{contact.description}</p><Link className="button button-light" href="/contact">Get in Touch <Arrow /></Link><nav className="social-row" aria-label="Social profiles">{contact.socials.map((id) => { const Icon = socialIcons[id]; return <a key={id} href={site.socials[id]} target="_blank" rel="noopener noreferrer" aria-label={socialLabels[id]}><Icon /></a>; })}</nav></div>
      </Reveal>
    </section>
  );
}

export function PortfolioPage() {
  return (
    <>
      <main>
        <HeroSection />
        <FeaturedProjects />
        <AboutSection />
        <ExperienceSection />
        <TechStackSection />
        <MorePreviewSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
