import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ProductService from "../../services/products";


interface ICategoryList {
  name: string
}

export const CategoryList: React.FC<ICategoryList> = (props)=> {
  const {name} = props;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
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

  const setActive = (cat_name: string): string => {
    if (cat_name == name) {
      return "active"
    } else {
      return ''
    }
  }


  return (
    <ul className="list-cat">
      {
        categories.map((cat: any, index) =>
          <li key={index} className={setActive(cat.name)}>
            <Link to={`/category/${cat.name}/${cat.id}`}> {cat.name} </Link>
          </li>
        )
      }

    </ul>
  )
}