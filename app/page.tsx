import type { Metadata } from "next";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { HomeExperience } from "@/components/HomeExperience";
import { buildCollectionPage, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "휴먼덱 | 심리테스트·성격테스트 모음",
  description:
    "심리테스트, 성격테스트, 취향 테스트를 통해 관계, 판단, 자극 반응, 생활 습관을 읽어보는 휴먼덱 서비스 홈입니다.",
  path: "/",
  keywords: [
    "휴먼덱",
    "성향 테스트",
    "심리 테스트",
    "성격 테스트",
    "심리테스트 모음",
    "성격테스트 모음",
    "관계 테스트",
    "인지편향 테스트",
  ],
});

export default function Home() {
  return (
    <>
      <SeoJsonLd
        data={buildCollectionPage({
          name: "휴먼덱 테스트 홈",
          description:
            "심리테스트, 성격테스트, 취향 테스트로 관계, 판단, 자극 반응, 취향 패턴을 읽어보는 휴먼덱 서비스 홈",
          path: "/",
          items: [
            { name: "테스트 모아보기", path: "/tests", description: "휴먼덱 전체 테스트 목록" },
            { name: "심리테스트 모음", path: "/psychology-tests", description: "심리테스트 중심 허브 페이지" },
            { name: "성격테스트 모음", path: "/personality-tests", description: "성격테스트 중심 허브 페이지" },
            { name: "해설 가이드", path: "/guides", description: "결과 해석 가이드 모음" },
            { name: "읽을거리", path: "/articles", description: "스트레스와 생활 패턴 읽을거리" },
            { name: "서비스 소개", path: "/about", description: "휴먼덱 운영 정보와 서비스 소개" },
          ],
        })}
      />
      <HomeExperience />
    </>
  );
}
