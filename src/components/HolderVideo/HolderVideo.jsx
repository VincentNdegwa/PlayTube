import React from "react";
import "./HolderVideo.css";
import { Link } from "react-router-dom";

function HolderVideo(props) {
  //   const videoData = props.videoData[props.index];

  return (
    <div>
      <div className="card">
        <Link to={`/video/${props.item.id.videoId}`} className="card-image">
          <div onClick={props.display}>
            <img
              className="video-image"
              src={props.item.snippet.thumbnails.high.url}
              alt=""
            />
          </div>
        </Link>

        <div className="card-details">
          <div className="card-logo">
            <img src={props.item.snippet.thumbnails.high.url} alt="" />
          </div>
          <div className="card-description">
            <div className="card-tittle">{props.item.snippet.title}</div>
            <div className="card-channel">
              {props.item.snippet.channelTitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HolderVideo;
