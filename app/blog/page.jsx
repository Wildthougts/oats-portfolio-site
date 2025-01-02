import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";

import { categories } from "@/data/categories";
import { tags } from "@/data/tags";
import { archiveLinks } from "@/data/archeve";

import Pagination from "@/components/common/Pagination";
import Content1 from "@/components/blog/content/Content1";
import { boldOnepage } from "@/data/menu";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";

export const metadata = {
  title:
    "Main Blog Classic Page FullWidth || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function MainBlogClassicPageFullWidth() {
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
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
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
                              Take a peek into my mind.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </ParallaxContainer>
            </section>
            <>
              {/* Section */}
              <section className="page-section">
                <div className="container relative">
                  <div className="row">
                    {/* Content */}
                    <div className="col-lg-8 offset-lg-2">
                      <Content1 />
                      {/* End Post */}
                      {/* Pagination */}
                      <Pagination />
                      {/* End Pagination */}
                    </div>
                    {/* End Content */}
                  </div>
                </div>
              </section>

              {/* End Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
            </>
          </main>
          <Footer2 />
        </div>{" "}
      </div>
    </>
  );
}
