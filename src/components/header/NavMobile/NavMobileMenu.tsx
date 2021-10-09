import React, {useEffect, useState} from "react";
import ProductService from "../../../services/products";
import {Link} from "react-router-dom";


export const NavMobileMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (
      async ()=> {
        let getCategories = await ProductService.listCategories()
        if (getCategories.data) {
          let data = getCategories.data.filter((cat:any) => cat.name != 'Uncategorized')
          setCategories(data)
        }
      }
    )()
  },[])

  return (
    <div className="navMobile-menu">
      <div className="group_navbtn">
        <a href="#" className="dropdown-toggle-navigation">
          <span className="cs-icon icon-menu" />
          <i className="sub-dropdown1 visible-sm visible-md visible-lg" />
          <i className="sub-dropdown visible-sm visible-md visible-lg" />
        </a>
        <div className="navigation_dropdown_scroll dropdown-menu">
          <ul className="navigation_links_mobile">
            <br/>
            {
              categories.map((cat:any, index) =>
                <li className="nav-item">
                  <a href={`/category/${cat.name}/${cat.id}`}> {cat.name}</a>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}