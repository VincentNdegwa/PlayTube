import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import {
  MdOutlineSubscriptions,
  MdOutlinePlayCircleOutline,
} from "react-icons/md";
// import { IoPlayOutline } from "react-icons/io";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="Navbar-item">
            <div className="Navbar-icon">
              <AiFillHome />
            </div>
            <div className="Navbar-text">Home</div>
          </div>
        </Link>

        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="Navbar-item">
            <div className="Navbar-icon">
              <MdOutlinePlayCircleOutline />
            </div>
            <div className="Navbar-text">Shorts</div>
          </div>
        </Link>

        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="Navbar-item">
            <div className="Navbar-icon">
              <MdOutlineSubscriptions />
            </div>
            <div className="Navbar-text">Subscription</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
