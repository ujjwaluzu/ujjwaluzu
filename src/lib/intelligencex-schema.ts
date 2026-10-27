import { intelligencexContent as content, intelligencexSources } from "@/lib/intelligencex-content";
import { homeContent } from "@/lib/home-content";
import { breadcrumbSchema, personSchema, websiteSchema } from "@/lib/seo-schema";
import { site } from "@/lib/site";

export const intelligencexId = `${homeContent.experience.companyUrl}/#organization`;

export function intelligencexOrganizationSchema() {
  return { "@type": "Organization", "@id": intelligencexId, name: homeContent.experience.company, url: homeContent.experience.companyUrl };
}

export function experienceProductId(slug: string) {
  return `${site.domain}${content.path}/${slug}#product`;
}

export function intelligencexGuideSchema() {
  const url = `${site.domain}${content.path}`;
  const author = { "@id": `${site.domain}/#ujjwal-baunthiyal` };
  const platforms = content.platforms.map((platform) => ({
    "@type": "Thing",
    "@id": content.projects.some((project) => project.slug === platform.slug)
      ? experienceProductId(platform.slug) : `${url}#platform-${platform.slug}`,
    name: platform.name,
    url: content.projects.find((project) => project.slug === platform.slug)?.url ?? platform.url,
    description: platform.purpose,
    subjectOf: { "@type": "WebPage", url: platform.url },
  }));
  return {
    "@context": "https://schema.org",
    "@graph": [
      personSchema(), websiteSchema(), intelligencexOrganizationSchema(),
      {
        "@type": "WebPage", "@id": `${url}#webpage`,
        url, name: content.title, description: content.description,
        inLanguage: "en", dateModified: content.updated,
        isPartOf: { "@id": `${site.domain}/#website` },
        author, publisher: author, about: { "@id": intelligencexId },
        mentions: platforms.map((platform) => ({ "@id": platform["@id"] })),
        citation: [...Object.values(intelligencexSources).map((source) => source.url), ...content.platforms.map((platform) => platform.url)],
        relatedLink: content.projects.map((project) => `${url}/${project.slug}`),
        breadcrumb: { "@id": `${url}#breadcrumbs` },
        primaryImageOfPage: { "@type": "ImageObject", url: `${site.domain}${content.socialImage}`, width: 1200, height: 630, caption: content.socialImageAlt },
      },
      ...platforms,
      {
        ...breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Experience", url: `${site.domain}/experience` },
          { name: "IntelligenceX", url },
        ]),
        "@id": `${url}#breadcrumbs`,
      },
    ],
  };
}
