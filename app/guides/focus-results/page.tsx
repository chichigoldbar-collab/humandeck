import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "집중 성향 테스트 해설 | 휴먼덱",
  description:
    "집중 vs 멀티태스킹 성향 테스트가 보는 몰입, 동시 처리, 중간 이탈 패턴을 생활 습관과 연결해 설명합니다.",
};

export default function FocusGuidePage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Guide</span>
        <h1>집중 성향 테스트는 무엇을 보여줄까</h1>
        <p>
          집중 성향 테스트는 한 가지에 오래 몰입하는 힘이 큰지, 여러 일을 동시에 돌리는 쪽이
          익숙한지, 아니면 중간에 다른 자극으로 쉽게 넘어가는지를 함께 봅니다. 단순히
          집중력이 좋다 또는 나쁘다를 가르는 것이 아니라, 일을 굴리는 방식의 패턴을 읽는 데
          초점을 둔 테스트입니다.
        </p>

        <div className="policy-section">
          <h2>1. 집중형과 멀티형은 서로 다른 강점입니다</h2>
          <p>
            한 가지를 깊게 파는 사람은 완성도와 몰입 유지가 강점이 될 수 있고, 여러 가지를
            동시에 처리하는 사람은 전환 속도와 상황 대응력이 강점이 될 수 있습니다. 그래서
            결과는 우열보다 방향성에 가깝게 읽는 것이 자연스럽습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. 중간 이탈 성향은 환경 영향을 크게 받습니다</h2>
          <p>
            집중하다가 자꾸 다른 앱이나 생각으로 넘어가는 패턴은 의지 부족만으로 설명하기
            어렵습니다. 알림, 작업 방식, 동시에 떠 있는 할 일 같은 환경 요인도 크게 작용합니다.
            테스트는 그 흐름이 현재 얼마나 자주 드러나는지를 간단히 보여줍니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>3. 결과를 실생활에 적용하는 방법</h2>
          <p>
            집중형은 에너지 소진을 막기 위한 휴식 루틴을, 멀티형은 전환 기준을, 중간 이탈이
            높은 사람은 방해 요소를 줄이는 구조를 먼저 점검해보는 것이 좋습니다. 결과는 내
            방식에 맞는 작업 환경을 찾는 출발점으로 활용할 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
