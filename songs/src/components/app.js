import React from "react";
import Songs from "./songs";
import SongDetail from "./song-detail";
const App = () => {
  return (
    <div className="ui grid container">
      <div className="eight wide column">
        <Songs />
      </div>
      <div className="eight wide column">
        <SongDetail />
      </div>
    </div>
  );
};

export default App;
