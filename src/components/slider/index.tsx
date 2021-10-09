import React from "react";
import {SliderItems} from "./SliderItems";

export const Slider = () => {
  return (
    <div id="shopify-section-1507179171162" className="shopify-section index-section index-section-slideshow">
      <div data-section-id={1507179171162} data-section-type="slideshow-section">
        <section className="home-slideshow-layout">
          <div className="home-slideshow-wrapper">
            <div className="group-home-slideshow">
              <div className="home-slideshow-inner">
                <div className="home-slideshow-content slideshow_1507179171162" style={{height: "600px"}}>
                  <SliderItems/>
                  <div className="tp-bannertimer" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}