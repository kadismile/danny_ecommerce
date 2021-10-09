import React, {useEffect, useState} from "react";
import {Slider} from "../../components/slider";
import ProductService from '../../services/products'
import {Link} from "react-router-dom";
import {SingleProduct} from "../../components/product/SingleProduct";
import {Loader} from "../../components/libs";


export const Home = () => {
  const [products, setProducts] = useState({
    drinks: [],
    pastries: [],
    soups: [],
    meals: []
  })
  useEffect(()=> {
    $(document.body).addClass('index-template');
      (
        async ()=> {
          let drinks = await ProductService.listProductsByCategory(16)
          let pastries = await ProductService.listProductsByCategory(17)
          let soups = await ProductService.listProductsByCategory(17)
          let meals = await ProductService.listProductsByCategory(17)
          setProducts(prevState => {
            return {
              ...prevState,
              drinks: drinks.data.splice(0,4),
              pastries: pastries.data.splice(0,4),
              soups: soups.data.splice(0,4),
              meals: meals.data.splice(0,4)
            }
          })

          console.log("pastries ====> ", pastries.data)
        }
      )()
    },[])
  const {drinks, pastries, soups, meals} = products

  return (
    <>
        <Slider/>
        <div className="shopify-section index-section index-section-product">
          <div data-section-id={1509012370397} data-section-type="product-section">
            <section className="home-product-layout">
              <div className="container">
                <div className="row">
                  <div className="banner-product-title not-animated" data-animate="fadeInUp" data-delay={200} style={{backgroundImage: 'url(assets/images/banner_product_1.jpg)'}}>
                    <div className="title-content">
                      <h2>Pastries</h2>
                    </div>
                  </div>
                  <div className="home-product-inner">
                    <div className="home-product-content">
                      {
                        pastries.map((product:any, index) =>
                          <div key={index} className="content_product col-sm-3">
                            <SingleProduct product={product}/>
                          </div>
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="shopify-section index-section index-section-product">
          <div data-section-id={1509012370397} data-section-type="product-section">
            <section className="home-product-layout">
              <div className="container">
                <div className="row">
                  <div className="banner-product-title not-animated" data-animate="fadeInUp" data-delay={200} style={{backgroundImage: 'url(assets/images/banner_product_4.jpg)'}}>
                    <div className="title-content">
                      <h2>Soups</h2>
                    </div>
                  </div>
                  <div className="home-product-inner">
                    <div className="home-product-content">
                      {
                        soups.map((product:any, index) =>
                          <div key={index} className="content_product col-sm-3">
                            <SingleProduct product={product}/>
                          </div>
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="shopify-section index-section index-section-product">
          <div data-section-id={1509012370397} data-section-type="product-section">
            <section className="home-product-layout">
              <div className="container">
                <div className="row">
                  <div className="banner-product-title not-animated" data-animate="fadeInUp" data-delay={200} style={{backgroundImage: 'url(assets/images/banner_product_2.jpg)'}}>
                    <div className="title-content">
                      <h2>Meals</h2>
                    </div>
                  </div>
                  <div className="home-product-inner">
                    <div className="home-product-content">
                      {
                        meals.map((product:any, index) =>
                          <div key={index} className="content_product col-sm-3">
                            <SingleProduct product={product}/>
                          </div>
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="shopify-section index-section index-section-product">
          <div data-section-id={1509012370397} data-section-type="product-section">
            <section className="home-product-layout">
              <div className="container">
                <div className="row">
                  <div className="banner-product-title not-animated" data-animate="fadeInUp" data-delay={200} style={{backgroundImage: 'url(assets/images/banner_product_3.jpg)'}}>
                    <div className="title-content">
                      <h2>Drinks--</h2>
                    </div>
                  </div>
                  <div className="home-product-inner">
                    <div className="home-product-content">
                      {
                        drinks.map((product:any, index) =>
                            <div key={index} className="content_product col-sm-3">
                              <SingleProduct product={product}/>
                            </div>
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div id="shopify-section-1509012405077" className="shopify-section index-section index-section-banner">
          <div data-section-id={1509012405077} data-section-type="banner-section">
            <section className="home-banner-layout not-animated" data-animate="zoomIn" data-delay={200}>
              <div className="container">
                <div className="row">
                  <div className="home-banner-inner">
                    <div className="home-banner-content">
                      <a className="banner-image" href="contact.html">
                        <img src="assets/images/banner-home-1.jpg" alt=""  />
                      </a>
                      <a className="banner-caption" href="contact.html">
                          <span className="banner-caption-group">
                            <span className="title">Free!</span>
                            <span className="caption">Home Delivery</span>
                          </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div id="shopify-section-1509012440185" className="shopify-section index-section index-section-gallery">
          <div data-section-id={1509012440185} data-section-type="banner-section">
            <section className="home-gallery-layout">
              <div className="container">
                <div className="row">
                  <h2 className="page-title">Gallery</h2>
                  <div className="home-gallery-inner">
                    <div className="home-gallery-content">
                      <div className="gallery-item col-sm-4 not-animated" data-animate="fadeInUp" data-delay={100}>
                        <a className="home-gallery-lookbook" rel="lookbook" href="assets/images/gallery-1-big.jpg">
                          <img src="assets/images/gallery-1.jpg" alt=""  />
                        </a>
                      </div>
                      <div className="gallery-item col-sm-4 not-animated" data-animate="fadeInUp" data-delay={200}>
                        <a className="home-gallery-lookbook" rel="lookbook" href="assets/images/gallery-2-big.jpg">
                          <img src="assets/images/gallery-2.jpg" alt=""  />
                        </a>
                      </div>
                      <div className="gallery-item col-sm-4 not-animated" data-animate="fadeInUp" data-delay={300}>
                        <a className="home-gallery-lookbook" rel="lookbook" href="assets/images/gallery-3-big.jpg">
                          <img src="assets/images/gallery-3.jpg" alt=""  />
                        </a>
                      </div>
                      <div className="gallery-item col-sm-4 not-animated" data-animate="fadeInUp" data-delay={400}>
                        <a className="home-gallery-lookbook" rel="lookbook" href="assets/images/gallery-4-big.jpg">
                          <img src="assets/images/gallery-4.jpg" alt=""  />
                        </a>
                      </div>
                      <div className="gallery-item col-sm-4 not-animated" data-animate="fadeInUp" data-delay={500}>
                        <a className="home-gallery-lookbook" rel="lookbook" href="assets/images/gallery-5-big.jpg">
                          <img src="assets/images/gallery-5.jpg" alt=""  />
                        </a>
                      </div>
                      <div className="gallery-item col-sm-4 not-animated" data-animate="fadeInUp" data-delay={600}>
                        <a className="home-gallery-lookbook" rel="lookbook" href="assets/images/gallery-6-big.jpg">
                          <img src="assets/images/gallery-6.jpg" alt=""  />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div id="shopify-section-1509012518613" className="shopify-section  index-section index-section-banner">
          <div data-section-id={1509012518613} data-section-type="banner-section">
            <section className="home-banner-layout not-animated" data-animate="zoomIn" data-delay={200}>
              <div className="container">
                <div className="row">
                  <div className="home-banner-inner">
                    <div className="home-banner-content">
                      <a className="banner-image" href="super-deal.html">
                        <img src="https://cdn.shopify.com/s/files/1/2487/3424/files/bn1_53149ef0-f92a-4804-b600-02e903aa4559.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
    </>
  )
}