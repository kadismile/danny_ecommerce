import React, {useEffect, useState} from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import ProductService from "../../services/products";
import { Loader } from "../../components/libs";
import {CategoryList} from "./CategoryList";
import {SingleProduct} from "../../components/product/SingleProduct";

export const ProductCategory = () => {
  const { cat_id, name }: any = useParams();
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    console.log("hello ")
    const jquery: any = $
    jquery(this).find('.cs-icon').attr('class','cs-icon icon-menu');
    jquery(this).removeClass('active-dropdown');
    jquery(this).parent().find('.navigation_dropdown_scroll').removeClass("hover-dropdown");

    (
      async ()=> {
        setLoading(true)
        let data = await ProductService.listProductsByCategory(cat_id)
        setProducts(data.data)
        setTimeout(()=> {
          setLoading(false)
        },1000)
      }
    )()
  },[name])


  return (

       loading ? <Loader/> :
         <>
            <section className="heading-content">
              <div className="heading-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="page-heading-inner heading-group">
                      <div className="breadcrumb-group">
                        <h1 className="hidden">Collections-----</h1>
                        <div className="breadcrumb clearfix">
                            <span itemScope itemType="http://data-vocabulary.org/Breadcrumb"><a href="index.html" title="Fast Food" itemProp="url"><span itemProp="title"><i className="fa fa-home" /></span></a>
                            </span>
                          <span className="arrow-space" />
                          <span itemScope itemType="http://data-vocabulary.org/Breadcrumb">
                             <br/>
                          <br/>
                              <a href="collections.html" title="Collections" itemProp="url"><span itemProp="title" style={{textTransform: 'capitalize'}}>{name}</span></a>
                            </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="collection-layout">
              <div className="collection-wrapper">
                <div className="container">
                  <div className="row">
                    <div id="shopify-section-collection-template" className="shopify-section">
                      <div className="collection-inner collection-sidebar">
                        {/* Tags loading */}
                        <div id="tags-load" style={{display: 'none'}}><i className="fa fa-spinner fa-pulse fa-2x" /></div>
                        <div id="collection">

                          <div className="collection-content ">
                            <div className="collection-leftsidebar sidebar col-sm-3 clearfix">
                              <div className="collection-leftsidebar-group">
                                <div className="sidebar-block collection-block visible-lg">
                                  <h3 className="sidebar-title">
                                    <span className="text">Categories</span>
                                    <span className="cs-icon icon-minus" />
                                  </h3>
                                  <div className="sidebar-content">
                                    <CategoryList name={name} />
                                  </div>
                                </div>

                                {/* filter tags group */}
                                <div className="sidebar-block banner-block visible-lg">
                                  <div className="sidebar-content">
                                    <a href="collections.html">
                                      <img src="/assets/images/collections_banner.jpg" alt="image product" />
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


                            <div className="col-sm-9 shopify-section index-section index-section-product">
                              <div className="collection-toolbar _desktop">
                                <a href="collections.html" className="collection-banner-top">
                                  <img src="/assets/images/collections_banner_top.jpg" alt="image product" />
                                </a>

                              </div>
                              <div data-section-id={1509012370397} data-section-type="product-section">
                                <section className="home-product-layout">
                                  <div className="container">
                                    <div className="row">
                                      <div className="home-product-inner">
                                        <div className="home-product-content">
                                          {
                                            products.map((product:any, index) =>
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


                          {/*  <div className="collection-mainarea  col-sm-9 clearfix">
                              <div className="collection-toolbar _desktop">
                                <a href="collections.html" className="collection-banner-top">
                                  <img src="/assets/images/collections_banner_top.jpg" alt="image product" />
                                </a>

                              </div>


                              <div className="collection-items clearfix">
                                <div className="home-product-inner">
                                  <div className="home-product-content">
                                    {
                                      products.map((product:any, index) =>
                                        <div key={index} className="content_product col-sm-3">
                                          <SingleProduct product={product}/>
                                        </div>
                                      )
                                    }
                                  </div>
                                </div>
                              </div>
                            </div>*/}
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