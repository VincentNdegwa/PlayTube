import React from "react";
import "./Header.css";
import { BiMenu, BiSearch, BiMicrophone, BiVideoPlus } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiFillYoutube } from "react-icons/ai";

function Header() {
  return (
    <div className="Header">
      <div className="Header-left">
        <div className="Header-left-icon1">
          <BiMenu />
        </div>
        <div className="Header-left-icon2">
          <div className="Header-left-icon-logo">
            <AiFillYoutube />
          </div>
          <div className="Header-left-icon-text">
            <h4>PlayTube</h4>
          </div>
        </div>
      </div>

      <div className="Header-center">
        <div className="Header-center-input">
          <input type="text" placeholder="Search" className="Header-input" />
          <BiSearch className="Header-search-icon" />
        </div>
        <div className="Header-center-mic">
          <BiMicrophone />
        </div>
      </div>

      <div className="Header-right">
        <div>
          <BiVideoPlus />
        </div>
        <div>
          <MdNotificationsNone />
        </div>
        <div>
          <CgProfile />
        </div>
      </div>
    </div>
  );
}

export default Header;
