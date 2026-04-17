import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header-shell">
      <div className="site-header-inner">
        <Link href="/" className="site-logo" aria-label="휴먼덱 홈으로 이동">
          <span className="site-logo-mark">HD</span>
          <span className="site-logo-copy">
            <strong>휴먼덱</strong>
            <small>test home</small>
          </span>
        </Link>
      </div>
    </header>
  );
}
