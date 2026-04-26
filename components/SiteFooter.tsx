export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <strong>휴먼덱</strong>
        <p>나도 몰랐던 내 패턴을 가장 가볍고 선명하게 보는 테스트.</p>
        <div className="footer-business">
          <span>상호: 테디맨션</span>
          <span>대표자: 노현정</span>
          <span>사업자등록번호: 563-49-01362</span>
          <span>통신판매업신고번호: 2026-서울종로-0563</span>
          <span>주소: 서울특별시 종로구 성균관로 15-8 2층</span>
          <span>연락처: 070-4136-3336</span>
          <span>이메일: teddysmansion01@gmail.com</span>
        </div>
      </div>
      <div className="footer-links">
        <a href="/tests">테스트 모아보기</a>
        <a href="/guides">해설 가이드</a>
        <a href="/about">서비스 소개</a>
        <a href="/contact">문의하기</a>
        <a href="/faq">자주 묻는 질문</a>
        <a href="/privacy">개인정보처리방침</a>
        <a href="/terms">이용약관</a>
      </div>
    </footer>
  );
}
