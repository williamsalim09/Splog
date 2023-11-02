import axios from "axios";

import { useState, useEffect } from "react";
import SongDetailsCard from "./SongDetailsCard";

const SongCard = (props) => {
  const [showingDetails, setShowingDetails] = useState(false);
  const [token, setToken] = useState("")
  const [data, setData] = useState("")

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"))
    }
  }, [])

  const startShowingDetailsHandler  = () => {
    setShowingDetails(true)

    axios.get(`https://api.spotify.com/v1/audio-features/${props.songId}`, {
      headers: {
        Authorization: "Bearer " + token,
      }
    })
    .then(response => {
      setData(response)
    })
    .catch(error => {
      console.log("Error")
      console.log(error)
    })
  }

  const stopShowingDetailsHandler = () => {
    setShowingDetails(false)
  }

  return (
    <div>
      <div
        onClick={startShowingDetailsHandler}
        className="hover:scale-110  hover:cursor-pointer transform transition-transform duration-200 ease-in-out"
      >        <img className="aspect-square object-cover" src={props.albumCover} alt="album cover" />
        <div className="bg-white p-2">
          <h4 className="truncate text-lg text-black font-bold">{props.title}</h4>
          <p className="truncate text-lg text-black font-semibold">{props.artist}</p>
        </div>
      </div>
      {/* card content */}
      {showingDetails && <SongDetailsCard
        onStopShowingDetails={stopShowingDetailsHandler}
        songId={props.songId}
        albumCover={props.albumCover}
        songTitle={props.title}
        artistName={props.artist}
        songFeatures={data.data}
      />}
    </div>
  )
}

export default SongCard;