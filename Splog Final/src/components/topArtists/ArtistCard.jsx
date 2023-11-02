import axios from "axios";

import { useState, useEffect } from "react";
import ArtistDetailsCard from "./ArtistDetailsCard";

const ArtistCard = (props) => {
  const [showingDetails, setShowingDetails] = useState(false);
  const [token, setToken] = useState("");
  const [artistTopTracks, setArtistTopTracks] = useState([]); // Add this state

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const startShowingDetailsHandler = () => {
    setShowingDetails(true);

    axios.get(`https://api.spotify.com/v1/artists/${props.artistId}/top-tracks?country=US`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then(response => {
      console.log(response.data.tracks); // Log the fetched tracks data
      setArtistTopTracks(response.data.tracks); // Set artist top tracks state
    })
    .catch(error => {
      console.log("Error fetching top tracks: ", error);
    });
  }

  const stopShowingDetailsHandler = () => {
    setShowingDetails(false);
  };

  return (
    <div>
      <div
        onClick={startShowingDetailsHandler}
        className="hover:scale-110  hover:cursor-pointer transform transition-transform duration-200 ease-in-out"
      >
        <img className="aspect-square object-cover" src={props.artistImage} alt="Artist Picture" />
        <div className="bg-white p-2">
          <h4 className="truncate text-lg text-black font-bold">{props.artistName}</h4>
        </div>
      </div>
      {showingDetails && 
        <ArtistDetailsCard
          onStopShowingDetails={stopShowingDetailsHandler}
          artistId={props.artistId}
          artistName={props.artistName}
          artistImage={props.artistImage}
          artistTracks={artistTopTracks} // Use the artistTopTracks state here
        />
      }
    </div>
  );
  
};

export default ArtistCard;
