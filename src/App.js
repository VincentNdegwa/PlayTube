import React from "react";
import Main from "./Main";
import YoutubeData from "./Data";

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(YoutubeData);
  }, []);

  return (
    <div>
      <Main data={data} />
    </div>
  );
}

export default App;
