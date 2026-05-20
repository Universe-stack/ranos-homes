import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://ranoshomes.com.ng/sitemap.xml",
    host: "https://ranoshomes.com.ng",
  };
}