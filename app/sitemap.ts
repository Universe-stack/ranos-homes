import type { MetadataRoute } from "next";

const siteUrl = "https://ranoshomes.com.ng";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/shop`, changeFrequency: "daily", priority: 0.9 },
    {
      url: `${siteUrl}/interior-design`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    { url: `${siteUrl}/portfolio`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/blog`, changeFrequency: "daily", priority: 0.8 },
    { url: `${siteUrl}/faq`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, changeFrequency: "monthly", priority: 0.6 },
  ] satisfies MetadataRoute.Sitemap;

  return routes.map((route) => ({
    ...route,
    lastModified: new Date(),
  }));
}