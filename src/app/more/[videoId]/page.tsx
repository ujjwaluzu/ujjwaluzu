import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SeoJsonLd } from "@/components/seo-json-ld";
import { SiteFooter } from "@/components/site-footer";
import { Arrow, SiteHeader } from "@/components/site-header";
import { homeContent } from "@/lib/home-content";
import { allVideos, getMoreVideo, getVideoCategory } from "@/lib/more-content";
import { defaultSocialImage, videoSchema } from "@/lib/seo-schema";
import { site } from "@/lib/site";

type Props = { params: Promise<{ videoId: string }> };

export function generateStaticParams() {
  return allVideos.map((video) => ({ videoId: video.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { videoId } = await params;
  const video = getMoreVideo(videoId);
  if (!video) return {};

  const videoTitle = video.title ?? "Ujjwaluzu video";
  const title = /ujjwal/i.test(videoTitle) ? videoTitle : `${videoTitle} | Ujjwal Baunthiyal`;
  const description = video.summary ?? "A video from Ujjwal Baunthiyal on the ujjwaluzu channel.";
  const url = `${site.domain}/more/${video.id}`;

  return {
    title,
    description,
    keywords: [video.title ?? "Ujjwaluzu video", "Ujjwal Baunthiyal", "ujjwaluzu", "YouTube"],
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
          alt: video.title ?? "Ujjwaluzu video",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultSocialImage, `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`],
    },
    alternates: { canonical: url },
  };
}

export default async function MoreVideoDetailPage({ params }: Props) {
  const { videoId } = await params;
  const video = getMoreVideo(videoId);
  if (!video) notFound();

  const category = getVideoCategory(video);
  const relatedProject = video.projectSlug
    ? homeContent.projects.find((project) => project.slug === video.projectSlug)
    : undefined;

  return (
    <>
      <SeoJsonLd data={videoSchema(video, category)} />
      <SiteHeader />
      <main className="more-video-detail-page">
        <section className="more-video-detail paper-texture">
          <div className="page-shell more-video-detail-inner">
            <Link className="more-video-back" href="/more">
              <span aria-hidden="true">←</span> More videos
            </Link>
            <p className="more-kicker">{category}</p>
            <h1 className="display-heading more-video-detail-title">{video.title}</h1>
            <p className="more-video-detail-summary">{video.summary}</p>
            <div className="more-video-detail-frame">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={`${video.title ?? "Ujjwaluzu video"} on YouTube`}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="more-video-detail-actions">
              <a
                className="view-github"
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on YouTube <Arrow />
              </a>
              {relatedProject && (
                <Link className="view-outline" href={`/project/${relatedProject.slug}`}>
                  Explore {relatedProject.name} <Arrow />
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
