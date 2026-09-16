import type { MetadataRoute } from "next";

import { caseStudySlugs } from "@/lib/case-studies";
import { allVideos } from "@/lib/more-content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.domain, priority: 1, changeFrequency: "monthly" },
    { url: `${site.domain}/project`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${site.domain}/more`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${site.domain}/contact`, priority: 0.6, changeFrequency: "yearly" },
  ];

  const projectRoutes = caseStudySlugs.map((slug) => ({
    url: `${site.domain}/project/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const videoRoutes = allVideos.map((video) => ({
    url: `${site.domain}/more/${video.id}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...projectRoutes, ...videoRoutes];
}
