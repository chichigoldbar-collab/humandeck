import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://humandeck.vercel.app");

const routes = [
  "",
  "/about",
  "/articles",
  "/articles/stress-reactions",
  "/articles/burnout-signs",
  "/articles/avoidance-patterns",
  "/articles/overthinking-patterns",
  "/articles/stress-habits",
  "/articles/personality-test-why-relatable",
  "/articles/how-to-read-test-results",
  "/articles/taste-tests-and-self-understanding",
  "/articles/workplace-survival-patterns",
  "/articles/relationship-test-reading",
  "/articles/psychology-vs-personality-tests",
  "/articles/why-situation-based-tests-work",
  "/articles/how-to-choose-a-test",
  "/contact",
  "/faq",
  "/psychology-tests",
  "/personality-tests",
  "/privacy",
  "/terms",
  "/tests",
  "/guides",
  "/guides/character-results",
  "/guides/company-results",
  "/guides/couple-results",
  "/guides/eat-results",
  "/guides/baseball-results",
  "/guides/focus-results",
  "/guides/ghost-results",
  "/guides/judgment-results",
  "/guides/movie-results",
  "/guides/music-results",
  "/guides/persona-results",
  "/guides/stimulation-results",
  "/guides/stress-results",
  "/guides/survival-results",
  "/guides/zombie-results",
  "/character",
  "/judgment",
  "/stimulation",
  "/eat-type",
  "/couple-type",
  "/ghost-sense",
  "/focus-type",
  "/stress-type",
  "/persona-type",
  "/music-type",
  "/movie-type",
  "/baseball-type",
  "/survival-type",
  "/company-type",
  "/zombie-type",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-04-26T00:00:00+09:00");

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route.startsWith("/guides") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route === "/tests" || route === "/guides" ? 0.9 : 0.8,
  }));
}
