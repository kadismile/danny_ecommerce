import React from "react";
import {Link} from "react-router-dom";
import {removeItem} from "../../redux/cartSlice";
import {useDispatch, useSelector} from 'react-redux'

export const MobileCartItems = (props: any) => {
  const {cart} = props
  const dispatch = useDispatch();

  const removeProduct = (id: number) => {
    dispatch(removeItem(id))
  }
  return (
    cart.map((c: any, index: number) =>
      <div className="group_cart_item" key={index}>
        <div className="cart-left">
          <Link
            className="cart-image"
            to={{ pathname: `/product/${c.name}/${c.id}`, state: { productId: c.id, catId: c.categories[0].id},
            }}>
              <img src={c.images[0].src} alt="" />
          </Link>
        </div>
        <div className="cart-right">
          <div className="cart-title">
            <Link to={{ pathname: `/product/${c.name}/${c.id}`, state: { productId: c.id, catId: c.categories[0].id} }}>
              {c.name}
            </Link>
            <span style={{float: "right", color: "#c72b2b"}} onClick={ () => {removeProduct(c.id)}}> <i className="cs-icon icon-bin" style={{fontSize: "12px"}} /> </span>
          </div>
          <div className="cart-price"><span className="money" data-currency-usd="$10.00" data-currency="USD">${c.price}.00</span></div>
          <div className="cart-qty">
            <span className="quantity">Qty: {c.quantity}</span>
          </div>
        </div>
      </div>
    )
  )
}