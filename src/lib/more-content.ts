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
  uploadDate: string;
  projectSlug?: string;
};

export type VideoCategory = "MUSIC" | "TECH";

export const musicVideos: MoreVideo[] = [
  {
    id: "fNtqjROpzmM",
    title: "Baawe prod. by @prodevanson | Ujjwaluzu",
    summary: "A music video from Ujjwaluzu.",
    uploadDate: "2026-06-03T07:13:56-07:00",
  },
  {
    id: "aQszMoGtBgc",
    title: "Anish Bhaiya prod. by @ihatednasty | Ujjwaluzu",
    summary: "A music video from Ujjwaluzu.",
    uploadDate: "2026-05-27T04:30:06-07:00",
  },
  {
    id: "_2T2bccXvIw",
    title: "Me&U | Ujjwaluzu",
    summary: "A music video from Ujjwaluzu.",
    uploadDate: "2025-12-30T05:30:06-08:00",
  },
  {
    id: "Oi9LPG1bFvo",
    title: "YASHIGH | Ujjwaluzu",
    summary: "A music video from Ujjwaluzu.",
    uploadDate: "2025-12-24T04:52:23-08:00",
  },
  {
    id: "az4QDIeExLU",
    title: "Ghey - Anish Samanta Diss",
    summary: "A music video from the Ujjwaluzu channel.",
    uploadDate: "2023-10-12T04:20:57-07:00",
  },
  {
    id: "S9wm_F5y50A",
    title: "Swag Mera Desi Remix",
    summary: "A music video from the Ujjwaluzu channel.",
    uploadDate: "2019-04-24T05:55:56-07:00",
  },
];

export const techVideos: MoreVideo[] = [
  {
    id: "pvPQ_UUkhbA",
    title: "CS50W - Mail | Ujjwal Baunthiyal",
    summary: "A CS50W Mail project video by Ujjwal Baunthiyal.",
    uploadDate: "2026-03-02T19:45:06-08:00",
    projectSlug: "mail",
  },
  {
    id: "0ZTboEi6qpI",
    title: "CS50w - Commerce | Ujjwal Baunthiyal",
    summary: "A CS50W Commerce project video by Ujjwal Baunthiyal.",
    uploadDate: "2026-02-22T19:45:06-08:00",
    projectSlug: "commerce",
  },
  {
    id: "hnYdDZRMS50",
    title: "CS50W - Wiki | Ujjwal Baunthiyal",
    summary: "A CS50W Wiki project video by Ujjwal Baunthiyal.",
    uploadDate: "2026-02-16T03:25:44-08:00",
    projectSlug: "wiki",
  },
  {
    id: "QwcraChO2tE",
    title: "Ghprofile - A Python LibRARY | Ujjwal baunthiyal",
    summary: "A ghprofile Python library video by Ujjwal Baunthiyal.",
    uploadDate: "2025-08-07T01:30:15-07:00",
    projectSlug: "ghprofile",
  },
  {
    id: "gnMb-KHOqJY",
    title: "CS50W - Search | Ujjwal baunthiyal",
    summary: "A CS50W project video by Ujjwal Baunthiyal.",
    uploadDate: "2025-08-05T08:54:07-07:00",
  },
  {
    id: "qEYpCg-9B7Q",
    title: "CS50P - Final | ujjwal baunthiyal",
    summary: "A CS50P project video by Ujjwal Baunthiyal.",
    uploadDate: "2025-07-23T10:31:31-07:00",
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
