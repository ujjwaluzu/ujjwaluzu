"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const assetRoot = "/assets";

export function Arrow() {
  return <span className="button-arrow" aria-hidden="true">→</span>;
}

export function SiteHeader() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  const isProjectPage = pathname === "/project" || pathname.startsWith("/project/");
  const links = ["About", "Projects", "Experience", "Contact"];
  const [isHiddenWhileScrolling, setIsHiddenWhileScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const scrollStopTimer = useRef<number | undefined>(undefined);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const revealHeader = () => {
      setIsHiddenWhileScrolling(false);
      scrollStopTimer.current = undefined;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current && currentScrollY > 72;

      setIsHiddenWhileScrolling(isScrollingDown);
      lastScrollY.current = currentScrollY;

      if (scrollStopTimer.current) window.clearTimeout(scrollStopTimer.current);
      scrollStopTimer.current = window.setTimeout(revealHeader, 180);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollStopTimer.current) window.clearTimeout(scrollStopTimer.current);
    };
  }, []);

  useEffect(() => {
    const sectionIds = ["top", "about", "projects", "experience", "contact"];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!menuButtonRef.current?.parentElement?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const homepageHref = (section: string) => `/${section === "top" ? "" : `#${section}`}`;

  const navHref = (link: string) => (link.toLowerCase() === "projects" ? "/project" : `/#${link.toLowerCase()}`);

  const navClass = (link: string) => {
    const l = link.toLowerCase();
    if (isContactPage || isProjectPage) {
      return l === (isContactPage ? "contact" : "projects") ? "active" : "";
    }
    return activeSection === l ? "active" : "";
  };

  return (
    <header className={`site-header${isHiddenWhileScrolling ? " is-hidden-while-scrolling" : ""}`}>
      <Link href="/" className="brand-lockup" aria-label="ujjwaluzu home">
        <Image className="brand-favicon" src={`${assetRoot}/faviconicon.webp`} alt="" width={1254} height={1254} priority />
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link className={!isContactPage && !isProjectPage && activeSection === "top" ? "active" : ""} href="/">Home</Link>
        {links.map((link) => (
          <Link
            key={link}
            className={navClass(link)}
            href={navHref(link)}
          >{link}</Link>
        ))}
      </nav>

      <Link className="button button-dark header-cta" href="/contact">Let&apos;s Chat <Arrow /></Link>

      <div className={`mobile-menu${isMenuOpen ? " is-open" : ""}`}>
        <button
          ref={menuButtonRef}
          className="mobile-menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
        <nav id="mobile-nav" className="mobile-menu-nav" aria-label="Mobile navigation">
          <Link href={homepageHref("top")} onClick={closeMenu}>Home</Link>
          {links.map((link) => (
            <Link
              key={link}
              className={navClass(link)}
              href={navHref(link)}
              onClick={closeMenu}
            >{link}</Link>
          ))}
          <Link className="button button-dark" href="/contact" onClick={closeMenu}>Let&apos;s Chat <Arrow /></Link>
        </nav>
      </div>
    </header>
  );
}