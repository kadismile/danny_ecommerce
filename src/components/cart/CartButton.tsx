import React from "react";
import {addItem, selectCart} from "../../redux/cartSlice";
import {useDispatch, useSelector} from 'react-redux'


export const CartButton = (props: any) => {
  const { product } = props
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const addToCart = () => {
    console.log("product ", product)
    product.quantity = 1
    dispatch(addItem(product))
  }

  const hideButton = () => {
    return cart.find((c:any) => c.id == product.id)
  }

return (
  <div className="purchase-section multiple">
    <div className="purchase">
      {!hideButton() ?
        <button id="add-to-cart" onClick={addToCart}  className="_btn add-to-cart" type="submit" name="add"><span><i className="cs-icon icon-cart" />Add to cart</span></button> :
        <button id="add-to-cart" className="_btn add-to-cart" style={{ backgroundColor: "#c8dec8"}} type="submit" name="add"><span><i className="cs-icon icon-small-check" /> Added to cart</span></button>
      }
    </div>
  </div>
)
}