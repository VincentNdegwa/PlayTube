import React from "react";
import "./Loaderpage.css";

function Homepage() {
  return (
    <div>
      <div className="loading-card">
        <div className="loading-card-image"></div>
        <div className="loading-card-details">
          <div className="loading-card-logo"></div>
          <div className="loading-card-description">
            <div className="loading-card-tittle"></div>
            <div className="loading-card-channel"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
