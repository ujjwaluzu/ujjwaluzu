import Link from "next/link";

import { Monogram } from "@/components/monogram";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="relative z-10 flex w-full items-center justify-between px-6 pb-2 pt-8 sm:px-10 sm:pt-10 lg:px-16">
      <Link
        href="/"
        className="group flex items-center gap-3"
        aria-label={`${site.name} - home`}
      >
        <Monogram className="h-6 w-6 text-ink transition-transform duration-500 group-hover:scale-105" />
        <span
          aria-hidden="true"
          className="hidden h-5 w-px bg-line sm:block"
        />
        <span className="text-[15px] font-medium tracking-tight text-ink">
          {site.name}
        </span>
      </Link>

      <p
        className="hidden text-[11px] font-normal uppercase tracking-[0.34em] text-muted md:block lg:tracking-[0.45em]"
        aria-hidden="true"
      >
        Ideas&ensp;&thinsp;/&thinsp;&ensp;Code&ensp;&thinsp;/&thinsp;&ensp;Impact
      </p>
    </header>
  );
}