import React from "react";
import Experience from "./Experience";
import Awards from "./Awards";
import { client } from "@/lib/sanity.client";
import { postsQuery } from "@/lib/queries";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Contact from "./Contact";
import Faq from "./Faq";
import Link from "next/link";
import Image from "next/image";
import Gallery from "@/components/elements/Gallery";

export default async function Home2({ onePage = false, dark = false }) {
  // Fetch posts for the blog section
  const posts = await client.fetch(postsQuery);
  const limitedPosts = posts.slice(0, 3); // Limit to 3 posts for homepage
  return (
    <>
      <section
        className={`page-section  scrollSpysection  pb-0 ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5 order-last order-md-first">
              <div className="overflow-hidden">
                <Image
                  width={800}
                  height={1095}
                  src="/assets/images/bimbo1.jpg"
                  className="w-100 wow scaleOutIn"
                  alt="Image Description"
                />
              </div>
            </div>
            <div className="col-md-7 col-lg-6 offset-lg-1 d-flex align-items-center mb-sm-80">
              <div className="wow fadeInUp">
                <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                  <span className="text-outline-2" aria-hidden="true">
                    About
                  </span>
                  <span className="text-outline-1" aria-hidden="true">
                    About
                  </span>
                  <span className="text-outline">About</span>
                </h2>
                <p className="section-text mb-60 mb-md-40 mb-sm-30">
                  <span className="section-title-inline">Who?</span> I’m a Fide
                  chess Master, avid reader, and entrepreneur who finds
                  inspiration in art and strategy. My life revolves around
                  mastering the game of chess, exploring the limitless worlds
                  within books, and creating ventures that merge creativity with
                  purpose. Whether it’s solving puzzles, crafting innovative
                  ideas, or appreciating the beauty of art, I thrive on
                  balancing intellect with creativity. This portfolio is a
                  glimpse into my passions, accomplishments, and the journey I’m
                  building one move at a time. Let’s connect and create
                  something extraordinary!
                </p>
                <div className="local-scroll">
                  {onePage ? (
                    <a
                      href="#services"
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Learn more{" "}
                        <span className="visually-hidden">about us</span>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Learn more{" "}
                        <span className="visually-hidden">about us</span>
                      </span>
                    </a>
                  ) : (
                    <Link
                      href={`/bold-about${dark ? "-dark" : ""}`}
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Learn more{" "}
                        <span className="visually-hidden">about us</span>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Learn more{" "}
                        <span className="visually-hidden">about us</span>
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-section overflow-hidden">
        <Experience />
      </div>
      <section
        className={`page-section scrollSpysection  pt-0  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="awards"
      >
        <Awards />
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="services"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-md-80">
              <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                <span className="text-outline-2">Services</span>
                <span className="text-outline-1">Services</span>
                <span className="text-outline">Services</span>
              </h2>
              <p className="section-text mb-60 mb-md-40 mb-sm-30">
                <span className="section-title-inline">Why?</span> As a FIDE
                Chess Master with years of competitive experience, I am
                passionate about helping players at all levels unlock their full
                potential in chess
              </p>
              <div className="local-scroll">
                {onePage ? (
                  <>
                    {" "}
                    <a
                      href="#contact"
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Request a quote
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Request a quote
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/bold-contact${dark ? "-dark" : ""}`}
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Request a quote
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Request a quote
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-7 col-xl-6 offset-xl-1">
              {/* Accordion */}
              <Faq />
              {/* End Accordion */}
            </div>
          </div>
        </div>
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />

      <section className="page-section">
        <Gallery />
      </section>
      {/* <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
        <Portfolio />
      </section> */}
      {/* <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      /> */}
      <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""} `}
      >
        <Testimonials />
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="blog"
      >
        <Blog posts={limitedPosts} />
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <Contact />
      </section>
    </>
  );
}
