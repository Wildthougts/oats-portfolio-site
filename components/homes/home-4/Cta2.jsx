import { features2 } from "@/data/features";
import React from "react";

export default function Cta2() {
  return (
    <>
      <div className="row mt-n10">
        {/* Features List Item */}
        {features2.map((elm, i) => (
          <div key={i} className="col-lg-6 d-flex mt-10">
            <div className="features-list-icon features-list-color-2">
              <i className="mi-check" />
            </div>
            <div className="features-list-text">{elm.text}</div>
          </div>
        ))}
        {/* End Features List Item */}

        {/* End Features List Item */}
      </div>
    </>
  );
}
