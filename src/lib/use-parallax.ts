import { useEffect, useRef } from "react";

type ParallaxEntry = {
  el: HTMLElement;
  strength: number;
  active: boolean;
};

const entries: ParallaxEntry[] = [];
let ticking = false;

function isParallaxEnabled() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return window.innerWidth >= 768;
}

function update() {
  ticking = false;
  if (!isParallaxEnabled()) return;

  const viewportHeight = window.innerHeight;
  const viewportCenter = viewportHeight / 2;
  const halfRange = viewportHeight * 0.5;

  for (const entry of entries) {
    if (!entry.active) continue;
    const rect = entry.el.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const progress = (elementCenter - viewportCenter) / halfRange;
    const clamped = Math.max(-1, Math.min(1, progress));
    const y = Math.round(clamped * entry.strength * 10) / 10;
    entry.el.style.translate = `0px ${y}px`;
  }
}

function requestTick() {
  if (!ticking && isParallaxEnabled()) {
    ticking = true;
    requestAnimationFrame(update);
  }
}

function handleResize() {
  const enabled = isParallaxEnabled();
  for (const entry of entries) {
    entry.active = enabled;
    if (!enabled) entry.el.style.translate = "";
  }
  requestTick();
}

export function useParallax<T extends HTMLElement>(strength = 16) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const entry: ParallaxEntry = { el, strength, active: isParallaxEnabled() };

    if (entries.length === 0) {
      window.addEventListener("scroll", requestTick, { passive: true });
      window.addEventListener("resize", handleResize);
    }
    entries.push(entry);
    requestTick();

    return () => {
      const index = entries.indexOf(entry);
      if (index !== -1) {
        entries.splice(index, 1);
        entry.el.style.translate = "";
      }
      if (entries.length === 0) {
        window.removeEventListener("scroll", requestTick);
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [strength]);

  return ref;
}