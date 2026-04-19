import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "인간 캐릭터 테스트 해설 | 휴먼덱",
  description:
    "인간 캐릭터 테스트가 어떤 질문과 점수 구조로 결과를 만드는지, 결과를 어떻게 읽으면 좋은지 정리한 해설 페이지입니다.",
};

export default function CharacterGuidePage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Guide</span>
        <h1>인간 캐릭터 테스트는 무엇을 보는 걸까</h1>
        <p>
          인간 캐릭터 테스트는 하나의 성격만 단정하기보다, 관계 맺는 방식과 자극을 받아들이는
          습관, 생각의 흐름, 자존감 구조, 의사결정 패턴을 함께 읽어보는 것을 목표로 합니다.
          그래서 결과도 하나의 캐릭터가 아니라 여러 축이 함께 보이도록 설계되어 있습니다.
        </p>

        <div className="policy-section">
          <h2>1. 왜 다섯 축을 함께 보나요?</h2>
          <p>
            사람은 한 장면에서만 드러나지 않습니다. 가까워질 때의 반응, 지루함을 견디는 방식,
            실수를 해석하는 습관, 자기 자신을 보는 태도, 중요한 결정을 내리는 속도가 서로 다를
            수 있습니다. 휴먼덱은 이 차이를 한 번에 보기 쉽게 정리하기 위해 다섯 축 구조를 사용합니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. 결과는 어떻게 읽으면 좋을까요?</h2>
          <p>
            결과는 진단명이 아니라 현재 자주 드러나는 패턴에 가깝습니다. 예를 들어 관계에서는
            안정적으로 보이지만, 자극 반응에서는 쉽게 흔들릴 수도 있습니다. 여러 카드가 함께
            나오는 이유는 서로 다른 장면에서 반응이 다르게 나타날 수 있기 때문입니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>3. 결과를 활용하는 방법</h2>
          <p>
            가장 좋은 활용법은 "내가 왜 이런 상황에서 반복적으로 같은 선택을 하지?"를 돌아보는
            출발점으로 쓰는 것입니다. 관계, 자극, 생각 습관을 따로 보기 시작하면 결과 카드의
            문장이 조금 더 현실적으로 읽히는 경우가 많습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
