import type { Metadata } from "next";
import Script from "next/script";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  title: "휴먼덱 | 내 인간 캐릭터 테스트",
  description:
    "연애, 자극, 생각 습관, 자존감, 의사결정까지 한 번에 보는 인간 캐릭터 테스트",
  other: {
    "google-adsense-account": "ca-pub-7928504805613676",
  },
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "휴먼덱 | 내 인간 캐릭터 테스트",
    description:
      "연애, 자극, 생각 습관, 자존감, 의사결정까지 한 번에 보는 인간 캐릭터 테스트",
    url: siteUrl,
    siteName: "휴먼덱",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "휴먼덱 인간 캐릭터 테스트",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "휴먼덱 | 내 인간 캐릭터 테스트",
    description:
      "연애, 자극, 생각 습관, 자존감, 의사결정까지 한 번에 보는 인간 캐릭터 테스트",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7928504805613676"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
