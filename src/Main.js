import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Loaderpage from "./components/Loaderpage/Loaderpage";
import HolderVideo from "./components/HolderVideo/HolderVideo";
import PlayVideo from "./components/PlayVideo/PlayVideo";
import { Routes, Route, useLocation } from "react-router-dom";
import musicData from "./Music";
import movieData from "./Movies";

function Main(props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [videoData, setVideoData] = React.useState([]);
  const [videoId, setVideoId] = React.useState();
  const [menuClicked, setMenuClicked] = React.useState(false);
  const [music, setMusic] = React.useState(musicData);
  const location = useLocation();
  const [renderHome, setRenderHome] = React.useState(true);
  const [renderMusic, setRenderMusic] = React.useState(false);
  const [renderMovie, setRenderMovie] = React.useState(false);
  const [currentData, setCurrentData] = React.useState(props.data);

  function Home() {
    setRenderHome(true);
    setRenderMusic(false);
    setRenderMovie(false);
    setCurrentData(props.data);
  }

  function Music() {
    setRenderMusic(true);
    setRenderHome(false);
    setRenderMovie(false);
    setCurrentData(musicData);
  }
  function Movie() {
    setRenderMovie(true);
    setRenderMusic(false);
    setRenderHome(false);
    setCurrentData(movieData);
  }

  function toggleMenu() {
    setMenuClicked(!menuClicked);
  }

  React.useEffect(() => {
    const loadingTime = setTimeout(() => {
      setIsLoading(false);
      setVideoData(props.data);
      setMusic(musicData);
    }, 2000);
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
      setMenuClicked(false);
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
    const musicCard = music.map((item) => {
      return (
        <HolderVideo
          key={item.id.videoId}
          item={item}
          display={() => {
            display(item.id.videoId);
          }}
        />
      );
    });
    const movieCard = movieData.map((item) => {
      return (
        <HolderVideo
          key={item.id.videoId}
          item={item}
          display={() => {
            display(item.id.videoId);
          }}
        />
      );
    });

    if (isLoading) {
      return <div className="Home-container">{loadingCards}</div>;
    } else if (renderHome) {
      return <div className="Home-container">{videoCard}</div>;
    } else if (renderMusic) {
      return <div className="Home-container">{musicCard}</div>;
    } else if (renderMovie) {
      return <div className="Home-container">{movieCard}</div>;
    }
  };

  return (
    <div className="page1">
      <Header toggleMenu={toggleMenu} />
      <div
        className={location.pathname === "/" ? "Home-page" : "Home-page-no-nav"}
      >
        {location.pathname === "/" && (
          <div className="Navbar-home">
            <Navbar Home={Home} Music={Music} Movie={Movie} />
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
                videoData={videoData}
                className="PlayerPage"
                menuClicked={menuClicked}
                currentData={currentData}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
