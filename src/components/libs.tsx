import React from "react";
import ContentLoader from "react-content-loader";


export const MoveUp = () => {
  return (
    <div className="float-right-icon">
      <ul>
        <li>
          <div id="scroll-to-top" data-toggle="" data-placement="left" title="Scroll to Top" className="off">
            <i className="fa fa-angle-up"></i>
          </div>
        </li>
      </ul>
    </div>
  )
}

export function FullPageSpinner() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <div className="spinner-border avatar-lg text-primary" role="status"> </div>
    </div>
  );
}

export function  PageLoader() {
  return <>
    <section className="heading-content">
      <div className="heading-wrapper">
        <div className="container">
          <div className="row">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          <ContentLoader
              speed={2}
              width={400}
              height={160}
              viewBox="0 0 400 160"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
          >
              <rect x="48" y="8" rx="3" ry="3" width="88" height="6"/>
              <rect x="48" y="26" rx="3" ry="3" width="52" height="6"/>
              <rect x="0" y="56" rx="3" ry="3" width="410" height="6"/>
              <rect x="0" y="72" rx="3" ry="3" width="380" height="6"/>
              <rect x="0" y="88" rx="3" ry="3" width="178" height="6"/>
              <circle cx="20" cy="20" r="20"/>
          </ContentLoader>

          <ContentLoader
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
          <rect x="48" y="8" rx="3" ry="3" width="88" height="6"/>
          <rect x="48" y="26" rx="3" ry="3" width="52" height="6"/>
          <rect x="0" y="56" rx="3" ry="3" width="410" height="6"/>
          <rect x="0" y="72" rx="3" ry="3" width="380" height="6"/>
          <rect x="0" y="88" rx="3" ry="3" width="178" height="6"/>
          <circle cx="20" cy="20" r="20"/>
        </ContentLoader>
        <ContentLoader
          speed={2}
          width={400}
          height={160}
          viewBox="0 0 400 160"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="48" y="8" rx="3" ry="3" width="88" height="6"/>
          <rect x="48" y="26" rx="3" ry="3" width="52" height="6"/>
          <rect x="0" y="56" rx="3" ry="3" width="410" height="6"/>
          <rect x="0" y="72" rx="3" ry="3" width="380" height="6"/>
          <rect x="0" y="88" rx="3" ry="3" width="178" height="6"/>
          <circle cx="20" cy="20" r="20"/>
        </ContentLoader>
        <ContentLoader
          speed={2}
          width={400}
          height={160}
          viewBox="0 0 400 160"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="48" y="8" rx="3" ry="3" width="88" height="6"/>
          <rect x="48" y="26" rx="3" ry="3" width="52" height="6"/>
          <rect x="0" y="56" rx="3" ry="3" width="410" height="6"/>
          <rect x="0" y="72" rx="3" ry="3" width="380" height="6"/>
          <rect x="0" y="88" rx="3" ry="3" width="178" height="6"/>
          <circle cx="20" cy="20" r="20"/>
        </ContentLoader>

            <ContentLoader
              speed={2}
              width={400}
              height={160}
              viewBox="0 0 400 160"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="48" y="8" rx="3" ry="3" width="88" height="6"/>
              <rect x="48" y="26" rx="3" ry="3" width="52" height="6"/>
              <rect x="0" y="56" rx="3" ry="3" width="410" height="6"/>
              <rect x="0" y="72" rx="3" ry="3" width="380" height="6"/>
              <rect x="0" y="88" rx="3" ry="3" width="178" height="6"/>
              <circle cx="20" cy="20" r="20"/>

              <rect x="48" y="8" rx="3" ry="3" width="88" height="6"/>
              <rect x="48" y="26" rx="3" ry="3" width="52" height="6"/>
              <rect x="0" y="56" rx="3" ry="3" width="410" height="6"/>
              <rect x="0" y="72" rx="3" ry="3" width="380" height="6"/>
              <rect x="0" y="88" rx="3" ry="3" width="178" height="6"/>
              <circle cx="20" cy="20" r="20"/>

            </ContentLoader>

            </div>
            </div>
      </div>
    </section>
  </>
}

export const Loader = () => {
  return <div className="loader"> </div>
}

export function DisabledButton() {
  return (
    <button className="_btn" type="submit"
      style = {{
        filter: "opacity(0.5)",
        color: "#fff"
        , fontSize: "15px", pointerEvents: "none"
      }}
    >Create</button>
  )
}

export function DisabledLoginButton() {
  return <input className="_btn"
    style = {{
      filter: "opacity(0.5)",
      color: "#fff",
      fontSize: "15px",
      cursor: "not-allowed;"
  }} defaultValue="Submit"/>
}

export function DisabledCheckout() {
  return <input className="_btn"
    style = {{
      filter: "opacity(0.5)",
      color: "#fff",
      fontSize: "15px",
      cursor: "not-allowed;"
    }} defaultValue="Check Out"/>
}

export const registerFormValues =  {
  email: "",
  full_name: "",
  password: "",
  repeat_password: "",
  username: ""
}