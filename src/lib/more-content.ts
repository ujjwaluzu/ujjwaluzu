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
 * touched — the grid, numbering, category labels, and size automatically react
 * to this file.
 */

export type MoreVideo = {
  id: string;
  title?: string;
};

export type VideoCategory = "MUSIC" | "TECH";

export const musicVideos: MoreVideo[] = [
  {
    id: "fNtqjROpzmM",
    title: "Baawe",
  },
  {
    id: "aQszMoGtBgc",
    title: "Anish Bhaiya",
  },
  {
    id: "_2T2bccXvIw",
    title: "Me&U",
  },
  {
    id: "Oi9LPG1bFvo",
    title: "YASHIGH",
  },
  {
    id: "az4QDIeExLU",
    title: "Ghey",
  },
  {
    id: "S9wm_F5y50A",
    title: "Swag Mera Desi Remix",
  },
];

export const techVideos: MoreVideo[] = [
  {
    id: "pvPQ_UUkhbA",
    title: "CS50W - Mail",
  },
  {
    id: "0ZTboEi6qpI",
    title: "CS50w - Commerce",
  },
  {
    id: "hnYdDZRMS50",
    title: "CS50W - Wiki",
  },
  {
    id: "QwcraChO2tE",
    title: "Ghprofile",
  },
  {
    id: "gnMb-KHOqJY",
    title: "CS50W - Search",
  },
  {
    id: "qEYpCg-9B7Q",
    title: "CS50P - Final",
  },
];

export const videoCategories: { value: VideoCategory; label: string }[] = [
  { value: "MUSIC", label: "Music" },
  { value: "TECH", label: "Tech" },
];

/**
 * A placeholder id looks like "MUSIC_VIDEO_ID_1" / "TECH_VIDEO_ID_1" and
 * contains the "VIDEO_ID" marker. The moment a real 11-character YouTube id is
 * pasted in, this returns false and the iframe renders instead.
 */
export function isPlaceholderVideo(id: string): boolean {
  return id.includes("VIDEO_ID");
}