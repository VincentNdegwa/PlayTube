import React from "react";
import "./PlayVideo.css";

function PlayVideo(props) {
  const [videoId, setVideoId] = React.useState(props.videoId);
  const [specificData, setSpecificData] = React.useState({});

  const Data = props.data;

  React.useEffect(() => {
    setVideoId(props.videoId);
  }, [props.videoId, Data]);

  React.useEffect(() => {
    const newData = Data.find((item) => item.id.videoId === videoId);
    setSpecificData(newData);
  }, [Data, videoId]);
  console.log(specificData);

  return (
    <div className="PlayVideo-container">
      <div className="Player-holder">
        <iframe
          className="PlayVideo"
          // width="auto"
          // height="310"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          muted
          controls
        />
      </div>
      <div className="Player-additional">
        <div className="Player-details"></div>
        <div className="Player-extra-videos"></div>
      </div>
    </div>
  );
}

export default PlayVideo;
