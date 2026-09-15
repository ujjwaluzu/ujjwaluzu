"use client";

import type { CSSProperties, ReactNode } from "react";

import { useInView } from "@/lib/use-in-view";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  style?: CSSProperties;
};

export function Reveal({ children, className = "", delayMs = 0, style }: RevealProps) {
  const [ref, isVisible] = useInView<HTMLDivElement>();

  const mergedStyle: CSSProperties | undefined =
    delayMs > 0 || style
      ? {
          ...(delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : {}),
          ...style,
        }
      : undefined;

  return (
    <div
      ref={ref}
      className={`reveal${isVisible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={mergedStyle}
    >
      {children}
    </div>
  );
}