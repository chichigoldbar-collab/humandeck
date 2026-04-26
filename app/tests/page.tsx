import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "테스트 모아보기 | 휴먼덱",
  description:
    "관계, 판단, 자극 반응, 생활 습관, 취향 패턴을 정리하는 휴먼덱의 테스트와 설명형 콘텐츠를 한눈에 볼 수 있습니다.",
};

const tests: {
  href:
    | "/character"
    | "/judgment"
    | "/stimulation"
    | "/eat-type"
    | "/couple-type"
    | "/ghost-sense"
    | "/focus-type"
    | "/stress-type"
    | "/persona-type"
    | "/music-type"
    | "/movie-type";
  title: string;
  summary: string;
}[] = [
  {
    href: "/character",
    title: "내 인간 캐릭터 테스트",
    summary:
      "관계, 자극, 생각 습관, 자존감, 의사결정처럼 일상 전반의 반응 패턴을 다섯 축으로 읽어내는 휴먼덱 대표 테스트입니다.",
  },
  {
    href: "/judgment",
    title: "내 판단은 얼마나 틀렸을까?",
    summary:
      "확증편향, 손실회피, 앵커링, 과잉확신 같은 인지편향을 중심으로 내가 어떻게 선택을 왜곡하는지 살펴보는 테스트입니다.",
  },
  {
    href: "/stimulation",
    title: "내 도파민은 얼마나 흔들릴까?",
    summary:
      "스크롤, 충동구매, 집중 분산, 빠른 보상 선호 같은 반응을 바탕으로 자극 추구 패턴을 정리하는 테스트입니다.",
  },
  {
    href: "/eat-type",
    title: "먹는 방식 성격 테스트",
    summary:
      "먹는 순서, 메뉴 선택, 배달 앱 사용 습관처럼 가볍고 현실적인 질문으로 일상적 성향을 캐릭터처럼 보여주는 테스트입니다.",
  },
  {
    href: "/couple-type",
    title: "부부 관계 분석 테스트",
    summary:
      "갈등 처리, 정서 연결, 생활 협업, 애정 표현이라는 네 축으로 부부 관계의 균형과 긴장을 함께 읽어보는 테스트입니다.",
  },
  {
    href: "/ghost-sense",
    title: "귀신을 얼마나 느끼는 타입일까?",
    summary:
      "감각 민감도, 공포 반응, 상상 개입도를 바탕으로 낯선 분위기와 공포 자극에 어떤 방식으로 반응하는지 살펴보는 테스트입니다.",
  },
  {
    href: "/focus-type",
    title: "집중 vs 멀티태스킹 성향 테스트",
    summary:
      "집중 몰입, 동시 처리, 중간 이탈이라는 세 축으로 내가 어떤 방식으로 일을 굴리는지 살펴보는 자기계발형 테스트입니다.",
  },
  {
    href: "/stress-type",
    title: "스트레스 관리 스타일 테스트",
    summary:
      "회피, 해소, 해결, 과생각이라는 네 축을 바탕으로 내가 스트레스를 어떤 방식으로 처리하는지 살펴보는 자기이해형 테스트입니다.",
  },
  {
    href: "/persona-type",
    title: "나는 남들 앞에서 어떤 캐릭터로 살아갈까?",
    summary:
      "착한 척, 괜찮은 척, 무심한 척, 유능한 척처럼 사람들 앞에서 반복해서 보여주는 겉모습 패턴을 캐릭터로 정리하는 테스트입니다.",
  },
  {
    href: "/music-type",
    title: "내 플레이리스트가 말해주는 나의 진짜 성향",
    summary:
      "감정 해소형, 자극 추구형, 몰입형, 추억형 등 음악을 어떤 순간에 어떻게 사용하는지 캐릭터로 정리하는 테스트입니다.",
  },
  {
    href: "/movie-type",
    title: "내 영화 취향이 말해주는 나의 진짜 성향",
    summary:
      "스토리, 감정, 자극, 해석, 연출, 몰입 도피처럼 영화를 볼 때 어디에 먼저 끌리는지 캐릭터로 정리하는 테스트입니다.",
  },
];

export default function TestsPage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Tests</span>
        <h1>휴먼덱 테스트 모아보기</h1>
        <p>
          휴먼덱은 짧은 질문을 통해 사용자의 반응 패턴을 캐릭터와 해설 형태로 정리하는
          테스트형 콘텐츠 서비스를 제공합니다. 아래 페이지에서 현재 공개된 테스트를 한눈에
          확인하고, 보고 싶은 주제부터 바로 시작할 수 있습니다.
        </p>

        <div className="policy-section">
          <h2>휴먼덱 테스트는 어떻게 구성되나요?</h2>
          <p>
            각 테스트는 생활 장면에 가까운 질문을 바탕으로 응답 패턴을 점수화하고, 가장 가까운
            유형을 캐릭터와 해설 문장으로 정리해 보여줍니다. 결과는 의료적·심리적 진단을 대신하지
            않으며, 스스로의 습관과 반응을 가볍게 돌아보는 자기이해형 콘텐츠를 목표로 합니다.
          </p>
        </div>

        <div className="policy-section">
          <h2>어떤 주제를 다루고 있나요?</h2>
          <p>
            현재 휴먼덱은 관계와 애착, 인지편향, 도파민 반응, 먹는 습관, 부부 관계, 공포 반응,
            집중과 멀티태스킹, 스트레스 처리, 사회적 페르소나, 음악 사용 패턴, 영화 취향처럼
            일상에서 자주 마주치는 주제를 중심으로 테스트를 운영하고 있습니다. 서로 다른 테스트를
            이어서 보면 한 사람 안에서 다른 패턴이 어떻게 나타나는지 비교해서 읽어볼 수 있습니다.
          </p>
        </div>

        <div className="faq-list">
          {tests.map((test) => (
            <article key={test.href} className="faq-card">
              <h2>{test.title}</h2>
              <p>{test.summary}</p>
              <div className="content-link-row">
                <Link href={test.href}>테스트 바로가기</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
