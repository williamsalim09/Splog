import { useEffect, useState } from "react";

import TimeFrameSelector from "../common/TimeFrameSelector";
import SongCard from "./SongCard";
import SongBanner from "./SongBanner";

const TopSongs = (props) => {
  const [songsData, setSongsData] = useState([]);
  const [selectedTimeFrameText, setSelectedTimeFrameText] = useState("the past 4 weeks");

  useEffect(() => {
    setSongsData(props.songsData);
  }, [props]);

  if (songsData.length === 0 || songsData == null) {
    return (
      <div></div>
    );
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
        setSelectedTimeFrameText("all time");
        break;
    }
  };

  const getShortTermSongsData = (data) => {
    setSongsData(data);
    handleTimeFrameClick("short");
  };

  const getMediumTermSongsData = (data) => {
    setSongsData(data);
    handleTimeFrameClick("medium");
  };

  const getLongTermSongsData = (data) => {
    setSongsData(data);
    handleTimeFrameClick("long");
  };

  return (
    <>
      <SongBanner></SongBanner>
      <div className="w-3/5 mx-auto pb-10">
        <div className="bg-amber-500 flex justify-between px-4">
          <p className="text-black text-3xl font-bold font-sans">Top Songs</p>
          <div className="flex text-black font-medium font-sans">
            <TimeFrameSelector
              termTitle={"Last Month"}
              term={"short"}
              type={"song"}
              onGetShortTermSongsData={getShortTermSongsData}
            />
            <TimeFrameSelector
              termTitle={"Last 6 Months"}
              term={"medium"}
              type={"song"}
              onGetMediumTermSongsData={getMediumTermSongsData}
            />
            <TimeFrameSelector
              termTitle={"All Time"}
              term={"long"}
              type={"song"}
              onGetLongTermSongsData={getLongTermSongsData}
            />
          </div>
        </div>
        <p className="text-neutral-300 py-1 font-medium font-sans">Your top songs from {selectedTimeFrameText}</p>
        <div className="grid grid-cols-5 gap-4">
          {songsData.items.map(data =>
            <SongCard
              key={data.id}
              songId={data.id}
              albumCover={data.album.images[0].url}
              title={data.name}
              artist={data.artists[0].name}
            />)}
        </div>
      </div>
    </>
  );
}


export default TopSongs;
