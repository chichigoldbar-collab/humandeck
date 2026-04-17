import type { Metadata } from "next";
import { HomeExperience } from "@/components/HomeExperience";

export const metadata: Metadata = {
  title: "휴먼덱 | 테스트 홈",
  description:
    "휴먼덱의 캐릭터 테스트와 인지편향 테스트를 한곳에서 시작해보세요.",
};

export default function Home() {
  return <HomeExperience />;
}
