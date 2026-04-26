import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "음악 성향 테스트 해설 | 휴먼덱",
  description:
    "플레이리스트와 음악 사용 패턴을 감정, 집중, 추억, 즉흥성 관점에서 읽는 휴먼덱 가이드입니다.",
};

export default function MusicGuidePage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Guide</span>
        <h1>플레이리스트 테스트는 무엇을 읽어내는 걸까</h1>
        <p>
          음악 성향 테스트는 좋아하는 장르만 보는 테스트가 아닙니다. 음악을 언제 켜는지,
          감정을 정리할 때 쓰는지, 집중을 만들 때 쓰는지, 배경처럼 두는지, 즉흥적으로 틀어두는지
          같은 생활 패턴을 함께 봅니다. 그래서 결과를 보면 단순한 취향보다 생활 리듬이 더 많이
          드러나는 경우가 많습니다.
        </p>

        <div className="policy-section">
          <h2>1. 음악은 취향이면서 동시에 도구입니다</h2>
          <p>
            어떤 사람에게 음악은 감정 정리 도구이고, 어떤 사람에게는 일과 공부에 몰입하기 위한
            배경이며, 어떤 사람에게는 습관처럼 켜두는 생활 소음에 가깝습니다. 이 차이를 나누어
            보면 왜 같은 곡도 사람마다 다르게 쓰는지 이해하기 쉬워집니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. 메인 성향과 서브 성향은 함께 작동합니다</h2>
          <p>
            감정잠수 고래가 메인이어도 회상형 해달이 서브로 높게 나오면, 감정뿐 아니라 기억과
            시간의 결이 함께 작동하는 패턴일 수 있습니다. 집중장인 부엉이와 플레이리스트 장인
            여우 조합처럼, 몰입과 큐레이션이 같이 높은 사람도 있습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>3. 결과를 실생활에 연결하는 법</h2>
          <p>
            내가 음악을 왜 찾는 사람인지 떠올려보면 생활 습관이 더 선명해집니다. 감정을 파는지,
            기분을 끌어올리는지, 일을 시작하기 위해 트는지, 조용함을 피하려고 켜두는지를 구분해
            보면 플레이리스트가 생각보다 정확한 기록처럼 보일 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
