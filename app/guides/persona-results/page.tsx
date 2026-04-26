import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "페르소나 테스트 해설 | 휴먼덱",
  description:
    "사람들 앞에서 반복해서 보이는 겉모습 패턴을 읽는 페르소나 테스트 결과를 해석하는 가이드입니다.",
};

export default function PersonaGuidePage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Guide</span>
        <h1>페르소나 테스트는 왜 '겉모습 패턴'을 볼까</h1>
        <p>
          페르소나 테스트는 진짜 성격과 가짜 모습을 구분하려는 것이 아니라, 사람들 앞에서
          반복해서 꺼내는 반응 방식을 읽어보는 데 초점을 둡니다. 괜찮은 척, 착한 척, 무심한 척,
          유능한 척 같은 결과는 모두 사회적 장면에서 자주 사용하는 적응 방식으로 이해하는 것이
          좋습니다.
        </p>

        <div className="policy-section">
          <h2>1. 겉모습은 생존 전략이기도 합니다</h2>
          <p>
            분위기를 살리려는 사람도 있고, 약해 보이지 않으려는 사람도 있으며, 실수했을 때
            티를 덜 내려고 하는 사람도 있습니다. 이런 패턴은 관계 안에서 스스로를 보호하거나
            안정감을 유지하려는 전략으로 만들어질 수 있습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. 메인 결과와 서브 결과를 같이 보는 이유</h2>
          <p>
            예를 들어 괜찮은 척 여우가 메인이고 무심한 척 고양이가 서브라면, 감정을 숨기면서도
            동시에 거리를 두는 장면이 함께 나타날 수 있습니다. 겉모습 패턴은 하나만으로
            설명되기보다, 자주 조합되어 나타나는 경우가 많습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>3. 결과를 활용하는 방법</h2>
          <p>
            결과를 본 뒤에는 내가 어떤 상황에서 유독 더 연기하게 되는지 떠올려보는 것이
            도움이 됩니다. 낯선 자리인지, 갈등 상황인지, 기대를 받는 자리인지에 따라 나오는
            페르소나가 다를 수 있기 때문입니다. 이 패턴을 아는 것만으로도 관계 피로를 줄이는 데
            도움이 될 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
