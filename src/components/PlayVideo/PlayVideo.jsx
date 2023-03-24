import React from "react";
import "./PlayVideo.css";
import YoutubeData from "../../Data";

function PlayVideo(props) {
  // const [videoId, setVideoId] = React.useState(props.videoId);
  const [specificData, setSpecificData] = React.useState({});

  React.useEffect(() => {
    const newData = YoutubeData.filter(
      (item) => item.id.videoId === props.videoId
    );

    if (newData.length > 0) {
      setSpecificData(newData[0]);
    } else {
      setSpecificData(newData);
    }
  }, [props.videoId]);

  return (
    <div className="PlayVideo-container">
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
