import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import ProductService from "../../services/products";
import {CategoryList} from "../categories/CategoryList";
import {SingleProduct} from "../../components/product/SingleProduct";
import {Loader} from "../../components/libs";
import {addItem, selectCart} from "../../redux/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import {CartButton} from "../../components/cart/CartButton";


export const ProductDetail = () => {
  const dispatch = useDispatch();
  const { name }: any = useParams();
  const [catProducts, setCatProducts] = useState([])
  const [product, setProduct] = useState({
    name: "",
    id: "",
    images: [{src:''}],
    price: null,
    description: '',
    categories: [{id: ''}]
  })
  const [cartItem, setCartItem] = useState(0)
  const [loading, setLoading] = useState(true)
  const { href } = window.location
  let productId = href.split("/")[5]
    .split("#")[0]

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
      (
        async ()=> {
          setLoading(true)
          let data: any = await ProductService.listProductById(productId)
          setProduct(data.data)
          if (product.name) {
            let catId = product.categories[0].id
            let drinks = await ProductService.listProductsByCategory(catId)
          }
          setTimeout(()=> {
            setLoading(false)
          }, 200)
        }
      )()
    },[])


  const cleanText = (string: string) =>  {
    return string.replace(/<\/?[^>]+(>|$)/g, "");
  }
  const changeValue = (value: string) => {
    if (value === "increase") {
      if (cartItem >= 10) {
        setCartItem(10)
      } else {
        setCartItem(cartItem+1)
      }
    } else {
      if (cartItem <= 1) {
        setCartItem(1)
      } else {
        setCartItem(cartItem-1)
      }
    }
    let finalProduct = {...product, quantity: cartItem}
    dispatch( addItem(finalProduct) )
  }

  const addToCart = () => {
    let finalProduct = {...product, quantity: cartItem}
    dispatch(addItem(finalProduct))
  }


/*  const disableButton = () => {
    let quantity =  cart?.quantity ? cart?.quantity : 0
    return quantity !== 0;
  }*/

  return (
    loading ? <Loader/> :
    <>
      <section className="heading-content">
        <div className="heading-wrapper">
          <div className="container">
            <div className="row">
              <div className="page-heading-inner heading-group">
                <div className="breadcrumb-group">
                  <h1 className="hidden">Products</h1>
                  <div className="breadcrumb clearfix">
                      <span itemScope itemType="http://data-vocabulary.org/Breadcrumb"><a href="index.html" title="Fast Food" itemProp="url"><span itemProp="title"><i className="fa fa-home" /></span></a>
                      </span>
                    <span className="arrow-space" />
                    <span itemScope itemType="http://data-vocabulary.org/Breadcrumb">
                        <a href="product.html" title="Products" itemProp="url"><span itemProp="title">Products</span></a>
                      </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-detail-layout">
        <div className="product-detail-wrapper">
          <div className="container">
            <div className="row">
              <div id="shopify-section-product-template" className="shopify-section">
                <div className="product-detail-inner">
                  <div className="product-detail-content col-sm-9">
                    <div id="product" className="extra-crispy-1 detail-content">
                      <div className="col-md-12 info-detail-pro clearfix">
                        <div className="col-md-6" id="product-image">
                          <div id="featuted-image"  style={{position: 'static', overflow: 'visible'}}>
                            <img src={product.images[0].src} alt="" />
                          </div>
                          <div id="featuted-image-mobile" className="image featured-mobile">
                            <div className="image-item">
                              <a href="#" className="thumbnail">
                                <img src={product.images[0].src} alt="Extra Crispy" data-item={1} />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6" id="product-information">
                          <h1 itemProp="name" className="title" style={{fontSize: "25px"}}> {product.name}
                            <span className="money pull-right" style={{fontSize: "25px"}}>${product.price}.00</span>
                          </h1>

                          <CartButton product={product} />


                          <div className="rating-content">
                            <div className="rating-description">
                              <p>
                                {cleanText(product.description)}
                              </p>

                            </div>
                          </div>

                          <div className="supports-fontface">
                            <span className="social-title">Share this</span>
                            <div className="social-sharing is-clean" data-permalink="https://cs-fastfood.myshopify.com/products/extra-crispy-1">
                              <a target="_blank" href="http://www.facebook.com/sharer.php?u=https://cs-fastfood.myshopify.com/products/extra-crispy-1" className="share-facebook">
                                <span className="fa fa-facebook" />
                              </a>
                              <a target="_blank" href="http://twitter.com/share?text=Extra%20Crispy&url=https://cs-fastfood.myshopify.com/products/extra-crispy-1" className="share-twitter">
                                <span className="fa fa-twitter" />
                              </a>
                              <a target="_blank" href="http://pinterest.com/pin/create/button/?url=https://cs-fastfood.myshopify.com/products/extra-crispy-1&media=http://cdn.shopify.com/s/files/1/2487/3424/products/13_1024x1024.jpg?v=1508991313&description=Extra%20Crispy" className="share-pinterest">
                                <span className="fa fa-pinterest" />
                              </a>
                              <a target="_blank" href="http://plus.google.com/share?url=https://cs-fastfood.myshopify.com/products/extra-crispy-1" className="share-google">
                                {/* Cannot get Google+ share count with JS yet */}
                                <span className="fa fa-google-plus" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collection-leftsidebar sidebar col-sm-3 clearfix visible-lg">
                    <div className="collection-leftsidebar-group">
                      <div className="sidebar-block collection-block">
                        <h3 className="sidebar-title">
                          <span className="text">Categories</span>
                          <span className="cs-icon icon-minus" />
                        </h3>
                        <div className="sidebar-content">

                          <CategoryList name={name} />

                        </div>
                      </div>

                      <div className="sidebar-block banner-block">
                        <div className="sidebar-content">
                          <a href="collections.html">
                            <img src="assets/images/collections_banner.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="sidebarMobile sidebar-bottom">
                        <button className="sidebarMobile-clear _btn">
                          Clear All
                        </button>
                        <button className="sidebarMobile-close _btn">
                          Apply &amp; Close
                        </button>
                      </div>
                    </div>
                  </div>


                  <div className="shopify-section index-section index-section-product">
                    <div data-section-id={1509012370397} data-section-type="product-section">
                      <section className="home-product-layout">
                        <div className="container">
                          <div className="row">
                            <div className="home-product-inner">
                              <div className="home-product-content">
                                {
                                  catProducts.map((product:any, index) => {
                                    return (
                                      <div key={index} className="content_product col-sm-3">
                                        <SingleProduct product={product}/>
                                      </div>
                                    )
                                  })
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}