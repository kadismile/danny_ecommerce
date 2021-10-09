import React from "react";
import {MobileLogo} from "./MobileLogo";
import {NavMobileMenu} from "./NavMobileMenu";
import {selectCart} from "../../../redux/cartSlice";
import {MobileCartItems} from "../../cart/MobileCartItems";
import {useSelector} from "react-redux";
import {selectUser} from "../../../redux/userSlice";

export const NavMobile = ()=> {
  const cart = useSelector(selectCart);
  const user = useSelector(selectUser);
  const total = () => {
    return cart.reduce((a:any,b:any) => a + Number(b.price), 0)
  }

  return (
    <div className="navMobile-navigation">

      <MobileLogo/>

      <div className="group_mobile_right">
        <div className="nav-icon">
          <div className="m_search search-tablet-icon">
            <span className="dropdownMobile-toggle search-dropdown">
              <span className="icon-dropdown cs-icon icon-search" data-class="cs-icon icon-search" />
              <i className="sub-dropdown1 visible-sm visible-md visible-lg" />
              <i className="sub-dropdown visible-sm visible-md visible-lg" />
            </span>
            <div className="m_dropdown-search dropdown-menu search-content">
              <form className="search" action="http://demo.themeforshop.com/html_fastfood/search.html">
                <input type="hidden" name="type"  />
                <input type="text" name="q" className="search_box" placeholder="search our store" />
                <span className="search-clear cs-icon icon-close" />
                <button className="search-submit" type="submit">
                  <span className="cs-icon icon-search" />
                </button>
              </form>
            </div>
          </div>
          <div className="icon_cart">
            <div className="m_cart-group">
              <a className="cart dropdownMobile-toggle dropdown-link">
                <i className="sub-dropdown1 visible-sm visible-md visible-lg" />
                <i className="sub-dropdown visible-sm visible-md visible-lg" />
                <div className="num-items-in-cart">
                  <div className="items-cart">
                    <div className="num-items-in-cart">
                      <span className="cs-icon icon-bag" />
                      <span className="cart_text">
                           <span className="number">{cart.length}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <div className="dropdown-menu cart-info">
                <div className="cart-content">
                  <div className="text-items"><span>{cart.length} item(s) in the shopping cart</span> <span className="cs-icon icon-close close-dropdown" /> </div>

                  <div className="items control-container">
                    <MobileCartItems cart={cart}/>
                  </div>
                  <div className="subtotal"><span>Subtotal:</span><span className="cart-total-right money" data-currency-usd="$30.00" data-currency="USD">${total()}.00</span></div>
                  <div className="action">
                    <a className="_btn" href="/cart">View All Your Cart</a>
                    <button className="_btn float-right" >Proceed To Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            !user.username ?
          <div className="icon_accounts">
            <div className="m_login-account">
              <span className="dropdownMobile-toggle login-icon">
                <i className="icon-dropdown cs-icon icon-ellipsis" data-class="cs-icon icon-ellipsis" aria-hidden="true" />
                <i className="sub-dropdown1 visible-sm visible-md visible-lg" />
                <i className="sub-dropdown visible-sm visible-md visible-lg" />
              </span>
                <div className="m_dropdown-login dropdown-menu login-content">
                  <div className="clearfix">
                    <div className="login-register-content">
                      <ul className="nav nav-tabs">
                        <li className="account-item-title active">
                          <a href="/login">
                            Login
                          </a>
                        </li>
                        <li className="account-item-title">
                          <a href="/register" >
                            Register
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content group_form">

                      </div>
                    </div>

                  </div>
                </div>
            </div>
          </div> :
              ""
          }

        </div>

        <NavMobileMenu/>

      </div>
    </div>
  )
}