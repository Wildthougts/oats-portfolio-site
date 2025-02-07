import { client } from "@/lib/sanity.client";
import { postQuery } from "@/lib/queries";
import { urlForImage } from "@/lib/image";
import { PortableText } from "@portabletext/react";
import Footer2 from "@/components/footers/Footer2";
import { boldOnepage } from "@/data/menu";
import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  { ssr: false }
);

import AnimatedText from "@/components/common/AnimatedText";
import Form9 from "@/components/blog/commentForm/Form9";
import Header2 from "@/components/headers/Header2";

export const metadata = {
  title: "Abimbola's News & Updates ",
  description: "Stay updated with my adventures",
};

export default async function MainBlogSinglePageFullWidth({ params }) {
  const post = await client.fetch(postQuery, { slug: params.slug });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <div className="theme-bold">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header2 links={boldOnepage} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage: "url(/assets/images/Bimbo3.jpg)",
                }}
              >
                <div className="container position-relative pt-30 pt-sm-50">
                  <div className="text-center">
                    <div className="row">
                      <div className="col-md-8 offset-md-2">
                        <h1 className="hs-title-1 mb-20">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text={post.title} />
                          </span>
                        </h1>
                        <div
                          className="blog-item-data mt-30 mt-sm-10 mb-0 wow fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <div className="d-inline-block me-3">
                            <a href="#">
                              <i className="mi-clock size-16"></i>
                              <span className="visually-hidden">Date:</span>
                              {new Date(post.publishedAt).toLocaleDateString()}
                            </a>
                          </div>
                          {post.author && (
                            <div className="d-inline-block me-3">
                              <a href="#">
                                <i className="mi-user size-16"></i>
                                <span className="visually-hidden">Author:</span>
                                {post.author.name}
                              </a>
                            </div>
                          )}
                          {post.categories?.length > 0 && (
                            <div className="d-inline-block me-3">
                              <i className="mi-folder size-16"></i>
                              <span className="visually-hidden">
                                Categories:
                              </span>
                              {post.categories.map((cat, index) => (
                                <a href="#" key={index}>
                                  {cat.title}
                                  {index < post.categories.length - 1
                                    ? ","
                                    : ""}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxContainer>
            </section>

            <section className="page-section">
              <div className="container relative">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <div className="blog-item mb-80 mb-xs-40">
                      <div className="blog-item-body">
                        {post.mainImage && (
                          <div className="blog-media mb-40 mb-xs-30">
                            <img
                              src={urlForImage(post.mainImage)}
                              alt={post.title}
                              className="w-full"
                            />
                          </div>
                        )}
                        <div className="blog-content">
                          <PortableText value={post.body} />
                        </div>
                      </div>
                    </div>

                    {/* <div className="mb-80 mb-xs-40">
                      <h4 className="blog-page-title">Leave a comment</h4>
                      <Form9 />
                    </div> */}

                    <div className="clearfix mt-40">
                      <a href="#" className="blog-item-more left">
                        <i className="mi-chevron-left" />
                        &nbsp;Prev post
                      </a>
                      <a href="#" className="blog-item-more right">
                        Next post&nbsp;
                        <i className="mi-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer2 />
        </div>
      </div>
    </>
  );
}
