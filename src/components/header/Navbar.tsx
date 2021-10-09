import React, {useEffect, useState} from "react";
import {RightNavBar} from "./RightNavBar";
import ProductService from "../../services/products";
import {Link} from "react-router-dom";

export const Navbar = () => {
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
    <div className="nav-top">
      <div className="nav-menu">
        <ul className="navigation-links ">
          {
            categories.map( (cat:any, index) =>
              <li className="nav-item">
                <Link to={`/category/${cat.name}/${cat.id}`}> {cat.name} </Link>
            </li>
            )
          }

        </ul>
      </div>
      <RightNavBar/>
    </div>
  )
}