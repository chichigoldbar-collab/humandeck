import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "도파민 테스트 해설 | 휴먼덱",
  description:
    "도파민 반응 테스트가 보는 즉각 보상, 충동성, 집중 분산, 보상 의존을 일상 습관과 연결해 설명합니다.",
};

export default function StimulationGuidePage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Guide</span>
        <h1>도파민 반응 테스트가 말해주는 생활 패턴</h1>
        <p>
          도파민 반응 테스트는 "나는 왜 자꾸 폰을 보게 될까", "왜 해야 할 일보다 지금 당장
          재밌는 것에 더 끌릴까" 같은 질문에서 출발합니다. 이 테스트는 의지 부족을 판단하려는
          것이 아니라, 즉각 보상과 자극에 뇌가 어떻게 반응하는지 가볍게 정리해보는 콘텐츠입니다.
        </p>

        <div className="policy-section">
          <h2>1. 빠른 보상에 끌리는 건 자연스러운 반응입니다</h2>
          <p>
            짧은 영상, 알림, 할인 문구, 눈앞의 재미는 누구에게나 강하게 작동할 수 있습니다.
            테스트는 이런 반응이 내 생활에서 어느 축으로 더 자주 드러나는지를 보기 위해 설계되어 있습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. 결과는 습관의 방향을 보여줍니다</h2>
          <p>
            어떤 사람은 즉각적인 재미에 약하고, 어떤 사람은 새로운 자극을 계속 찾으며, 또 어떤
            사람은 보상이 보이지 않으면 금방 흥미가 식을 수 있습니다. 이 차이를 캐릭터로 읽어내면
            결과가 더 직관적으로 느껴집니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>3. 결과를 활용하는 현실적인 방법</h2>
          <p>
            결과를 본 뒤에는 자신을 탓하기보다 환경을 조정하는 쪽이 더 효과적일 수 있습니다.
            예를 들어 즉각 보상 반응이 높다면 작은 보상 구조를 만들고, 집중 분산이 높다면 알림과
            탭 수를 줄이는 식으로 실생활에 연결해 볼 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
