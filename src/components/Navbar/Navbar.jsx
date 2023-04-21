import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
// import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { FiMusic } from "react-icons/fi";
// import { IoPlayOutline } from "react-icons/io";

function Navbar(props) {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={
        props.menuClicked && screenWidth <= 750 ? "Navbar-slide" : "Navbar"
      }
    >
      <div className="Navbar-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="Navbar-item" onClick={props.Home}>
            <div className="Navbar-icon">
              <AiFillHome />
            </div>
            <div className="Navbar-text">Home</div>
          </div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="Navbar-item" onClick={props.Music}>
            <div className="Navbar-icon">
              <FiMusic />
            </div>
            <div className="Navbar-text">Music</div>
          </div>
        </Link>

        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="Navbar-item" onClick={props.Movie}>
            <div className="Navbar-icon">
              <BiMoviePlay />
            </div>
            <div className="Navbar-text">Movies</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
