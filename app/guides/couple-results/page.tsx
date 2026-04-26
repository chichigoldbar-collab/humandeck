import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "부부 관계 테스트 해설 | 휴먼덱",
  description:
    "부부 관계 분석 테스트가 갈등, 연결, 협업, 애정 네 축으로 관계를 읽는 이유를 설명하는 가이드입니다.",
};

export default function CoupleGuidePage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Guide</span>
        <h1>부부 관계 분석 테스트는 네 가지 축을 함께 봅니다</h1>
        <p>
          부부 관계 테스트는 잘 지내는가 아닌가를 한 줄로 판단하려는 테스트가 아닙니다. 갈등을
          어떻게 다루는지, 정서적으로 연결되어 있는지, 생활을 함께 굴리는 힘이 있는지, 애정 표현이
          유지되고 있는지를 함께 보아야 관계의 결을 조금 더 현실적으로 읽을 수 있기 때문입니다.
        </p>

        <div className="policy-section">
          <h2>1. 싸움이 적다고 관계가 자동으로 안정적인 것은 아닙니다</h2>
          <p>
            어떤 관계는 갈등을 잘 조율해서 조용하고, 어떤 관계는 불편한 이야기를 피해서 조용할 수
            있습니다. 그래서 갈등 축만 따로 보는 것이 아니라 연결과 애정, 생활 협업을 함께
            확인하는 구조가 필요합니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. 생활은 잘 돌아가도 감정이 비어 있을 수 있습니다</h2>
          <p>
            집안일과 책임이 잘 나뉘어 있고 일정도 굴러가지만, 정서적으로 멀어져 있거나 애정 표현이
            줄어든 관계도 있습니다. 반대로 정은 깊지만 협업이 어려운 관계도 있을 수 있어서, 여러
            축을 함께 읽는 것이 중요합니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>3. 결과를 활용할 때 중요한 점</h2>
          <p>
            이 테스트는 관계를 단정하는 진단이 아니라, 지금 어떤 부분을 먼저 돌아보면 좋을지를
            보여주는 체크포인트에 가깝습니다. 결과를 본 뒤에는 상대를 평가하기보다, 어떤 장면에서
            거리감이나 불균형을 느끼는지가 무엇인지 대화의 소재로 활용하는 것이 자연스럽습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
