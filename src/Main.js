import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Loaderpage from "./components/Loaderpage/Loaderpage";
import HolderVideo from "./components/HolderVideo/HolderVideo";
import PlayVideo from "./components/PlayVideo/PlayVideo";
import { Routes, Route, useLocation } from "react-router-dom";

function Main(props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [videoData, setVideoData] = React.useState([]);
  const [videoId, setVideoId] = React.useState();
  // const [isPlayVideoRendered, setIsPlayVideoRendered] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const loadingTime = setTimeout(() => {
      setIsLoading(false);
      setVideoData(props.data);
    }, 4000);
    return () => clearTimeout(loadingTime);
  });

  const renderContent = () => {
    const loadingCards = [];
    for (let i = 0; i < 30; i++) {
      loadingCards.push(<Loaderpage key={i} />);
    }

    const arrayIndex = [];

    if (Array.isArray(videoData) && videoData.length > 0) {
      while (arrayIndex.length < 70) {
        const index = Math.floor(Math.random() * videoData.length);
        if (!arrayIndex.includes(index)) {
          arrayIndex.push(index);
        }
      }
    }

    function display(id) {
      setVideoId(id);
      console.log(id);
    }
    const randomVideoData = arrayIndex.map((index) => videoData[index]);
    const videoCard = randomVideoData.map((item) => {
      return (
        <HolderVideo
          item={item}
          key={item.id.videoId}
          display={() => {
            display(item.id.videoId);
          }}
        />
      );
    });

    if (isLoading) {
      return <div className="Home-container">{loadingCards}</div>;
    } else {
      return <div className="Home-container">{videoCard}</div>;
    }
  };

  return (
    <div className="page1">
      <Header />
      <div
        className={location.pathname === "/" ? "Home-page" : "Home-page-no-nav"}
      >
        {location.pathname === "/" && (
          <div className="Navbar-home">
            <Navbar />
          </div>
        )}

        <Routes>
          <Route path="/" element={<div>{renderContent()}</div>} />
          <Route
            path="/video/:id"
            element={
              <PlayVideo
                videoId={videoId}
                key={videoId}
                data={videoData}
                className="PlayerPage"
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
