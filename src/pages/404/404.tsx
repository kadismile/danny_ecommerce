import React from "react";

export const NotFound = () => {

  return (
    <div className="page-container" id="PageContainer">
      <main className="main-content" id="MainContent" role="main">
        <br/>
        <br/>
        <br/>

        <section className="page-404-layout">
      <div className="page-404-wrapper">
        <h1 className="hidden">Page not found</h1>
        <div className="container">
          <div className="row">
            <div className="page-404-inner">
              <div className="page-404-content">
                <div className="page-left col-sm-6">
                  <h2>Page not found</h2>
                  <p className="caption">Oh my gosh! you found it !!!</p>
                  <p className="subtext">Looks like the page you're trying to visit doesn't exist. Please check the URL and try your lick again</p>
                  <a className="_btn" onClick={() => window.location.replace("/")}> Back to home page </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


      </main>
    </div>
  );
}