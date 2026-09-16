"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  isPlaceholderVideo,
  musicVideos,
  techVideos,
  videoCategories,
} from "@/lib/more-content";
import type { MoreVideo, VideoCategory } from "@/lib/more-content";

function YouTubeCard({
  video,
  index,
  category,
}: {
  video: MoreVideo;
  index: number;
  category: VideoCategory;
}) {
  const isPlaceholder = isPlaceholderVideo(video.id);

  return (
    <article className="more-video">
      <p className="more-video-label">
        <span className="more-video-num" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span>/ {category}</span>
      </p>
      {video.title && <h3 className="more-video-title">{video.title}</h3>}
      <div className="more-video-frame">
        {isPlaceholder ? (
          <div className="more-video-placeholder">
            <span className="more-video-placeholder-icon" aria-hidden="true">▶</span>
            <b>YOUTUBE</b>
            <i>video coming soon</i>
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}`}
            title={`${video.title ?? "Video"} on YouTube`}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
      </div>
    </article>
  );
}

export function MorePage() {
  const [category, setCategory] = useState<VideoCategory>("MUSIC");
  const videos = category === "MUSIC" ? musicVideos : techVideos;

  return (
    <>
      <SiteHeader />
      <main className="more-page">
        <section className="more-hero paper-texture">
          <div className="page-shell more-hero-inner">
            <div className="more-hero-copy">
              <p className="more-kicker">A LITTLE EXTRA</p>
              <h1 className="display-heading more-hero-title">
                <span>More than</span>
                <span>code.</span>
              </h1>
              <p className="more-hero-subtitle">Not everything here needs a README.</p>
            </div>
            <div className="more-hero-art">
              <Image
                className="more-hero-character"
                src="/assets/ujjwal-character.png"
                alt="Illustrated portrait of Ujjwal with a frog on his head"
                width={1254}
                height={1254}
                priority
                sizes="(max-width: 767px) 72vw, (max-width: 1000px) 42vw, 32vw"
              />
              <div className="more-hero-doodles" aria-hidden="true">
              <span className="more-doodle more-doodle-star">✶</span>
              <span className="more-doodle more-doodle-note">♪</span>
              <span className="more-doodle more-doodle-play">▶</span>
            </div>
            </div>
          </div>
        </section>

        <section className="more-media paper-texture" id="youtube">
          <div className="page-shell">
            <Reveal className="more-media-head">
              <div>
                <h2 className="display-heading">YOUTUBE.</h2>
                <p>Things you should listen to. Things you can learn from.</p>
              </div>
            </Reveal>

            <div className="more-toggle" role="group" aria-label="Choose video category">
              {videoCategories.map((item) => {
                const isActive = category === item.value;
                return (
                  <button
                    key={item.value}
                    className={`more-toggle-button${isActive ? " is-active" : ""}`}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setCategory(item.value)}
                  >
                    {item.value}
                  </button>
                );
              })}
            </div>

            <div
              className="more-video-grid"
              key={category}
              role="region"
              aria-live="polite"
              aria-label={`${category} videos`}
            >
              {videos.map((video, index) => (
                <YouTubeCard
                  key={video.id}
                  video={video}
                  index={index}
                  category={category}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="more-closing dark-texture">
          <div className="page-shell">
            <Reveal className="more-closing-inner">
              <h2 className="display-heading">
                That&apos;s the
                <br />
                extra stuff.
              </h2>
              <p>Back to building things.</p>
              <Link className="more-back-home" href="/">
                <span aria-hidden="true">←</span> Back home
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
