import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "인지편향 테스트 해설 | 휴먼덱",
  description:
    "인지편향 테스트가 보는 확증편향, 손실회피, 앵커링, 과잉확신 같은 요소를 일상 판단에 연결해 설명합니다.",
};

export default function JudgmentGuidePage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Guide</span>
        <h1>인지편향 테스트 결과는 어떻게 해석하면 좋을까</h1>
        <p>
          인지편향 테스트는 사람이 정보를 본다고 느끼는 방식과 실제로 판단이 기울어지는 순간의
          차이를 보기 위해 만들어졌습니다. 결과는 정답과 오답을 나누는 것이 아니라, 어떤 장면에서
          내 판단이 흔들리기 쉬운지를 이해하도록 돕는 데 초점이 있습니다.
        </p>

        <div className="policy-section">
          <h2>1. 편향은 누구에게나 있습니다</h2>
          <p>
            확증편향, 손실회피, 과잉확신은 특별한 사람만 갖는 문제가 아닙니다. 일상적인 소비,
            인간관계, 투자, 업무 판단에서도 자연스럽게 나타납니다. 테스트는 이런 편향이 내
            선택에서 어느 쪽으로 더 강하게 나타나는지 가볍게 읽어보는 구조입니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. 메인 결과와 서브 성향을 같이 보는 이유</h2>
          <p>
            한 가지 편향만으로 사람의 판단 습관을 설명하기는 어렵습니다. 예를 들어 손실회피가
            높아도, 동시에 앵커링 영향을 많이 받는 사람은 첫 정보에서 쉽게 벗어나지 못할 수
            있습니다. 그래서 휴먼덱은 가장 높은 편향과 그 다음 편향을 함께 보여줍니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>3. 결과를 실생활에 연결하는 법</h2>
          <p>
            결과를 본 뒤에는 "내가 자주 후회하는 선택이 무엇이었는지", "내가 처음 본 정보에
            얼마나 끌리는지", "반대 근거를 실제로 읽는 편인지"를 떠올려보면 도움이 됩니다.
            테스트는 그 습관을 스스로 의식하게 만드는 첫 단계로 보는 것이 가장 자연스럽습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
