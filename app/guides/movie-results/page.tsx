import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "영화 취향 테스트 해설 | 휴먼덱",
  description:
    "스토리, 감정, 자극, 연출, 해석 등 영화 취향 테스트의 몰입 포인트를 읽는 해설 페이지입니다.",
};

export default function MovieGuidePage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Guide</span>
        <h1>영화 취향 테스트는 무엇에 먼저 몰입하는지를 보여줍니다</h1>
        <p>
          영화 취향 테스트는 단순히 무슨 장르를 좋아하는지를 묻는 것이 아니라, 영화 안에서 내가
          어디에서 몰입이 시작되는지에 주목합니다. 어떤 사람은 이야기 구조가 먼저 중요하고,
          어떤 사람은 감정선, 또 다른 사람은 연출과 장면, 혹은 속도와 자극에서 더 크게 반응할
          수 있습니다.
        </p>

        <div className="policy-section">
          <h2>1. 취향은 장르보다 몰입 포인트에 가깝습니다</h2>
          <p>
            같은 액션 영화도 누군가는 서사 때문에 좋아하고, 누군가는 긴장감 때문에 좋아할 수
            있습니다. 반대로 잔잔한 영화도 감정선이 잘 맞으면 깊게 몰입하는 사람이 있습니다.
            그래서 휴먼덱은 장르보다 몰입 포인트를 기준으로 결과를 읽습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. 해석형과 연출형, 감정형은 서로 겹칠 수 있습니다</h2>
          <p>
            결과는 하나로 끝나지 않습니다. 서사집착 사자가 메인이라도 해석중독 부엉이가 서브로
            높으면 구조를 보는 동시에 의미를 오래 붙잡는 타입일 수 있습니다. 감정몰입 늑대와
            현실회피 곰처럼 감정과 몰입 공간이 함께 강하게 작동하는 경우도 있습니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>3. 결과를 보는 현실적인 방법</h2>
          <p>
            테스트를 본 뒤에는 내가 영화 추천을 어떻게 하는지, 무엇 때문에 끝까지 보거나 중간에
            끄는지를 떠올려보면 좋습니다. 그 기준을 알고 나면 어떤 작품이 나와 잘 맞는지도 더
            쉽게 설명할 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
