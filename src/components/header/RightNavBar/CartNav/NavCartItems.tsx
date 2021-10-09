import React from "react";
import {Link} from "react-router-dom";

export const NavCartItems = (props: any)=> {
  const {cart} = props
  const total = () => {
    return cart.reduce((a:any,b:any) => a + Number(b.price), 0)
  }
  return (
    <div className="dropdown-menu cart-info">
  <div className="cart-content">
    <div className="text-items"><span>2 item(s) in the shopping cart</span> <span className="cs-icon icon-close close-dropdown" /> </div>
    <div className="items control-container">
      {
        cart.map((c: any, index: number) => <div className="group_cart_item" key={index}>
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
            </div>
            <div className="cart-price"><span className="money" data-currency-usd="$10.00" data-currency="USD">${c.price}.00</span></div>
            <div className="cart-qty">
              <span className="quantity">Qty: {c.quantity}</span>
            </div>
          </div>
        </div>)
      }
    </div>
    <div className="subtotal"><span>Subtotal:</span><span className="cart-total-right money" data-currency-usd="$30.00" data-currency="USD">${total()}.00</span></div>
    <div className="action">
      <Link className="_btn" to={"/cart"}> View All Your Cart </Link>
      <button className="_btn float-right"> Proceed To Checkout </button>
    </div>
  </div>
</div>
)
}