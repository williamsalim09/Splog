import React from 'react';
import { useState } from "react";

import Landing from "./components/landing/Landing";
import TopSongs from "./components/topSongs/TopSongs";
import TopArtists from "./components/topArtists/TopArtists";
import TopGenres from "./components/topGenres/TopGenres";
import CombinedStats from "./components/combinedStats/CombinedStats";
import RecommendedPL from "./components/recommendedPL/RecommendedPL";

const App = () => {
  const [songsData, setSongsData] = useState([]);
  const [artistsData, setArtistsData] = useState([]);

  const getSongsData = (data) => {
    setSongsData(data);
  }
  
  const getArtistsData = (data) => {
    setArtistsData(data);
  }

  return (
    <div>
      <Landing
        onGetSongsData={getSongsData}
        onGetArtistsData={getArtistsData}
      />
      <TopSongs songsData={songsData}/>
      <TopArtists artistsData={artistsData}/>
      <TopGenres genresData={artistsData}/>
      <CombinedStats artistsData={artistsData} songsData={songsData}/>
      <RecommendedPL songData={songsData}/>
    </div>
  )
}
export default App;
