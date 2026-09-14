export function AbstractBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-[60vh] overflow-hidden sm:h-[70vh]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-[600px] w-[110%] -translate-x-[4%] opacity-[0.35] animate-drift"
      >
        <path
          d="M0 360C180 310 340 260 520 280C700 300 880 380 1060 350C1140 340 1180 320 1200 310V600H0Z"
          className="fill-sand"
        />
      </svg>
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-[600px] w-[110%] -translate-x-[2%] opacity-[0.25] animate-drift-slow"
      >
        <path
          d="M0 390C200 340 380 290 560 310C740 330 920 400 1100 370C1160 360 1180 350 1200 345V600H0Z"
          className="fill-ivory"
        />
      </svg>
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-[600px] w-full opacity-[0.15] animate-breathe"
      >
        <path
          d="M0 420C220 380 400 340 600 360C800 380 980 440 1160 410C1180 408 1190 405 1200 402V600H0Z"
          className="fill-line"
        />
      </svg>
    </div>
  );
}