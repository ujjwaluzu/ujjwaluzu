import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SeoJsonLd } from "@/components/seo-json-ld";
import { caseStudySlugs, getCaseStudy } from "@/lib/case-studies";
import { homeContent } from "@/lib/home-content";
import { defaultSocialImage, projectSchema } from "@/lib/seo-schema";
import { site } from "@/lib/site";

import { CommerceDetail } from "./commerce-detail";
import { GhprofileDetail } from "./ghprofile-detail";
import { MailDetail } from "./mail-detail";
import { NetworkDetail } from "./network-detail";
import { RepoTeamDetail } from "./repoteam-detail";
import { UzzutvDetail } from "./uzzutv-detail";
import { WikiDetail } from "./wiki-detail";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

const projectTitles: Record<string, string> = {
  uzzutv: "UzzUTV by Ujjwal Baunthiyal | Django Streaming Platform",
  repoteam: "RepoTeam by Ujjwal Baunthiyal | Django Project Management",
  commerce: "CS50W Commerce by Ujjwal Baunthiyal | Django Auction App",
  wiki: "CS50W Wiki by Ujjwal Baunthiyal | Django Encyclopedia",
  mail: "CS50W Mail by Ujjwal Baunthiyal | Django Email Client",
  network: "CS50W Network by Ujjwal Baunthiyal | Django Social Network",
  ghprofile: "ghprofile by Ujjwal Baunthiyal | Python GitHub Library",
};

const projectKeywords: Record<string, string[]> = {
  uzzutv: ["UzzUTV", "UzzUTV ujjwaluzu", "UzzUTV Ujjwal Baunthiyal", "UzzUTV streaming platform", "UzzUTV Django project", "UzzUTV watch party", "UzzUTV anime"],
  repoteam: ["RepoTeam", "RepoTeam ujjwaluzu", "RepoTeam Ujjwal Baunthiyal", "RepoTeam project management platform", "RepoTeam Django project", "RepoTeam MVP"],
  commerce: ["Commerce", "CS50W Commerce", "CS50W Commerce Ujjwal", "Commerce Ujjwaluzu", "Commerce Ujjwal Baunthiyal", "Django auction platform", "Django bidding project"],
  wiki: ["Wiki", "CS50W Wiki", "Wiki Ujjwaluzu", "Wiki Ujjwal Baunthiyal", "Django Wiki project", "Markdown encyclopedia Django"],
  mail: ["CS50W Mail", "Mail Ujjwaluzu", "Mail Ujjwal Baunthiyal", "Django JavaScript email client", "single-page email client Django"],
  network: ["CS50W Network", "Network Ujjwaluzu", "Network Ujjwal Baunthiyal", "Django social network", "AJAX social network Django"],
  ghprofile: ["ghprofile", "ghprofile Ujjwaluzu", "ghprofile Ujjwal Baunthiyal", "Ghprofile Python library", "GitHub profile Python library", "GitHub API Python package", "PyPI ghprofile"],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const project = homeContent.projects.find((p) => p.slug === slug);
  if (!study || !project) return {};

  const url = `${site.domain}/project/${slug}`;
  const title = projectTitles[slug] ?? `${project.name} by Ujjwal Baunthiyal | ujjwaluzu`;
  const description = study.seoDescription;
  const image = project.image ? `${site.domain}/assets/${project.image}` : defaultSocialImage;
  return {
    title,
    description,
    keywords: projectKeywords[slug] ?? [project.name, "Ujjwal Baunthiyal", "ujjwaluzu"],
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "article",
      images: [{ url: image, alt: `${project.name} project by Ujjwal Baunthiyal` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const project = homeContent.projects.find((p) => p.slug === slug);
  if (!study || !project) notFound();

  const detail = study.repoteam
    ? <RepoTeamDetail study={study} project={project} />
    : study.commerce
      ? <CommerceDetail study={study} project={project} />
      : study.wiki
        ? <WikiDetail study={study} project={project} />
        : study.mail
          ? <MailDetail study={study} project={project} />
          : study.network
            ? <NetworkDetail study={study} project={project} />
            : study.ghprofile
              ? <GhprofileDetail study={study} project={project} />
              : <UzzutvDetail study={study} project={project} />;
  return (
    <>
      <SeoJsonLd data={projectSchema(project, study)} />
      {detail}
    </>
  );
}
