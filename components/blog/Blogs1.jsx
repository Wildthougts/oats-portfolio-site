"use client";

import Image from "next/image";
import Link from "next/link";
import Pagination from "../common/Pagination";
import { urlForImage } from "@/lib/image";

export default function Blogs1({ posts = [] }) {
  if (!posts?.length) {
    return (
      <div className="container relative">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="text-center">
              <p>No blog posts found.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container relative">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          {posts.map((post) => {
            // Ensure we have the required data
            if (!post?.slug) return null;

            // Format date
            const publishDate = post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : null;

            return (
              <div
                key={post._id}
                className="blog-item mb-80 mb-xs-40 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="blog-item-body">
                  {/* Blog Image */}
                  {post.mainImage && (
                    <div className="blog-item-img mb-30">
                      <Link href={`/blog/${post.slug}`}>
                        <Image
                          src={urlForImage(post.mainImage)}
                          width={770}
                          height={430}
                          alt={post.title || "Blog post image"}
                          className="w-100"
                          priority={true}
                        />
                      </Link>
                    </div>
                  )}

                  {/* Blog Metadata */}
                  <div className="blog-item-data">
                    {/* Date */}
                    {publishDate && (
                      <div className="d-inline-block me-3">
                        <span>
                          <i className="mi-clock size-16"></i>
                          <span className="visually-hidden">Date:</span>
                          {publishDate}
                        </span>
                      </div>
                    )}

                    {/* Author */}
                    {post.author?.name && (
                      <div className="d-inline-block me-3">
                        <span>
                          <i className="mi-user size-16"></i>
                          <span className="visually-hidden">Author:</span>
                          {post.author.name}
                        </span>
                      </div>
                    )}

                    {/* Categories */}
                    {post.categories?.length > 0 && (
                      <div className="d-inline-block me-3">
                        <i className="mi-folder size-16"></i>
                        <span className="visually-hidden">Categories:</span>
                        {post.categories.map((category, index) => (
                          <span key={category._id}>
                            <Link
                              href={`/blog/category/${category.title.toLowerCase()}`}
                              className="category-link"
                            >
                              {category.title}
                            </Link>
                            {index < post.categories.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Blog Title */}
                  <h2 className="blog-item-title">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title || "Untitled Post"}
                    </Link>
                  </h2>

                  {/* Blog Excerpt */}
                  {post.excerpt && (
                    <div className="blog-item-text">{post.excerpt}</div>
                  )}

                  {/* Read More Button */}
                  <div className="blog-item-foot">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="btn btn-mod btn-round btn-border btn-small"
                      aria-label={`Read more about ${post.title || "this post"}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Pagination - only show if we have posts */}
          {/* {posts.length > 0 && <Pagination />} */}
        </div>
      </div>

      <style jsx>{`
        .category-link {
          transition: color 0.3s ease;
          text-decoration: none;
        }
        .category-link:hover {
          color: var(--accent-color, #e41919);
        }
      `}</style>
    </div>
  );
}
