import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div id="shopify-section-theme-footer" className="shopify-section">
        <section className="footer-information-block clearfix" style={{backgroundImage: 'url(/assets/images/bg_footer.png)'}}>
          <div className="container">
            <div className="row">
              <div className="footer-information-inner">
                <div className="footer-information-content">
                  <div className="information-item col-sm-4 not-animated" data-animate="fadeInUp" data-delay={100}>
                    <div className="about-content">
                      <div className="about-contact">
                        <div className="item">
                          <span className="cs-icon icon-marker" /><address>No 1104 Sky Tower, Las Vegas, USA</address>
                        </div>
                        <div className="item">
                          <span className="cs-icon icon-phone" /><a href="tel:(084)0123456789">(084) 0123 456 789</a>
                        </div>
                        <div className="item">
                          <span className="cs-icon icon-mail" /><a href="mailto:contac@yourcompany.com">contac@yourcompany.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-group col-sm-4 not-animated" data-animate="fadeInUp" data-delay={200}>

                  </div>
                  <div className="social-payment-item col-sm-4 not-animated" data-animate="fadeInUp" data-delay={300}>
                    <h5 className="footer-title"> Follow Us</h5>
                    <div className="social-content">
                      <div className="social-caption">
                        <a href="https://www.facebook.com/shopify" title="Fast Food on Facebook" className="icon-social facebook"><i className="fa fa-facebook" /></a>
                        <a href="https://twitter.com/shopify" title="Fast Food on Twitter" className="icon-social twitter"><i className="fa fa-twitter" /></a>
                        <a href="https://plus.google.com/+shopify" title="Fast Food on Google+" className="icon-social google-plus"><i className="fa fa-google-plus" /></a>
                        <a href="https://www.pinterest.com/shopify" title="Fast Food on Pinterest" className="icon-social pinterest"><i className="fa fa-pinterest" /></a>
                        <a href="https://instagram.com/shopify" title="Fast Food on Instagram" className="icon-social instagram"><i className="fa fa-instagram" /></a>
                        <a href="https://www.youtube.com/user/shopify" title="Fast Food on Youtube" className="icon-social youtube"><i className="fa fa-youtube" /></a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="copy-right clearfix">
          <div className="copy-right-wrapper">
            <div className="copy-right-inner">
              <div className="footer_links">
                <ul>
                  <li><a href="index.html" title="Home">Home</a></li>
                  <li><a href="collections.html" title="Pizza">Pizza</a></li>
                  <li><a href="collections.html" title="Hamburger">Hamburger</a></li>
                  <li><a href="collections.html" title="Fast food">Fast food</a></li>
                  <li><a href="collections.html" title="Drinks">Drinks</a></li>
                  <li><a href="collections.html" title="Combo buy">Combo buy</a></li>
                  <li><a href="contact.html" title="Contact">Contact</a></li>
                  <li><a href="wish-list.html" title="Wishlist">Wishlist</a></li>
                  <li><a href="account.html" title="My account">My account</a></li>
                  <li><a href="login.html" title="Login">Login</a></li>
                </ul>
              </div>
              <div className="footer_copyright">Copyright © {new Date().getFullYear()} <a href="index.html" >Dannys Edible</a>. All Rights Reserved</div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}