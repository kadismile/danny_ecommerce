import React from "react";
import {CartNav} from "./CartNav";
import {NavAuth} from "./NavAuth";

export const RightNavBar = () => {
  return (
    <div className="nav-icon">
      <div className="m_search search-icon">
        <a href="#" data-toggle="modal" data-target="#lightbox-search">
          <i className="fa fa-search" />
        </a>
      </div>

      <CartNav/>

      <NavAuth/>
    </div>
  )
}