import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { setProduct} from '../../redux/productSlice'
interface ISingleProduct {
  product: {
    name: string,
    id: number,
    images: any,
    regular_price: string,
    price: string,
    categories: any
  }
}


export const SingleProduct: React.FC<ISingleProduct> = (props) => {
  const dispatch = useDispatch();
  const {product} = props

  return (
    <div className="row-container product list-unstyled clearfix product-circle">
      <div className="row-left">
        <Link
          className="hoverBorder container_item"
          to={{ pathname: `/product/${product.name}/${product.id}`, state: { productId: product.id, catId: product.categories[0].id},
        }}>
          <div className="hoverBorderWrapper">
            <img src={product.images[0].src} className="img-responsive front" alt={product.images[0].name} />
            <div className="mask" />
          </div>
        </Link>

        <div className="hover-mask">
          <div className="group-mask">
            <div className="inner-mask">
              <div className="group-actionbutton">
                <ul className="quickview-wishlist-wrapper">
                  <li className="wishlist">
                    <a title="Add To Wishlist" className="wishlist wishlist-coke" data-wishlisthandle="coke"><span className="cs-icon icon-heart" /></a>
                  </li>
                  <li className="quickview hidden-xs hidden-sm">
                    <div className="product-ajax-cart">
                      <span className="overlay_mask" />
                      <div data-handle="coke" data-target="#quick-shop-modal" className="quick_shop" data-toggle="modal">
                        <a ><span className="cs-icon icon-eye" /></a>
                      </div>
                    </div>
                  </li>
                  <li className="compare">
                    <a title="Add To Compare" className="compare compare-coke" data-comparehandle="coke"><span className="cs-icon icon-retweet2" /></a>
                  </li>
                </ul>
              </div>
              <form action="http://demo.themeforshop.com/html_fastfood/cart.html" method="post">
                <div className="effect-ajax-cart">
                  <button className="_btn select-option" type="button"  title="Select Option">Browse More</button>
                </div>
              </form>
            </div>
            {/*inner-mask*/}
          </div>
          {/*Group mask*/}
        </div>
      </div>
      <div className="row-right animMix">
        <div className="product-title">
          <Link to={{
            pathname: `/product/${product.name}/${product.id}`,
            state: product
          }}>{product.name}</Link>
        </div>
        <div className="product-price">
          <span className="price_sale"><span className="money" data-currency-usd="$10.00">${product.price}.00</span></span>
          <del className="price_compare"> <span className="money" data-currency-usd="$15.00">${product.regular_price}.00</span></del>
        </div>
      </div>
    </div>
  )
}