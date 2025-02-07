import { client } from "@/lib/sanity.client";
import { postsQuery, categoriesQuery } from "@/lib/queries";
import Footer2 from "@/components/footers/Footer2";
import dynamic from "next/dynamic";
import { boldOnepage } from "@/data/menu";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  { ssr: false }
);

import AnimatedText from "@/components/common/AnimatedText";
import Blogs1 from "@/components/blog/Blogs1";
import Content1 from "@/components/blog/content/Content1";
import Header2 from "@/components/headers/Header2";

export const metadata = {
  title: "Oats News & Updates | Creativity, and Entrepreneurship",
  description: "Stay updated on my journey",
};

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function MainBlogClassicPageFullWidth() {
  try {
    // Fetch data with error handling
    const [posts, categories] = await Promise.all([
      client.fetch(postsQuery, {}, { next: { revalidate: 60 } }),
      client.fetch(categoriesQuery, {}, { next: { revalidate: 60 } }),
    ]);

    // Add logging to debug fetch results
    console.log("Fetched posts:", posts?.length || 0);
    console.log("Fetched categories:", categories?.length || 0);

    if (!posts || !Array.isArray(posts)) {
      throw new Error("Posts data is invalid");
    }

    // Transform Sanity data to match your existing component structure
    const formattedPosts = posts.map((post) => ({
      _id: post._id,
      title: post.title,
      date: post.publishedAt,
      publishedAt: post.publishedAt,
      slug: post.slug.current,
      excerpt: post.excerpt,
      author: post.author,
      categories: post.categories,
      mainImage: post.mainImage,
    }));

    return (
      <>
        <div className="theme-bold">
          <div className="page" id="top">
            <nav className="main-nav transparent stick-fixed wow-menubar">
              <Header2 links={boldOnepage} />s
            </nav>
            <main id="main">
              <section className="page-section pt-0 pb-0" id="home">
                <ParallaxContainer
                  className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                  style={{
                    backgroundImage: "url(/assets/images/Books1.jpg",
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
                              <AnimatedText text="Blog" />
                            </span>
                          </h1>
                          <div className="row">
                            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                              <p
                                className="section-descr mb-0 wow fadeIn"
                                data-wow-delay="0.2s"
                                data-wow-duration="1.2s"
                              >
                                {formattedPosts.length} articles and counting
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ParallaxContainer>
              </section>
              <section className="page-section">
                <Blogs1 posts={formattedPosts} />
              </section>
            </main>
            <Footer2 />
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    throw error; // Let Next.js error boundary handle this
  }
}
