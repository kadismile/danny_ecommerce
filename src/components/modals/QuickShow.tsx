import React from "react";

export const QuickShop = () => {
  return (

  <div id="quick-shop-modal" className="modal quick-shop" role="dialog" aria-hidden="true" tabIndex={-1} data-width={800} style={{display: 'none'}}>
    <div className="modal-dialog fadeIn animated">
      <div className="modal-content">
          <div className="modal-header">
            <i className="close lnr lnr-cross btooltip" data-toggle="tooltip" data-placement="top" data-dismiss="modal" aria-hidden="true" data-original-title="Close" />
          </div>
          <div className="modal-body">
            <div className="quick-shop-modal-bg" style={{display: 'none'}} />
            <div className="clearfix">
              <div className="col-md-6 product-image">
                <div id="quick-shop-image" className="product-image-wrapper">
                  <div id="featuted-image" className="main-image featured">
                    <img src="assets/images/product_10.jpg" alt="image product" />
                  </div>
                  <div id="gallery_main_qs" className="product-image-thumb gallery-images-layout">
                    <div className="gallery-images-inner">
                      <div className="show-image-load show-load-quick" style={{display: 'none'}}>
                        <div className="show-image-load-inner"><i className="fa fa-spinner fa-pulse fa-2x" /></div>
                      </div>
                      <div className="qs-vertical-slider vertical-image-content">
                        <div className="image-vertical image-thumb active">
                          <a className="cloud-zoom-gallery" href="assets/images/product_10.jpg" data-image="./assets/images/product_10.jpg" data-zoom-image="assets/images/product_10.jpg">
                            <img src="assets/images/product_10.jpg" alt="image product" />
                          </a>
                        </div>
                        <div className="image-vertical image-thumb">
                          <a className="cloud-zoom-gallery" href="assets/images/product_11.jpg" data-image="./assets/images/product_11.jpg" data-zoom-image="assets/images/product_11.jpg">
                            <img src="assets/images/product_11.jpg" alt="image product" />
                          </a>
                        </div>
                        <div className="image-vertical image-thumb">
                          <a className="cloud-zoom-gallery" href="assets/images/product_12.jpg" data-image="./assets/images/product_12.jpg" data-zoom-image="assets/images/product_12.jpg">
                            <img src="assets/images/product_12.jpg" alt="image product" />
                          </a>
                        </div>
                        <div className="image-vertical image-thumb">
                          <a className="cloud-zoom-gallery" href="assets/images/product_13.jpg" data-image="./assets/images/product_13.jpg" data-zoom-image="assets/images/product_13.jpg">
                            <img src="assets/images/product_13.jpg" alt="image product" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 product-information">
                <div id="quick-shop-container">
                  <h3 id="quick-shop-title"><a href="product.html">Extra Crispy----</a></h3>
                  <div className="rating-star"><span className="shopify-product-reviews-badge" data-id={6537875078} /></div>
                  <div className="quick-shop-management">
                    <span className="management-title">Availability:</span>
                    <div className="management-description">In-Stock</div>
                  </div>
                  <div className="description">
                    <div id="quick-shop-description" className="text-left">
                      <p>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulp...</p>
                    </div>
                  </div>
                  <form action="http://demo.themeforshop.com/html_fastfood/cart.html" method="post" className="variants" id="quick-shop-product-actions" encType="multipart/form-data">
                    <div id="quick-shop-variants-container" className="variants-wrapper">
                      <div className="selector-wrapper variant-wrapper-size">
                        <label htmlFor="quick-shop-variants-213223800871-option-0">Size</label>
                        <select className="single-option-selector" data-option="option1" id="quick-shop-variants-213223800871-option-0"><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option></select>
                      </div>
                      <div className="selector-wrapper variant-wrapper-topping">
                        <label htmlFor="quick-shop-variants-213223800871-option-2">Topping</label>
                        <select className="single-option-selector" data-option="option3" id="quick-shop-variants-213223800871-option-2"><option value="Black Bottom Cupcakes">Black Bottom Cupcakes</option><option value="Blue-Ribbon Butter Cake">Blue-Ribbon Butter Cake</option><option value="Cheesy Mcplain">Cheesy Mcplain</option><option value="Chunky Apple Cake">Chunky Apple Cake</option></select>
                      </div>
                    </div>
                    <div className="swatch" id="show_swatch">
                      <div id="show_swatch_detail_1" className="swatch_quick color clearfix" data-option-index={1}>
                        <label>Color</label>
                        <div id="element-color-Black" data-value="Black" className="swatch-element color Black available active">
                          <div className="tooltip">Black</div>
                          <input id="swatch-quick-1-Black" type="radio" name="option-1" defaultValue="Black" />
                          <label id="label-color-Black" htmlFor="swatch-quick-1-Black" style={{backgroundColor: 'Black', borderColor: 'Black', backgroundImage: 'url(assets/images/black.png)'}}><img className="crossed-out" src="assets/images/soldout.png" alt="image product" /></label>
                        </div>
                        <div id="element-color-Red" data-value="Red" className="swatch-element color Red available ">
                          <div className="tooltip">Red</div>
                          <input id="swatch-quick-1-Red" type="radio" name="option-1" defaultValue="Red" />
                          <label id="label-color-Red" htmlFor="swatch-quick-1-Red" style={{backgroundColor: 'Red', borderColor: 'Red', backgroundImage: 'url(assets/images/red.png)'}}><img className="crossed-out" src="assets/images/soldout.png" alt="image product" /></label>
                        </div>
                        <div id="element-color-Blue" data-value="Blue" className="swatch-element color Blue available ">
                          <div className="tooltip">Blue</div>
                          <input id="swatch-quick-1-Blue" type="radio" name="option-1" defaultValue="Blue" />
                          <label id="label-color-Blue" htmlFor="swatch-quick-1-Blue" style={{backgroundColor: 'Blue', borderColor: 'Blue', backgroundImage: 'url(assets/images/blue.png)'}}><img className="crossed-out" src="assets/images/soldout.png" alt="image product" /></label>
                        </div>
                        <div id="element-color-yellow" data-value="yellow" className="swatch-element color yellow available ">
                          <div className="tooltip">yellow</div>
                          <input id="swatch-quick-1-yellow" type="radio" name="option-1" defaultValue="yellow" />
                          <label id="label-color-yellow" htmlFor="swatch-quick-1-yellow" style={{backgroundColor: 'yellow', borderColor: 'yellow', backgroundImage: 'url(assets/images/yellow.png)'}}><img className="crossed-out" src="assets/images/soldout.png" alt="image product" /></label>
                        </div>
                      </div>
                    </div>
                    <div id="quick-shop-price-container" className="product-price">
                      <span className="price"><span className="money" data-currency-usd="$10.00" data-currency="USD">$10.00</span></span>
                    </div>
                    <div className="others-bottom">
                      <div className="purchase-section">
                        <div className="quantity-wrapper clearfix">
                          <div className="wrapper">
                            <input id="quantity" type="text" name="quantity" defaultValue={1} maxLength={5} size={5} className="item-quantity" />
                            <div className="qty-btn-vertical">
                              <span className="qty-down fa fa-chevron-down" title="Decrease" data-src="#quantity" />
                              <span className="qty-up fa fa-chevron-up" title="Increase" data-src="#quantity" />
                            </div>
                          </div>
                        </div>
                        <div className="purchase">
                          <button id="quick-shop-add"  className="_btn add-to-cart" type="submit" name="add" style={{opacity: 1}}><span className="cs-icon icon-cart" />Add to cart</button>
                        </div>
                      </div>
                      <div className="comWish-content">
                        <a title="Add To Compare" className="_compareWishlist compare compare-extra-crispy-1" data-comparehandle="extra-crispy-1">
                          <span className="icon-small icon-small-retweet" />
                          <span className="_compareWishlist-text">Compare</span>
                        </a>
                        <a title="Add To Wishlist" className="wishlist wishlist-extra-crispy-1" data-wishlisthandle="extra-crispy-1">
                          <span className="icon-small icon-small-heart" />
                          <span className="_compareWishlist-text">Wishlist</span>
                        </a>
                        <a title="Send email" className="send-email">
                          <span className="icon-small icon-small-email" />
                          <span className="_compareWishlist-text">Send email</span>
                        </a>
                      </div>
                    </div>
                  </form>
                  <div className="supports-fontface">
                    <span className="social-title">Share this</span>
                    <div className="quick-shop-social">
                      <a target="_blank" href="#" className="share-facebook">
                        <span className="fa fa-facebook" />
                      </a>
                      <a target="_blank" href="#" className="share-twitter">
                        <span className="fa fa-twitter" />
                      </a>
                      <a target="_blank" href="#" className="share-pinterest">
                        <span className="fa fa-pinterest" />
                      </a>
                      <a target="_blank" href="#" className="share-google">
                        {/* Cannot get Google+ share count with JS yet */}
                        <span className="fa fa-google-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  );
}