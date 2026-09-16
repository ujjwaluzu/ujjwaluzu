import type { MoreVideo, VideoCategory } from "@/lib/more-content";
import type { ProjectCaseStudy } from "@/lib/case-studies";
import type { homeContent } from "@/lib/home-content";
import { site } from "@/lib/site";

type Project = (typeof homeContent.projects)[number];

export const defaultSocialImage = `${site.domain}/assets/ujjwal-character.webp`;

export function personSchema() {
  return {
    "@type": "Person",
    "@id": `${site.domain}/#ujjwal-baunthiyal`,
    name: "Ujjwal Baunthiyal",
    alternateName: ["Ujjwal", "ujjwaluzu"],
    url: site.domain,
    jobTitle: "Web Developer",
    worksFor: { "@type": "Organization", name: "IntelligenceX" },
    sameAs: [site.socials.github, site.socials.linkedin, site.socials.x],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function projectSchema(project: Project, study: ProjectCaseStudy) {
  const image = project.image ? `${site.domain}/assets/${project.image}` : undefined;
  const projectUrl = `${site.domain}/project/${project.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${projectUrl}#webpage`,
        url: projectUrl,
        name: `${project.name} by Ujjwal Baunthiyal`,
        description: study.seoDescription,
        isPartOf: { "@id": `${site.domain}/#website` },
        about: { "@id": `${projectUrl}#software` },
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": `${projectUrl}#software`,
        name: project.name,
        description: study.seoDescription,
        url: projectUrl,
        codeRepository: project.githubUrl,
        creator: { "@id": `${site.domain}/#ujjwal-baunthiyal` },
        author: { "@id": `${site.domain}/#ujjwal-baunthiyal` },
        programmingLanguage: study.heroTechs,
        keywords: [project.name, "Ujjwal Baunthiyal", "ujjwaluzu", ...project.technologies],
        ...(image ? { image } : {}),
      },
      breadcrumbSchema([
        { name: "Home", url: site.domain },
        { name: "Projects", url: `${site.domain}/project` },
        { name: project.name, url: projectUrl },
      ]),
    ],
  };
}

export function videoSchema(video: MoreVideo, category: VideoCategory) {
  const videoUrl = `${site.domain}/more/${video.id}`;
  const watchUrl = `https://www.youtube.com/watch?v=${video.id}`;
  const description = video.summary ?? `${category === "MUSIC" ? "Music" : "Technology"} video by Ujjwal Baunthiyal.`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        "@id": `${videoUrl}#video`,
        name: video.title ?? "Ujjwaluzu video",
        description,
        url: videoUrl,
        contentUrl: watchUrl,
        embedUrl: `https://www.youtube.com/embed/${video.id}`,
        thumbnailUrl: [`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`],
        publisher: { "@id": `${site.domain}/#ujjwal-baunthiyal` },
        creator: { "@id": `${site.domain}/#ujjwal-baunthiyal` },
        isPartOf: { "@id": `${site.domain}/more#collection` },
      },
      breadcrumbSchema([
        { name: "Home", url: site.domain },
        { name: "More", url: `${site.domain}/more` },
        { name: video.title ?? "Video", url: videoUrl },
      ]),
    ],
  };
}
