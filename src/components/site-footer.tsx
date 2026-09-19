import Image from "next/image";
import Link from "next/link";

const assetRoot = "/assets";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <Link href="/" className="footer-brand footer-favicon-link" aria-label="ujjwaluzu home">
          <Image src={`${assetRoot}/faviconicon.webp`} alt="" width={23} height={23} className="footer-favicon" />
        </Link>
        <span>© 2026 Ujjwaluzu</span>
        <Link className="footer-status" href="https://status.ujjwaluzu.in" target="_blank" rel="noopener noreferrer" aria-label="Blog">Status</Link>
      </div>
    </footer>
  );
}