import axios from "axios";
import { useEffect, useState } from "react";
import TimeFrameSelector from "../common/TimeFrameSelector";

import { getSeeds } from "../../utilities/reco";
import PlaylistCard from "./PlaylistCard";
import RecoBanner from "./RecoBanner";

const RecommendedPL = (props) => {
  const [recoSongs, setRecoSongs] = useState([]);
  const [songSeeds, setSongSeeds] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }

    if (props.songData != 0) {
      setSongSeeds(getSeeds(props.songData.items));
      getRecoData();
    }
  }, [props]);

  //function to get the recommendation
  const getRecoData = () => {
    axios
      .get("https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=3", {  //uses the user's recent top 3 tracks as the seed to feed the recommendation
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        const seeds = getSeeds(response.data.items);
        return axios.get(`https://api.spotify.com/v1/recommendations?limit=20&seed_artists=${seeds}&min_popularity=70`, { //fetches 20 songs to recommend.
          headers: {
            Authorization: "Bearer " + token,
          },
        });
      })
      .then((response) => {
        console.log(response.data.tracks);
        setRecoSongs(response.data.tracks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (recoSongs.length === 0) {
    return <>
<div></div>    </>;
  }

  return (
    <>
      <RecoBanner></RecoBanner>
      <div className="w-3/5 mx-auto pb-10">
        <div className="bg-amber-500 flex justify-between px-4 relative z-50">
          <p className="text-black text-3xl font-bold">Recommendations</p>
        </div>
        <p className="font-medium">Some songs you might like!</p>
        {/* recommendation cards */}
        <div className="relative z-50 flex justify-center"> {/* Use flex to horizontally center */}
          {recoSongs.map((data, index) => (
            <div
              key={data.id}
              className="absolute top-0 left-0"
              style={{
                zIndex: 10 - index,
                left: "50%", // Center the card horizontally
                transform: "translateX(-50%)", // Shift it back by half its width
              }}
            >
              <PlaylistCard
                trackId={data.id}
                token={token}
                albumCover={data.album.images[0].url}
                songTitle={data.name}
                artistName={data.artists[0].name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecommendedPL;
