import React from "react";
import { HEADER_LOGO } from "../utils.js/data";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils.js/useOnlineStatus";

export const Header = React.memo(() => {
  const isUserOnline = useOnlinestatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={HEADER_LOGO}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>status:{isUserOnline ? "🟢" : "🔴"}</li>
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
