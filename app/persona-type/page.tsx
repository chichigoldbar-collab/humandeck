import type { Metadata } from "next";
import { PersonaTypeExperience } from "@/components/PersonaTypeExperience";

export const metadata: Metadata = {
  title: "나는 남들 앞에서 어떤 캐릭터로 살아갈까? | 휴먼덱",
  description:
    "사람들 앞에서 보여주는 모습과 상황마다 달라지는 겉모습 패턴을 분석하는 페르소나 테스트",
};

export default function PersonaTypePage() {
  return <PersonaTypeExperience />;
}
