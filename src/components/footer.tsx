import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 flex flex-col items-center gap-3 px-6 pb-8 pt-4 text-center sm:pb-10">
      <p
        className="text-[10px] uppercase tracking-[0.4em] text-muted sm:text-[11px]"
        aria-label="Tagline"
      >
        Same person<span className="mx-2 text-line">·</span>Bigger things.
      </p>
      <p className="text-[11px] tracking-wide text-muted/70">
        © {year} {site.name}
      </p>
    </footer>
  );
}