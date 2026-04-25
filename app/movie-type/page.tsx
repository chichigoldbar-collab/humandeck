import type { Metadata } from "next";
import { MovieTypeExperience } from "@/components/MovieTypeExperience";

export const metadata: Metadata = {
  title: "내 영화 취향이 말해주는 나의 진짜 성향 | 휴먼덱",
  description:
    "스토리, 감정, 자극, 해석, 연출, 몰입 도피까지 영화 볼 때 어디에 끌리는지 캐릭터로 분석하는 테스트",
};

export default function MovieTypePage() {
  return <MovieTypeExperience />;
}
