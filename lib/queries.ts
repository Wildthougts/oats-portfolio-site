import { groq } from "next-sanity";

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    publishedAt,
    author->{
      name,
      image
    },
    categories[]->{
      _id,
      title,
      description
    }
  }
`;

export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    body,
    publishedAt,
    author->{
      name,
      image,
      bio
    },
    categories[]->{
      _id,
      title,
      description
    }
  }
`;

export const postPathsQuery = groq`
  *[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }
`;

export const categoriesQuery = groq`
  *[_type == "category"] {
    _id,
    title,
    description,
    "postCount": count(*[_type == "post" && references(^._id)])
  }
`;
