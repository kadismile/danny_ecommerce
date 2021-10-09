import React from "react";

export const SliderItems = () => {
  return (
    <ul>
      <li data-transition="random-static" data-masterspeed={2000} data-saveperformance="on">
        <img src="https://cdn.shopify.com/s/files/1/2487/3424/files/1_83ead4e7-aea5-4e9d-9434-4955aa4586dc.jpg" data-lazyload="https://cdn.shopify.com/s/files/1/2487/3424/files/1_83ead4e7-aea5-4e9d-9434-4955aa4586dc.jpg" alt="" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />
        <div className="slideshow-caption position-left transition-fade">
          <div className="group">
            <a href="collections.html">
              <img src="assets/images/slideshow-caption-1.png" alt="" />
            </a>
            <a className="_btn" href="collections.html">Find out more!</a>
          </div>
        </div>
      </li>
      <li data-transition="random-static" data-masterspeed={2000} data-saveperformance="on">
        <img src="https://cdn.shopify.com/s/files/1/2487/3424/files/2_65174602-c41e-437a-a443-b1ec72838027.jpg" data-lazyload="https://cdn.shopify.com/s/files/1/2487/3424/files/2_65174602-c41e-437a-a443-b1ec72838027.jpg" alt="" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />
        <div className="slideshow-caption position-left transition-slideup">
          <div className="group">
            <a href="collections.html">
              <img src="assets/images/slideshow-caption-2.png" alt="" />
            </a>
            <a className="_btn" href="collections.html">Buy now</a>
          </div>
        </div>
      </li>
      <li data-transition="slideright" data-masterspeed={2000} data-saveperformance="on">
        <img src="https://cdn.shopify.com/s/files/1/2487/3424/files/3_57dfffef-f4a7-4ff0-b03e-05e67769bafc.jpg" data-lazyload="https://cdn.shopify.com/s/files/1/2487/3424/files/3_57dfffef-f4a7-4ff0-b03e-05e67769bafc.jpg" alt="" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />
        <div className="slideshow-caption position-middle transition-fade">
          <div className="group">
            <a href="collections.html">
              <img src="assets/images/slideshow-caption-3.png" alt="" />
            </a>
            <a className="_btn" href="collections.html">Find out more!</a>
          </div>
        </div>
      </li>
    </ul>
  )
}