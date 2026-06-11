import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.usnext.org";
  return [
    { url: `${base}/`, priority: 1, changeFrequency: "weekly" },
    { url: `${base}/privacy-policy`, priority: 0.3, changeFrequency: "yearly" },
    {
      url: `${base}/terms-of-service`,
      priority: 0.3,
      changeFrequency: "yearly",
    },
  ];
}
