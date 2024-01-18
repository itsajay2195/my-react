import React from "react";
import { HEADER_LOGO } from "../utils.js/data";
import { Link } from "react-router-dom";

export const Header = React.memo(() => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={HEADER_LOGO}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>

          {/* <li>Cart</li> */}
        </ul>
      </div>
    </div>
  );
});

export default Header;
