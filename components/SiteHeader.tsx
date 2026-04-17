import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header-shell">
      <div className="site-header-inner">
        <Link href="/" className="site-logo" aria-label="휴먼덱 홈으로 이동">
          <img
            src="/assets/home-logo.png"
            alt="휴먼덱 로고"
            className="site-logo-image"
          />
          <span className="site-logo-copy">
            <strong>휴먼덱</strong>
            <small>human test deck</small>
          </span>
        </Link>
      </div>
    </header>
  );
}
