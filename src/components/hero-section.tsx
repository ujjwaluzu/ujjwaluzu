export function HeroSection() {
  return (
    <section className="flex flex-col items-center px-6 text-center sm:px-8">
      <p
        className="animate-rise text-[11px] uppercase tracking-[0.45em] text-muted sm:text-xs"
        style={{ animationDelay: "80ms" }}
      >
        Portfolio
      </p>

      <h1
        className="mt-7 animate-rise font-serif text-[clamp(2.75rem,8vw,5rem)] font-normal leading-[1.06] tracking-[-0.01em] text-ink sm:mt-8 sm:text-[clamp(3.25rem,6.5vw,4.85rem)]"
        style={{ animationDelay: "180ms" }}
      >
        Something meaningful
        <br />
        is on the way<span className="text-muted/60">.</span>
      </h1>

<p
        className="mt-7 max-w-xl animate-rise text-[16px] leading-[1.8] text-muted sm:mt-8 sm:text-[17px]"
        style={{ animationDelay: "300ms" }}
      >
        A space to share my journey, projects, ideas and more.
        <br className="hidden sm:block" /> Stay tuned, ujjwaluzu is coming
        soon.
      </p>
    </section>
  );
}