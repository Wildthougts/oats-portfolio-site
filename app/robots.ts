import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/blog/"],
      disallow: "/private/",
    },
    sitemap: "https://abimbolaosunfuyi/sitemap.xml",
  };
}
