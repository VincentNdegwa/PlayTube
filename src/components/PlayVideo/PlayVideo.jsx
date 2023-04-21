import React from "react";
import "./PlayVideo.css";
// import YoutubeData from "../../Data";
// import musicData from "../../Music";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { FiMusic } from "react-icons/fi";

function PlayVideo(props) {
  // const [videoId, setVideoId] = React.useState(props.videoId);
  const [specificData, setSpecificData] = React.useState({});

  React.useEffect(() => {
    const newData = props.currentData.filter(
      (item) => item.id.videoId === props.videoId
    );

    if (newData.length > 0) {
      setSpecificData(newData[0]);
    } else {
      setSpecificData(newData);
    }
  }, [props.videoId, props.currentData]);

  return (
    <div className="PlayVideo-container">
      <div className={props.menuClicked === true ? "Navbar" : "Navbar-active "}>
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
      <div className="Player-holder">
        <iframe
          className="PlayVideo"
          // width="auto"
          // height="310"
          src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          muted
          controls
        />
      </div>
      {specificData.snippet && (
        <div className="Player-additional">
          <div className="Player-details">
            <div className="player-title">{specificData.snippet.title}</div>
          </div>
          <div className="Player-channel">
            <div className="Player-logo">
              <img src={specificData.snippet.thumbnails.medium.url} alt="" />
            </div>
            <div className="Player-channel-title">
              {specificData.snippet.channelTitle}
            </div>
          </div>
        </div>
      )}

      {/* ===== */}
      <div className="Player-extra-videos"></div>
    </div>
  );
}

export default PlayVideo;
