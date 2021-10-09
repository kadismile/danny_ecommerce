import React from "react";

export const NewsLetter = () => {

  const closeModal = () => {
    const jquery: any = $
    jquery('#newsletter-popup').modal('hide')
  }

  return (
    <div> </div>
    /*<div id="newsletter-popup" className="modal fade in" style={{display: 'block', paddingRight: '15px'}} tabIndex={-1} role="dialog" aria-hidden="false">
      <div className="nl-wraper-popup bounceInDown animated">
        <div className="nl-wraper-popup-inner">
          <div className="popup-left">
            <h4>Newsletter!</h4>
            <p className="sale">up to 70% off</p>
            <p className="caption">Food</p>
            <form action="https://codespot.us5.list-manage.com/subscribe/post?u=ed73bc2d2f8ae97778246702e&id=c63b4d644d" method="post" name="mc-embedded-subscribe-form" target="_blank">
              <div className="group_input">
                <input className="form-control" type="email" name="EMAIL" placeholder="Enter your email here" />
                <button className="_btn" type="submit">Sign Up</button>
              </div>
            </form>
          </div>
          <div className="popup-right">
            <img src="assets/images/newsletter-banner.png" alt="" />
          </div>
        </div>
        <div className="nl-popup-close" onClick={closeModal}>
          <span data-dismiss="modal" />
        </div>
      </div>
    </div>*/
  );
}