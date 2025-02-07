import React from "react";
import Slider4 from "../sliders/Slider4";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/lib/image";

export default function Content1({ posts = [] }) {
  if (!posts?.length) {
    return (
      <div className="text-center">
        <p>No blog posts found.</p>
      </div>
    );
  }

  return (
    <>
      {posts.map((post) => {
        // Format date
        const publishDate = post.publishedAt
          ? new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : null;

        return (
          <div key={post._id} className="blog-item box-shadow round p-4 p-md-5">
            {/* Post Title */}
            <h2 className="blog-item-title">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            {/* Author, Categories, Comments */}
            <div className="blog-item-data">
              {publishDate && (
                <>
                  <a href="#">
                    <i className="mi-clock size-16" /> {publishDate}
                  </a>
                  <span className="separator">&nbsp;</span>
                </>
              )}

              {post.author && (
                <>
                  <a href="#">
                    <i className="mi-user size-16" /> {post.author.name}
                  </a>
                  <span className="separator">&nbsp;</span>
                </>
              )}

              {post.categories?.length > 0 && (
                <>
                  <i className="mi-folder size-16" />
                  {post.categories.map((category, index) => (
                    <React.Fragment key={category._id}>
                      <a href="#">{category.title}</a>
                      {index < post.categories.length - 1 ? ", " : ""}
                    </React.Fragment>
                  ))}
                </>
              )}
            </div>

            {/* Media */}
            <div className="blog-media">
              {post.mainImage && (
                <Link href={`/blog/${post.slug}`}>
                  <Image
                    src={urlForImage(post.mainImage)}
                    width={1350}
                    height={865}
                    alt={post.title || "Blog post image"}
                  />
                </Link>
              )}
            </div>

            {/* Text Intro */}
            {post.excerpt && (
              <div className="mb-30">
                <p className="mb-0">{post.excerpt}</p>
              </div>
            )}

            {/* Read More Link */}
            <div className="blog-item-foot">
              <Link
                href={`/blog/${post.slug}`}
                className="btn btn-mod btn-round btn-medium btn-gray"
              >
                Read More
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
