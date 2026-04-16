import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "휴먼덱 | 내 인간 캐릭터 테스트",
  description:
    "연애, 자극, 생각 습관, 자존감, 의사결정까지 한 번에 보는 인간 캐릭터 테스트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
