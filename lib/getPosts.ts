import { client } from "./sanity.client";

export async function getAllPosts() {
  const query = `*[_type == "post"] {
    _id,
    slug {
      current
    },
    publishedAt
  }`;

  try {
    const posts = await client.fetch(query);
    return posts.map((post: any) => ({
      url: `https://abimbolaosunfuyi.com/blog/${post.slug.current}`,
      lastModified: post.publishedAt
        ? new Date(post.publishedAt).toISOString()
        : new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error fetching posts for sitemap:", error);
    return [];
  }
}
