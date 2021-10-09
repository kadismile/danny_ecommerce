import React from 'react'
import {NavCartItems} from "./NavCartItems";
import {selectCart} from "../../../../redux/cartSlice";
import {useSelector} from 'react-redux'

export const CartNav = () => {
  const cart = useSelector(selectCart);
  return (
    <div className="icon_cart">
      <div className="m_cart-group">
          <a className="cart dropdown-toggle dropdown-link" data-toggle="dropdown">
          <i className="sub-dropdown1 visible-sm visible-md visible-lg" />
          <i className="sub-dropdown visible-sm visible-md visible-lg" />
          <div className="num-items-in-cart">
            <div className="items-cart">
              <div className="num-items-in-cart">
                <i className="fa fa-shopping-cart" />
                <span className="cart_text">
                     Cart <span className="number">({cart.length})</span>
                  </span>
              </div>
            </div>
          </div>
        </a>
          <NavCartItems cart={cart}/>
      </div>
    </div>
  )
}