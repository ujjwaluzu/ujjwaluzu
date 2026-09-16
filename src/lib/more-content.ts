/**
 * Video data for the /more page.
 *
 * To update the videos, only edit the arrays below. For each video you only
 * need:
 *
 *   {
 *     id: "youtube-video-id",
 *     title: "Some title"
 *   }
 *
 * A real YouTube video ID is exactly 11 characters. Nothing else needs to be
 * touched - the grid, numbering, category labels, and size automatically react
 * to this file.
 */

export type MoreVideo = {
  id: string;
  title?: string;
  summary?: string;
  projectSlug?: string;
};

export type VideoCategory = "MUSIC" | "TECH";

export const musicVideos: MoreVideo[] = [
  {
    id: "fNtqjROpzmM",
    title: "Baawe prod. by @prodevanson | Ujjwaluzu",
    summary: "A music video from Ujjwaluzu.",
  },
  {
    id: "aQszMoGtBgc",
    title: "Anish Bhaiya prod. by @ihatednasty | Ujjwaluzu",
    summary: "A music video from Ujjwaluzu.",
  },
  {
    id: "_2T2bccXvIw",
    title: "Me&U | Ujjwaluzu",
    summary: "A music video from Ujjwaluzu.",
  },
  {
    id: "Oi9LPG1bFvo",
    title: "YASHIGH | Ujjwaluzu",
    summary: "A music video from Ujjwaluzu.",
  },
  {
    id: "az4QDIeExLU",
    title: "Ghey - Anish Samanta Diss",
    summary: "A music video from the Ujjwaluzu channel.",
  },
  {
    id: "S9wm_F5y50A",
    title: "Swag Mera Desi Remix",
    summary: "A music video from the Ujjwaluzu channel.",
  },
];

export const techVideos: MoreVideo[] = [
  {
    id: "pvPQ_UUkhbA",
    title: "CS50W - Mail | Ujjwal Baunthiyal",
    summary: "A CS50W Mail project video by Ujjwal Baunthiyal.",
    projectSlug: "mail",
  },
  {
    id: "0ZTboEi6qpI",
    title: "CS50w - Commerce | Ujjwal Baunthiyal",
    summary: "A CS50W Commerce project video by Ujjwal Baunthiyal.",
    projectSlug: "commerce",
  },
  {
    id: "hnYdDZRMS50",
    title: "CS50W - Wiki | Ujjwal Baunthiyal",
    summary: "A CS50W Wiki project video by Ujjwal Baunthiyal.",
    projectSlug: "wiki",
  },
  {
    id: "QwcraChO2tE",
    title: "Ghprofile - A Python LibRARY | Ujjwal baunthiyal",
    summary: "A ghprofile Python library video by Ujjwal Baunthiyal.",
    projectSlug: "ghprofile",
  },
  {
    id: "gnMb-KHOqJY",
    title: "CS50W - Search | Ujjwal baunthiyal",
    summary: "A CS50W project video by Ujjwal Baunthiyal.",
  },
  {
    id: "qEYpCg-9B7Q",
    title: "CS50P - Final | ujjwal baunthiyal",
    summary: "A CS50P project video by Ujjwal Baunthiyal.",
  },
];

export const videoCategories: { value: VideoCategory; label: string }[] = [
  { value: "MUSIC", label: "Music" },
  { value: "TECH", label: "Tech" },
];

export const allVideos = [...musicVideos, ...techVideos];

export function getMoreVideo(id: string): MoreVideo | undefined {
  return allVideos.find((video) => video.id === id);
}

export function getVideoCategory(video: MoreVideo): VideoCategory {
  return musicVideos.some((musicVideo) => musicVideo.id === video.id) ? "MUSIC" : "TECH";
}

/**
 * A placeholder id looks like "MUSIC_VIDEO_ID_1" / "TECH_VIDEO_ID_1" and
 * contains the "VIDEO_ID" marker. The moment a real 11-character YouTube id is
 * pasted in, this returns false and the iframe renders instead.
 */
export function isPlaceholderVideo(id: string): boolean {
  return id.includes("VIDEO_ID");
}
