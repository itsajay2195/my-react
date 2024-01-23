import React from "react";
import { HEADER_LOGO } from "../utils.js/data";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils.js/useOnlineStatus";

export const Header = React.memo(() => {
  const isUserOnline = useOnlinestatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-56" src={HEADER_LOGO}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">status:{isUserOnline ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link>Contact Us</Link>
          </li>

          {/* <li>Cart</li> */}
        </ul>
      </div>
    </div>
  );
});

export default Header;
