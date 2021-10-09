import React from "react";
import {useSelector} from "react-redux";
import {selectUser} from "../../../../redux/userSlice";

export const NavAuth = () => {
  const user = useSelector(selectUser);
  return (
    <>
    {!user.username ?
    <div className="icon_accounts">
      <div className="m_login-account">
          <span className="dropdown-toggle login-icon" data-toggle="dropdown">
            <i className="fa fa-ellipsis-v" />
            <i className="sub-dropdown1 visible-sm visible-md visible-lg" />
            <i className="sub-dropdown visible-sm visible-md visible-lg" />
          </span>

        <div className="m_dropdown-login dropdown-menu login-content">
          <div className="clearfix">
            <div className="login-register-content">
              <ul className="nav nav-tabs">
                <br/>
                <li className="account-item-title">
                  <a href="/login">
                    Login
                  </a>
                </li>
                <li className="account-item-title">
                  <a href="/register">
                    Register
                  </a>
                </li>
                <br/>
                <br/>

                <br/>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> :
      ""}
      </>
  )
}