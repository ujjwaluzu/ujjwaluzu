export const site = {
  name: "ujjwaluzu",
  domain: "https://ujjwaluzu.in",
  description:
    "A space to share my journey, projects, ideas and more. Something meaningful is on the way.",

  /**
   * Social profiles.
   *
   * Replace the placeholder values below with your real profile URLs.
   * Links that still contain "YOUR-HANDLE" are treated as "not set yet"
   * and are rendered muted/non-interactive on the page.
   */
  socials: {
    linkedin: "https://www.linkedin.com/in/ujjwaluzu", 
    github: "https://github.com/ujjwaluzu", 
    instagram: "https://www.instagram.com/repouzu", 
  },
} as const;

export function isSocialAvailable(url: string | null | undefined): boolean {
  return Boolean(url) && !url!.includes("YOUR-HANDLE");
}