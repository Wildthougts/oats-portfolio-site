"use client";

import React, { useEffect, useState } from "react";
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

export default function Home2({ onePage = false, dark = false }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const fetchedPosts = await client.fetch(
          postsQuery,
          {},
          { cache: "no-store" }
        );
        setPosts(fetchedPosts.slice(0, 3));
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

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
        {error ? (
          <div className="container">
            <p>Error loading blog posts. Please try again later.</p>
          </div>
        ) : loading ? (
          <div className="container">
            <p>Loading posts...</p>
          </div>
        ) : (
          <Blog posts={posts} />
        )}
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section className="full-wrapper" id="contact">
        <div className="page-section bg-border-gradient pt-0 pb-0 scroll-nav-invisible z-index-1">
          <div className="page-section container position-relative scroll-nav-invisible">
            {/* Decoration Image */}
            <div
              className="decoration-image-1"
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.5"
            >
              <Image
                src="/assets/images/cta1.jpg"
                alt="Image Description"
                width={336}
                height={406}
              />
            </div>
            {/* End Decoration Image */}
            {/* Decoration Image */}
            <div
              className="decoration-image-2"
              data-rellax-y=""
              data-rellax-speed="-0.5"
              data-rellax-percentage="0.4"
            >
              <Image
                src="/assets/images/cta2.jpg"
                alt="Image Description"
                width={350}
                height={256}
              />
            </div>
            {/* End Decoration Image */}
            <div className="row text-center">
              <div className="col-md-8 offset-md-2 ">
                <p className="section-text mb-60 mb-md-40 mb-sm-30">
                  Ready to elevate your chess game? Let’s work together to
                  unlock your full potential—explore my services and start your
                  journey today
                </p>
                <div className="local-scroll">
                  <Link
                    href={`https://wa.me/18623737399`}
                    className="btn btn-mod btn-large btn-round btn-hover-anim"
                    target="_blank"
                  >
                    <span>Let's talk </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <Contact />
      </section> */}
    </>
  );
}
