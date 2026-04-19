import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 소개 | 휴먼덱",
  description:
    "휴먼덱은 관계, 판단, 자극 반응, 생활 습관 같은 패턴을 짧은 테스트로 정리해보는 콘텐츠형 테스트 서비스입니다.",
};

export default function AboutPage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">About</span>
        <h1>휴먼덱 서비스 소개</h1>
        <p>
          휴먼덱은 관계, 판단, 자극 반응, 생활 습관처럼 일상에서 자주 드러나는 패턴을
          짧은 질문으로 정리해보는 테스트형 콘텐츠 서비스입니다. 결과는 캐릭터와 해설
          형식으로 제공되며, 사용자가 자신의 성향을 조금 더 쉽게 이해할 수 있도록
          구성되어 있습니다.
        </p>

        <div className="policy-section">
          <h2>1. 휴먼덱이 다루는 주제</h2>
          <p>
            현재 휴먼덱은 인간 캐릭터, 인지편향, 도파민 반응, 먹는 방식 성격, 부부 관계
            분석, 공포 반응 같은 다양한 주제를 다룹니다. 각 테스트는 하나의 주제를 중심으로
            질문과 결과를 구성하며, 서로 다른 패턴을 비교해볼 수 있도록 설계되어 있습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. 테스트 결과가 만들어지는 방식</h2>
          <p>
            모든 테스트는 질문 응답을 바탕으로 내부 점수 로직을 계산해 가장 가까운 유형을
            보여줍니다. 결과는 전문적인 진단이나 의료적 판정을 대신하지 않으며, 사용자가
            자신의 습관과 반응을 돌아보는 데 도움을 주는 해석형 콘텐츠로 제공됩니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>3. 휴먼덱이 중요하게 보는 것</h2>
          <p>
            휴먼덱은 빠르게 참여할 수 있는 경험, 공감이 가는 결과 문장, 공유하기 쉬운 카드형
            결과를 중요하게 생각합니다. 너무 복잡한 해석보다, 짧고 선명한 피드백을 통해
            사용자가 자신의 패턴을 자연스럽게 이해하는 흐름을 지향합니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>4. 광고와 서비스 운영</h2>
          <p>
            휴먼덱은 무료로 테스트를 제공하며, 일부 페이지에는 광고가 노출될 수 있습니다.
            광고는 서비스 운영과 개선을 위한 수익 구조의 일부이며, 이용 경험을 해치지 않는
            범위에서 배치하려고 노력합니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>5. 문의 및 운영 정보</h2>
          <p>상호: 테디맨션</p>
          <p>사업자등록번호: 563-49-01362</p>
          <p>주소: 서울특별시 종로구 성균관로 15-8 2층</p>
          <p>연락처: 070-4136-3336</p>
          <p>이메일: teddysmansion01@gmail.com</p>
        </div>
      </section>
    </main>
  );
}
