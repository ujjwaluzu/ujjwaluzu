import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="nf-page">
      <Link href="/" className="brand-lockup nf-brand" aria-label="ujjwaluzu home">
        <Image className="brand-favicon" src="/assets/faviconicon.png" alt="" width={1254} height={1254} />
        <span className="brand-name">ujjwaluzu</span>
      </Link>

      <span className="nf-code" aria-hidden="true">404</span>

      <div className="nf-stage">
        <Image
          className="character nf-char"
          src="/assets/hero-char.png"
          alt="Illustrated full-body portrait of Ujjwal with a frog on his head, searching for the missing page"
          width={1024}
          height={1536}
          priority
          sizes="(max-width: 767px) 58vw, 26vw"
        />
        <p className="nf-note">oops! this page slipped away</p>
        <Link className="button button-dark nf-cta" href="/">Back Home <span className="button-arrow" aria-hidden="true">→</span></Link>
      </div>
    </main>
  );
}