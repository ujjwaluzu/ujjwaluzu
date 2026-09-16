import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { caseStudySlugs, getCaseStudy } from "@/lib/case-studies";
import { homeContent } from "@/lib/home-content";
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const project = homeContent.projects.find((p) => p.slug === slug);
  if (!study || !project) return {};

  const url = `${site.domain}/project/${slug}`;
  const title = `${project.name} — Ujjwal Baunthiyal`;
  const description = study.seoDescription;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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

  if (study.repoteam) return <RepoTeamDetail study={study} project={project} />;
  if (study.commerce) return <CommerceDetail study={study} project={project} />;
  if (study.wiki) return <WikiDetail study={study} project={project} />;
  if (study.mail) return <MailDetail study={study} project={project} />;
  if (study.network) return <NetworkDetail study={study} project={project} />;
  if (study.ghprofile) return <GhprofileDetail study={study} project={project} />;
  return <UzzutvDetail study={study} project={project} />;
}