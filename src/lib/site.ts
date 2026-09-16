export const site = {
  name: "ujjwaluzu",
  domain: "https://ujjwaluzu.in",
  description:
    "Ujjwal Baunthiyal is a web developer exploring ideas, building products, and turning concepts into real experiences.",

  /**
   * Social profiles.
   *
   * Every handle is the "ujjwaluzu" username, e.g. github.com/ujjwaluzu.
   * Links that still contain "YOUR-HANDLE" are treated as "not set yet"
   * and are rendered muted/non-interactive on the page.
   */
  socials: {
    linkedin: "https://www.linkedin.com/in/ujjwaluzu",
    x: "https://x.com/ujjwaluzu",
    github: "https://github.com/ujjwaluzu",
    instagram: "https://www.instagram.com/repouzu",
  },
} as const;

export type SocialId = keyof typeof site.socials;

/** Display names, kept next to the URLs for aria-labels and headings. */
export const socialLabels: Record<SocialId, string> = {
  linkedin: "LinkedIn",
  x: "X",
  github: "GitHub",
  instagram: "Instagram",
};

export function isSocialAvailable(url: string | null | undefined): boolean {
  return Boolean(url) && !url!.includes("YOUR-HANDLE");
}
