import React from 'react'
import {Logo} from "./Logo";
import {Navbar} from "./Navbar";
import {NavMobile} from "./NavMobile";


export const Header =()=> {
  return (
    <div>
      <header id="top" className="header clearfix">
        <div id="shopify-section-theme-header" className="shopify-section">
          <div data-section-id="theme-header" data-section-type="header-section">
            <section className="main-header">
              <div className="main-header-wrapper">
                <div className="container clearfix">
                  <div className="row">
                    <div className="main-header-inner">
                      <Logo/>
                      <Navbar/>
                      <NavMobile/>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </header>
      <div className="fix-sticky" />
    </div>
  );
}
