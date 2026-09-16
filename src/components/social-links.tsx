import type { ComponentType } from "react";

import { isSocialAvailable, site, socialLabels } from "@/lib/site";
import type { SocialId } from "@/lib/site";

export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.59-6.63 7.59H.47l8.6-9.83L0 1.15h7.59l5.25 6.93 6.06-6.93Zm-1.29 19.49h2.04L6.49 3.24H4.3l13.31 17.4Z" />
    </svg>
  );
}

export function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/** Icon lookup used by the social row and the footer/nav social menus. */
export const socialIcons: Record<SocialId, ComponentType<{ className?: string }>> = {
  linkedin: LinkedinIcon,
  x: XIcon,
  github: GithubIcon,
  instagram: InstagramIcon,
};

const socialOrder: SocialId[] = ["linkedin", "x", "github", "instagram"];

export function SocialLinks() {
  return (
    <nav aria-label="Social links" className="flex items-center gap-7">
      {socialOrder.map((id) => {
        const url = site.socials[id];
        const label = socialLabels[id];
        const Icon = socialIcons[id];
        const available = isSocialAvailable(url);

        const icon = (
          <Icon className="h-[19px] w-[19px]" />
        );

        if (!available) {
          return (
            <span
              key={id}
              title={`${label} - coming soon`}
              className="cursor-default text-ink/30"
              tabIndex={-1}
            >
              {icon}
            </span>
          );
        }

        return (
          <a
            key={id}
            href={url!}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-ink/80 transition-colors duration-300 hover:text-ink focus:outline-none focus-visible:text-ink"
          >
            {icon}
          </a>
        );
      })}
    </nav>
  );
}