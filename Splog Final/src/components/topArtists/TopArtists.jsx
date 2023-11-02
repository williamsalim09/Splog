import { useEffect, useState } from "react";

import TimeFrameSelector from "../common/TimeFrameSelector";
import ArtistCard from "./ArtistCard";
import ArtistBanner from "./ArtistBanner";

const TopArtists = (props) => {
  const [artistsData, setArtistsData] = useState([]);
  const [selectedTimeFrameText, setSelectedTimeFrameText] = useState("the past 4 weeks");

  useEffect(() => {
    setArtistsData(props.artistsData)
  }, [props])

  
  if (artistsData.length === 0 || artistsData == null) {
    return (
      <div></div>
    )
  }

  const handleTimeFrameClick = (timeFrame) => {
    // Update the selected time frame text based on the clicked time frame
    switch (timeFrame) {
      case "short":
        setSelectedTimeFrameText("the past 4 weeks");
        break;
      case "medium":
        setSelectedTimeFrameText("the past 6 months");
        break;
      case "long":
        setSelectedTimeFrameText("all time");
        break;
      default:
        setSelectedTimeFrameText("the past 4 weeks");
        break;
    }
  };
  
  const getShortTermArtistsData = (data) => {
    setArtistsData(data)
    handleTimeFrameClick("short");
  }

  const getMediumTermArtistsData = (data) => {
    setArtistsData(data)
    handleTimeFrameClick("medium");
  }

  const getLongTermArtistsData = (data) => {
    setArtistsData(data)
    handleTimeFrameClick("long");
  }


  return (
    <>
      <ArtistBanner></ArtistBanner>
      <div className="w-3/5 mx-auto pb-10">
        <div className="bg-amber-500 flex justify-between px-4">
          <p className="text-black text-3xl font-bold">Top Artists</p>
          <div className="flex text-black font-medium">
            <TimeFrameSelector 
            termTitle={"Last Month"} 
            term={"short"} 
            type={"artist"} 
            onGetShortTermArtistsData={getShortTermArtistsData}
            />
            <TimeFrameSelector 
            termTitle={"Last 6 Months"} 
            term={"medium"} 
            type={"artist"} 
            onGetMediumTermArtistsData={getMediumTermArtistsData}
            />
            <TimeFrameSelector 
            termTitle={"All Time"} 
            term={"long"} 
            type={"artist"} 
            onGetLongTermArtistsData={getLongTermArtistsData}
            />
          </div>
        </div>
        <p className="text-neutral-300 py-1 font-medium">Your top artists from {selectedTimeFrameText}</p>
        <div className="grid grid-cols-5 gap-4">
          {artistsData.items.map(data => 
            <ArtistCard
              key={data.id}
              artistId = {data.id}
              artistImage={data.images[0].url} 
              artistName={data.name}
              artistTracks = {data.tracks}
              
            />)}
        </div>
      </div>
    </>
    
  )
}


export default TopArtists;