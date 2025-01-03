"use client";
import Image from "next/image";
import { photoItems } from "@/data/gallery";
import { Item, Gallery } from "react-photoswipe-gallery";

export default function GalleryComponent() {
  return (
    <div className="container relative">
      <div className="mb-60 mb-sm-40">
        <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
          <span className="text-outline-2">Gallery</span>
          <span className="text-outline-1">Gallery</span>
          <span className="text-outline">Gallery</span>
        </h2>
      </div>
      {/* Photo Grid */}
      <Gallery>
        <div className="row">
          {/* Photo Item */}
          {photoItems.slice(0, 3).map((elm, i) => (
            <div key={i} className="col-md-4">
              <Item
                original={elm.src}
                thumbnail={elm.src}
                width={1350}
                height={865}
              >
                {({ ref, open }) => (
                  <div
                    className="post-prev-img rounded-0 mb-30 wow fadeScaleIn"
                    data-wow-offset={0}
                  >
                    <a className="lightbox mfp-image">
                      <Image
                        width={1350}
                        height={865}
                        ref={ref}
                        onClick={open}
                        src={elm.src}
                        alt="Image Description"
                      />
                    </a>
                  </div>
                )}
              </Item>
            </div>
          ))}
          {/* End Photo Item */}

          {/* End Photo Item */}
        </div>{" "}
      </Gallery>
      {/* End Photo Grid */}
    </div>
  );
}
