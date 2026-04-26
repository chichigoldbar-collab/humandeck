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
        <nav className="site-nav" aria-label="주요 메뉴">
          <Link href="/">홈</Link>
          <Link href="/tests">테스트 모아보기</Link>
          <Link href="/guides">해설 가이드</Link>
          <Link href="/articles">읽을거리</Link>
          <Link href="/about">서비스 소개</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
      </div>
    </header>
  );
}
