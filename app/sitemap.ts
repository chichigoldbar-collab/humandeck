import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://humandeck.vercel.app");

const routes = [
  "",
  "/about",
  "/contact",
  "/faq",
  "/privacy",
  "/terms",
  "/tests",
  "/guides",
  "/guides/character-results",
  "/guides/couple-results",
  "/guides/eat-results",
  "/guides/focus-results",
  "/guides/ghost-results",
  "/guides/judgment-results",
  "/guides/movie-results",
  "/guides/music-results",
  "/guides/persona-results",
  "/guides/stimulation-results",
  "/guides/stress-results",
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
