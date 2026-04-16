export default function PrivacyPage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Privacy</span>
        <h1>개인정보처리방침</h1>
        <p>
          휴먼덱은 서비스 운영과 문의 응대를 위해 필요한 최소한의 정보만 처리합니다.
          본 페이지는 현재 베타 운영 기준의 기본 정책 안내입니다.
        </p>

        <div className="policy-section">
          <h2>1. 수집하는 정보</h2>
          <p>서비스 이용 과정에서 접속 기록, 브라우저 정보, 광고 노출 관련 정보가 자동 수집될 수 있습니다.</p>
        </div>

        <div className="policy-section">
          <h2>2. 정보 이용 목적</h2>
          <p>서비스 개선, 문의 대응, 오류 확인, 광고 운영 및 통계 확인을 위해 정보를 이용할 수 있습니다.</p>
        </div>

        <div className="policy-section">
          <h2>3. 제3자 제공</h2>
          <p>
            광고 및 분석 도구 제공을 위해 Google 등 외부 서비스가 쿠키나 유사 기술을 사용할 수 있습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>4. 문의</h2>
          <p>개인정보 관련 문의는 chichigoldbar@gmail.com 으로 연락하실 수 있습니다.</p>
        </div>
      </section>
    </main>
  );
}
