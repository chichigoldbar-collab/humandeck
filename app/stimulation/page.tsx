import type { Metadata } from "next";
import { StimulationExperience } from "@/components/StimulationExperience";

export const metadata: Metadata = {
  title: "내 도파민은 얼마나 흔들릴까? | 휴먼덱",
  description:
    "스크롤, 충동구매, 집중력 붕괴로 알아보는 도파민 반응 패턴 테스트",
};

export default function StimulationPage() {
  return <StimulationExperience />;
}
