import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/lib/image";

export default function Blog({ posts = [] }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 mb-md-80">
          <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
            <span className="text-outline-2">Latest News</span>
            <span className="text-outline-1">Latest News</span>
            <span className="text-outline">Latest News</span>
          </h2>
          <p className="section-text mb-60 mb-md-40 mb-sm-30">
            <span className="section-title-inline">Where?</span> Explore my
            weekly thoughts and insights. Get inspired and discover new ideas.
          </p>
          <div className="local-scroll">
            <Link
              href={`/blog`}
              className="link-hover-anim underline align-middle"
              data-link-animate="y"
            >
              <span className="link-strong link-strong-unhovered">
                All news
              </span>
              <span
                className="link-strong link-strong-hovered"
                aria-hidden="true"
              >
                All news
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* Blog Grid */}
      <div className="row gy-4">
        {posts.map((post, i) => (
          <div
            key={post._id}
            className={`post-prev-2 col-md-6 col-lg-4 
              ${i == 0 ? "mt-140 mt-md-0" : ""}
              ${i == 2 ? "mt-n140 mt-md-0" : ""}
            `}
          >
            <div className="post-prev-2-img">
              <Link href={`/blog/${post.slug.current}`}>
                {post.mainImage && (
                  <Image
                    width={700}
                    height={479}
                    src={urlForImage(post.mainImage)}
                    alt={post.title || "Blog post image"}
                  />
                )}
              </Link>
            </div>
            <h3 className="post-prev-2-title">
              <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
            </h3>
            <div className="post-prev-2-info">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
