import { useState, useEffect } from "react";
import { getGenres } from "../../utilities/genres";

import TimeFrameSelector from "../common/TimeFrameSelector";
import GenreBanner from "./GenreBanner";

const TopGenres = (props) => {
  const [filteredGenres, setFilteredGenres] = useState([])
  const [selectedTimeFrameText, setSelectedTimeFrameText] = useState("the past 4 weeks");


  useEffect(() => {
    if (props.genresData.length != 0) {
      setFilteredGenres(getGenres(props.genresData))
    }
  }, [props])

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

  const getShortTermGenres = (data) => {
    setFilteredGenres(getGenres(data))
    handleTimeFrameClick("short");

  }

  const getMediumTermGenres = (data) => {
    setFilteredGenres(getGenres(data))
    handleTimeFrameClick("medium");

  }

  const getLongTermGenres = (data) => {
    setFilteredGenres(getGenres(data))
    handleTimeFrameClick("long");

  }

  if (filteredGenres.length == 0 || filteredGenres == null) {
    return (
      <div></div>
    )
  }

  return (
    <>
      <GenreBanner></GenreBanner>
      <div className="w-3/5 mx-auto pb-10">
        <div className="bg-amber-500 flex justify-between px-4">
          <p className="text-black text-3xl font-bold">Top Genres</p>
          <div className="flex text-black font-medium">
            <TimeFrameSelector termTitle={"Last Month"} term={"short"} type={"genre"} onGetShortTermGenres={getShortTermGenres}/>
            <TimeFrameSelector termTitle={"Last 6 Months"} term={"medium"} type={"genre"} onGetMediumTermGenres={getMediumTermGenres}/>
            <TimeFrameSelector termTitle={"All Time"} term={"long"} type={"genre"} onGetLongTermGenres={getLongTermGenres}/>
          </div>
        </div>
        <p>Your top genres from {selectedTimeFrameText}</p>
        {filteredGenres.map((data, index) => <p className="bg-gradient-to-r from-amber-500 to-white text-black text-[5rem] font-bold leading-none my-4 max-w-max">#{index + 1} {data.toUpperCase()}</p>)}
      </div>
    </>
  )
}

export default TopGenres;