import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/getPosts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Base routes that don't depend on external data
    const routes: MetadataRoute.Sitemap = [
      {
        url: "https://abimbolaosunfuyi.com",
        lastModified: new Date().toISOString(),
        changeFrequency: "yearly",
        priority: 1,
      },
      {
        url: "https://abimbolaosunfuyi.com/blog",
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.5,
      },
    ];

    // Get dynamic post routes
    const posts = await getAllPosts();

    // Combine and return all routes
    return [...routes, ...posts];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    // Return at least the base routes if there's an error
    return [
      {
        url: "https://abimbolaosunfuyi.com",
        lastModified: new Date().toISOString(),
        changeFrequency: "yearly",
        priority: 1,
      },
    ];
  }
}
