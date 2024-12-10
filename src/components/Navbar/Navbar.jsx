import React from 'react'
import "./navbar.css"
import search_icon from "../../assets/search.png"
import uploed_icon from "../../assets/upload.png"

import notification_icon from "../../assets/notification.png"
import profile_icon from "../../assets/E-logo.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <Link to="/">
          {" "}
          <img
            src="https://www.evangadi.com/themes/humans/assets/hammerlook/img/misc/evangadi-logo-white.png"
            className="logo"
            alt=""
          />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={uploed_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className="user-icon" alt="" />
      </div>
    </nav>
  );
}

export default Navbar
