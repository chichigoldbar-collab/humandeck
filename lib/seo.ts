import type { Metadata } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://humandeck.vercel.app");

export function absoluteUrl(path: string) {
  if (!path || path === "/") return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
}): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: "휴먼덱",
      locale: "ko_KR",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function buildBreadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildCollectionPage({
  name,
  description,
  path,
  items,
}: {
  name: string;
  description: string;
  path: string;
  items: { name: string; path: string; description?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: "ko-KR",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(item.path),
        name: item.name,
        description: item.description,
      })),
    },
  };
}

export function buildArticleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    mainEntityOfPage: absoluteUrl(path),
    url: absoluteUrl(path),
    datePublished,
    dateModified,
    inLanguage: "ko-KR",
    author: {
      "@type": "Organization",
      name: "테디맨션",
      url: absoluteUrl("/about"),
    },
    publisher: {
      "@type": "Organization",
      name: "테디맨션",
      url: absoluteUrl("/about"),
    },
  };
}

export function buildAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "휴먼덱 서비스 소개",
    url: absoluteUrl("/about"),
    description:
      "휴먼덱은 관계, 판단, 자극 반응, 생활 습관 같은 패턴을 짧은 테스트와 해설형 콘텐츠로 정리하는 서비스입니다.",
    inLanguage: "ko-KR",
    about: {
      "@type": "Organization",
      name: "테디맨션",
      url: absoluteUrl("/about"),
    },
  };
}

export function buildContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "휴먼덱 문의하기",
    url: absoluteUrl("/contact"),
    description: "휴먼덱 서비스 문의, 광고 문의, 권리 침해 신고, 오류 제보를 위한 공식 연락처 페이지",
    inLanguage: "ko-KR",
    mainEntity: {
      "@type": "Organization",
      name: "테디맨션",
      email: "teddysmansion01@gmail.com",
      telephone: "070-4136-3336",
      address: {
        "@type": "PostalAddress",
        streetAddress: "서울특별시 종로구 성균관로 15-8 2층",
        addressCountry: "KR",
      },
    },
  };
}

export function buildFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
