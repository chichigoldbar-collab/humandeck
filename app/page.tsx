import type { Metadata } from "next";
import { HomeExperience } from "@/components/HomeExperience";

export const metadata: Metadata = {
  title: "휴먼덱 | 테스트 홈",
  description:
    "관계, 판단, 자극 반응, 생활 습관을 다양한 테스트와 해설 가이드로 읽어보는 휴먼덱 서비스 홈입니다.",
};

export default function Home() {
  return <HomeExperience />;
}
