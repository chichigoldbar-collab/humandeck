import type { Metadata } from "next";
import { TestStaticInfo } from "@/components/TestStaticInfo";
import { ZombieTypeExperience } from "@/components/ZombieTypeExperience";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "좀비 세상에서 당신은 어떤 인간일까 | 휴먼덱",
  description:
    "좀비 아포칼립스 설정으로 돌파형인지, 전략형인지, 회피형인지 읽어보는 몰입형 생존 본능 테스트",
  path: "/zombie-type",
  keywords: ["좀비 테스트", "생존 테스트", "몰입형 성향 테스트"],
});

export default function ZombieTypePage() {
  return (
    <>
      <ZombieTypeExperience />
      <TestStaticInfo
        title="좀비 생존 테스트는 무엇을 보는 페이지일까요?"
        intro={[
          "이 테스트는 좀비 세상이라는 극단적인 설정을 바탕으로, 압박 상황에서 당신이 어떤 인간으로 반응하는지 보는 몰입형 콘텐츠입니다. 판단력, 위험 감지, 협력 성향, 행동 속도가 동시에 드러나도록 상황형 질문으로 설계했습니다.",
          "현실에서 정말 좀비를 만날 일은 없더라도, 위기 앞에서 밀고 나가는지, 버티는지, 피하는지, 멘붕이 오는지는 일상 속 압박 상황에서도 꽤 비슷하게 나타나는 편입니다. 그래서 공포 설정을 빌리되, 실제로는 당신의 대응 습관을 읽는 구조에 가깝습니다.",
        ]}
        sections={[
          {
            title: "1. 왜 좀비 설정이 몰입감을 높일까요?",
            body: [
              "좀비 아포칼립스는 시간 압박, 자원 부족, 협력 갈등, 위험 판단이 한꺼번에 들어오는 장면입니다. 추상적으로 물으면 숨겨지는 반응도, 이렇게 구체적인 위기 장면을 상상하면 훨씬 솔직하게 튀어나옵니다.",
            ],
          },
          {
            title: "2. 결과는 어떻게 읽는 것이 좋을까요?",
            body: [
              "메인 결과는 위기에서 가장 먼저 튀어나오는 생존 방식이고, 서브 결과는 그 판단을 밀어주는 두 번째 패턴입니다. 예를 들어 돌파형 늑대와 협력형 강아지가 같이 나오면, 과감하지만 혼자 뛰기보다 사람을 모아 움직이는 쪽으로 해석할 수 있습니다.",
            ],
          },
          {
            title: "3. 이 테스트가 현실과 연결되는 지점",
            body: [
              "생존 테스트라고 해도 핵심은 압박 상황에서의 선택 방식입니다. 예상치 못한 문제, 급한 결정, 집단 갈등, 자원 부족 같은 현실적 장면에서 내가 밀고 나가는지, 계산하는지, 멈추는지 돌아보는 도구로 읽으면 활용도가 더 높습니다.",
            ],
          },
        ]}
      />
    </>
  );
}
