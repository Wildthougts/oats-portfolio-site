"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import TypeWriter from "@/components/common/TypeWriter";

export default function Hero2({ dark }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMuteUnmute = () => {
    if (isMuted) {
      videoRef.current.muted = false;
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };
  return (
    <div className="container min-height-100vh overflow-hidden d-flex align-items-center pt-100 pb-100">
      {/* Background Video */}
      {/* Please replace the video file in folder "video" with your own file */}
      <div className="bg-video-wrapper">
        <video
          ref={videoRef}
          className="bg-video"
          preload="auto"
          autoPlay
          muted
          loop
        >
          <source src="/assets/videos/video-5.mp4" type="video/mp4" />
        </video>
        {dark ? (
          <div className="bg-video-overlay bg-dark-alpha-90"></div>
        ) : (
          <div className="bg-video-overlay bg-light-alpha-90" />
        )}
      </div>
      <a
        onClick={toggleMuteUnmute}
        href="#"
        role="button"
        className="bg-video-button-muted"
      >
        <i className={`mi-volume-${isMuted ? "up" : "off"}`} />
        <span className="visually-hidden">Volume On</span>
      </a>
      <a
        onClick={togglePlayPause}
        href="#"
        role="button"
        className="bg-video-button-pause"
      >
        <i className={`mi-${isPlaying ? "pause" : "play"}`} />
        <span className="visually-hidden">Pause</span>
      </a>

      {/* End Background Video */}
      {/* Home Section Content */}
      <div className="home-content text-center">
        <div className="row">
          {/* Home Section Text */}
          <div className="col-lg-9 d-flex align-items-center mb-md-60">
            <div className="w-100 text-center text-lg-start">
              <h2 className="section-title-tiny font-alt mb-30 mb-sm-20 wow fadeInUp">
                I’m Abimbola Osunfuyi
              </h2>
              <h1
                className="hs-title-13a font-alt mb-50 mb-sm-30 wow fadeRotateIn"
                data-wow-delay="0.2s"
              >
                Building a Legacy <br />
                <span className="visually-hidden">
                  Chess, Enterprenuership, Books, and Art
                </span>
                <TypeWriter
                  strings={[" Through Chess", "Enterprenuership", "and Art"]}
                  colorClass=""
                />
              </h1>
              <div
                className="local-scroll wow fadeInUp wch-unset"
                data-wow-delay="0.5s"
                data-wow-offset={0}
              >
                <a
                  href={`https://wa.me/18623737399`}
                  className={`btn btn-mod ${
                    dark ? "btn-w" : ""
                  }  btn-medium btn-circle`}
                  data-btn-animate="y"
                  target="_blank"
                >
                  <span className="btn-animate-y">
                    <span className="btn-animate-y-1">Let's talk</span>
                    <span className="btn-animate-y-2" aria-hidden="true">
                      Let's talk
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* End Home Section Text */}
          {/* Image */}
          <div className="col-10 offset-1 col-lg-3 offset-lg-0 d-flex align-items-center">
            <div className="w-100">
              <div className="composition-9">
                <div
                  className="composition-9-decoration-1 circle-large d-none d-lg-block parallax-mousemove"
                  data-offset={30}
                />
                <div
                  className="composition-9-image circle-large parallax-mousemove"
                  data-offset={60}
                >
                  <Image
                    src="/assets/images/Bimbohero.jpg"
                    width={500}
                    height={800}
                    alt="Image description"
                    className="wow scaleOutIn"
                    data-wow-offset={0}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* End Image */}
        </div>
      </div>
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-wrap-4 wow fadeInUp"
        data-wow-offset={0}
      >
        <div className="full-wrapper text-end">
          <a href="#about" className="scroll-down-4">
            <i className="icon-arrow-down1 size-22" />
          </a>
        </div>
      </div>
      {/* End Scroll Down */}
    </div>
  );
}
