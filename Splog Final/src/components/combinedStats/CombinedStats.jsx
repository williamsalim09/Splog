import { useEffect, useState, useRef } from "react";
import domtoimage from "dom-to-image"; // Import the library
import TimeFrameSelector from "../common/TimeFrameSelector";
import CombinedStatsBanner from "./CombinedStatsBanner";

const CombinedStats = (props) => {
  const [combinedData, setCombinedData] = useState([]);
  const [selectedTimeFrameText, setSelectedTimeFrameText] = useState("the past 4 weeks");
  const combinedStatsRef = useRef(null);
  


  useEffect(() => {
    let combinedData = []

    combinedData.push(props.artistsData);
    combinedData.push(props.songsData);

    setCombinedData(combinedData)
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

  const getShortTermData = (data) => {
    setCombinedData(data)
    handleTimeFrameClick("short");
  }

  const getMediumTermData = (data) => {
    setCombinedData(data)
    handleTimeFrameClick("medium");
  }

  const getLongTermData = (data) => {
    setCombinedData(data)
    handleTimeFrameClick("long");
  }

  const handleImageSave = async () => {
    if (combinedStatsRef.current) {
      // Save the current margin-left style
      const originalMarginLeft = combinedStatsRef.current.style.marginLeft;
  
      // Adjust the margin-left for screen capture
      combinedStatsRef.current.style.marginLeft = "-0px"; // Adjust this value as needed
  
      // Use domtoimage to capture the image from the adjusted element
      domtoimage.toJpeg(combinedStatsRef.current)
        .then((dataUrl) => {
          const a = document.createElement("a");
          a.href = dataUrl;
          a.download = "combined_stats_image.jpg";
          a.click();
  
          // Reset the margin-left to its original value
          combinedStatsRef.current.style.marginLeft = originalMarginLeft;
        })
        .catch((error) => {
          console.error("Error capturing image:", error);
  
          // Reset the margin-left to its original value in case of an error
          combinedStatsRef.current.style.marginLeft = originalMarginLeft;
        });
    }
  };
  
  

  if (combinedData.length === 0 || combinedData[0].items == undefined || combinedData[1].items == undefined || combinedData[0].items.length == 0 || combinedData[1].items.length == 0) {
    return (
      <div></div>
    )
  }

  console.log(combinedData)

  
  return (
    <>
      <CombinedStatsBanner></CombinedStatsBanner>
      <div className="w-3/5 mx-auto pb-10">
        <div className="bg-amber-500 flex justify-between px-4">
          <p className="text-black text-3xl font-bold">Combined Stats</p>
          <div className="flex text-black font-medium">
            <TimeFrameSelector termTitle={"Last Month"} term={"short"} type={"combined"} onGetShortTermData={getShortTermData}/>
            <TimeFrameSelector termTitle={"Last 6 Months"} term={"medium"} type={"combined"} onGetMediumTermData={getMediumTermData}/>
            <TimeFrameSelector termTitle={"All Time"} term={"long"} type={"combined"} onGetLongTermData={getLongTermData}/>
          </div>
        </div>
        <p className="text-neutral-300 py-1 font-medium">Your combined stats from  {selectedTimeFrameText}</p>
        <div ref={combinedStatsRef} className="bg-gradient-to-b from-amber-500 to-white w-[30rem] h-[auto] mx-auto">
          <img className="p-5" src={combinedData[0].items[0].images[0].url} alt="artist portrait" />
          <div className="flex text-black px-5 pb-5">
            <div className="text-lg w-1/2">
              <h4 className="font-bold">Top Artists</h4>
              <ul className="font-semibold">
                {combinedData[0].items.slice(0, 5).map(data => 
                  <li>{data.name}</li>
                )}

                
              </ul>
            </div>
            <div className="text-lg w-1/2 truncate">
              <h4 className="font-bold">Top Songs</h4>
              <ul className="font-semibold">

                {combinedData[1].items.slice(0, 5).map(data => 
                  <li><p className="truncate">{data.name}</p></li>
                )}

                
              </ul>
            </div>
          </div>
          
        </div>
        <br />
        {/* save button */}
        <button
          onClick={handleImageSave}
          className="hover:scale-105 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-auto block"
        >
          Save Image
        </button>
      </div>

    </>
    
  )
}

export default CombinedStats;