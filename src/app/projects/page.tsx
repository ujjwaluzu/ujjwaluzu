import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { homeContent } from "@/lib/home-content";

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="projects-page">
        <section className="projects-hero">
          <div className="page-shell">
            <h1 className="display-heading">
              All <span>Projects.</span>
            </h1>
            <p>A collection of things I&apos;ve built, explored, and shipped.</p>
          </div>
        </section>
        <section className="projects-list paper-texture">
          <div className="page-shell">
            {homeContent.projects.map((project) => (
              <article key={project.name} className="project-list-item">
                <div>
                  <span className="project-label">{project.category}</span>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.technologies.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <a
                  className="button button-dark"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub <span className="button-arrow" aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
