import { client } from "./sanity.client";

export async function getArticleBySlug(slug: string) {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      mainImage,
      "ogImage": mainImage,
      publishedAt,
      author->{name},
      body,
      "plainBody": pt::text(body) // Convert body to plain text
    }`;

    const post = await client.fetch(query, { slug });

    if (!post) {
      throw new Error(`Post with slug ${slug} not found`);
    }

    // Create a description from the first 160 characters of the body text
    const description = post.plainBody
      ? `${post.plainBody.substring(0, 160)}...`
      : `Read ${post.title} - Abimbola Osunfuyi's Blog`;

    return {
      title: post.title,
      description,
      publishedAt: post.publishedAt,
      author: post.author?.name,
      ogImage: post.ogImage,
    };
  } catch (error) {
    console.error("Error fetching article metadata:", error);
    return {
      title: "Blog Post - Abimbola Osunfuyi",
      description: "Read my latest thoughts and insights",
      publishedAt: new Date().toISOString(),
      ogImage: null,
    };
  }
}
