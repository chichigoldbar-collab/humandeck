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
  applicationName: "휴먼덱",
  authors: [{ name: "테디맨션" }],
  creator: "테디맨션",
  publisher: "테디맨션",
  other: {
    "google-adsense-account": "ca-pub-7928504805613676",
    "google-site-verification": "1sOamcmAwFPJok6hZpGYxUO806EYRZLiKidtEbY7sdc",
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "휴먼덱",
    legalName: "테디맨션",
    url: siteUrl,
    email: "teddysmansion01@gmail.com",
    telephone: "070-4136-3336",
    address: {
      "@type": "PostalAddress",
      streetAddress: "서울특별시 종로구 성균관로 15-8 2층",
      addressCountry: "KR",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "휴먼덱",
    url: siteUrl,
    description:
      "관계, 판단, 자극 반응, 생활 습관을 다양한 테스트와 해설 가이드로 읽어보는 콘텐츠형 테스트 서비스",
    inLanguage: "ko-KR",
    publisher: {
      "@type": "Organization",
      name: "테디맨션",
    },
  };

  return (
    <html lang="ko">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
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
