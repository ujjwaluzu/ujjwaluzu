import type { Metadata } from "next";
import Link from "next/link";

import { GitHubMark } from "@/components/icons";
import { SeoJsonLd } from "@/components/seo-json-ld";
import { Arrow, SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { homeContent } from "@/lib/home-content";
import { defaultSocialImage, breadcrumbSchema, personSchema } from "@/lib/seo-schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects by Ujjwal Baunthiyal | ujjwaluzu",
  description: "Explore UzzUTV, RepoTeam, Commerce, Wiki, Mail, Network, and ghprofile projects built by web developer Ujjwal Baunthiyal.",
  keywords: [
    "Ujjwal Baunthiyal projects",
    "ujjwaluzu projects",
    "UzzUTV",
    "RepoTeam",
    "CS50W Commerce",
    "CS50W Wiki",
    "CS50W Mail",
    "CS50W Network",
    "ghprofile",
  ],
  openGraph: {
    title: "Projects by Ujjwal Baunthiyal | ujjwaluzu",
    description: "Explore the web applications and Python library built by Ujjwal Baunthiyal.",
    url: `${site.domain}/project`,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [{ url: defaultSocialImage, alt: "Ujjwal Baunthiyal illustrated portrait" }],
  },
  twitter: {
    card: "summary",
    title: "Projects by Ujjwal Baunthiyal | ujjwaluzu",
    description: "Explore the web applications and Python library built by Ujjwal Baunthiyal.",
    images: [defaultSocialImage],
  },
  alternates: {
    canonical: `${site.domain}/project`,
  },
};

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${site.domain}/project#collection`,
      url: `${site.domain}/project`,
      name: "Projects by Ujjwal Baunthiyal",
      description: metadata.description,
      author: personSchema(),
    },
    {
      "@type": "ItemList",
      name: "Ujjwal Baunthiyal project portfolio",
      itemListElement: homeContent.projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.name,
        url: `${site.domain}/project/${project.slug}`,
      })),
    },
    breadcrumbSchema([
      { name: "Home", url: site.domain },
      { name: "Projects", url: `${site.domain}/project` },
    ]),
  ],
};

export default function ProjectArchivePage() {
  return (
    <>
      <SeoJsonLd data={projectsJsonLd} />
      <SiteHeader />
      <main className="project-page">
        <section className="project-hero paper-texture">
          <div className="page-shell project-hero-inner">
            <div className="project-hero-copy">
              <h1 className="display-heading project-hero-title">
                ALL <span>PROJECTS.</span>
              </h1>
              <p className="project-hero-subtitle">A collection of things I&apos;ve built, explored, and shipped.</p>
            </div>
            <aside className="project-hero-notes" aria-hidden="true">
              <p className="project-hero-note project-note-build">
                BUILD<br />LEARN<br />SHIP<br />REPEAT
              </p>
              <p className="project-hero-note project-note-ideas">
                SOME IDEAS<br />TURN INTO PROJECTS.<br />SOME PROJECTS<br />TURN INTO OPPORTUNITIES.
              </p>
            </aside>
          </div>
        </section>
        <section className="project-archive">
          <div className="page-shell">
            {homeContent.projects.map((project, index) => (
              <article key={project.slug} className="project-row">
                <div className="project-row-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="project-row-main">
                  <span className={`project-badge${project.category === "MVP" ? " project-badge--green" : project.category === "Streaming platform" ? " project-badge--warm" : ""}`}>{project.category}</span>
                  <h2 className="project-row-title">{project.name}</h2>
                  <p className="project-row-desc">{project.description}</p>
                  <ul className="project-row-tags">
                    {project.technologies.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-row-actions">
                  <a
                    className="view-github"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} source code on GitHub`}
                  >
                    <GitHubMark /> View on GitHub <Arrow />
                  </a>
                  <Link
                    className="round-arrow"
                    href={`/project/${project.slug}`}
                    aria-label={`View ${project.name} project details`}
                  >
                    <Arrow />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
