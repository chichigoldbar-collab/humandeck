import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "먹는 방식 테스트 해설 | 휴먼덱",
  description:
    "먹는 방식 성격 테스트가 왜 일상적 선택과 성향을 함께 보여주는지 설명하는 해설 페이지입니다.",
};

export default function EatGuidePage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Guide</span>
        <h1>먹는 방식 테스트가 성향을 보여주는 이유</h1>
        <p>
          먹는 방식 테스트는 가볍고 현실적인 질문을 다루지만, 생각보다 많은 생활 패턴을
          드러냅니다. 메뉴를 고르는 속도, 익숙한 선택을 반복하는지, 즉흥적으로 반응하는지,
          계획적으로 비교하는지를 보다 보면 식사 습관이 곧 선택 습관과 연결된다는 점이 보일 수
          있습니다.
        </p>

        <div className="policy-section">
          <h2>1. 음식 선택은 일상 의사결정과 닮아 있습니다</h2>
          <p>
            메뉴 하나를 고르는 장면에도 충동, 계산, 안정 선호, 탐색 성향이 드러날 수 있습니다.
            그래서 질문이 가벼워 보여도, 답변 패턴은 생각보다 익숙한 생활 리듬을 반영하는 경우가
            많습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. 결과는 음식 취향보다 선택 습관에 가깝습니다</h2>
          <p>
            특정 음식을 좋아하느냐보다, 어떻게 고르고 어떻게 반응하느냐가 핵심입니다. 익숙한 것을
            고수하는지, 순간 분위기에 끌리는지, 끝까지 비교하다가 지치는지 같은 패턴을 읽으면
            결과가 더 현실적으로 느껴질 수 있습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>3. 결과를 재미있게 활용하는 방법</h2>
          <p>
            이 테스트는 친구나 가족과 같이 해보면 더 잘 보이는 경우가 많습니다. 같은 상황에서 왜
            서로 다른 선택을 하는지 비교하다 보면 결과 카드의 문장이 생활 장면과 더 자연스럽게
            이어집니다.
          </p>
        </div>
      </section>
    </main>
  );
}
