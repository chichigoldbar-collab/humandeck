import type { Metadata } from "next";
import { MusicTypeExperience } from "@/components/MusicTypeExperience";

export const metadata: Metadata = {
  title: "내 플레이리스트가 말해주는 나의 진짜 성향 | 휴먼덱",
  description:
    "감정 해소형, 자극 추구형, 몰입형, 추억형 등 이어폰 속 음악 사용 패턴을 캐릭터로 분석하는 테스트",
};

export default function MusicTypePage() {
  return <MusicTypeExperience />;
}
