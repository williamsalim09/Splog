import { useState, useEffect } from "react";

const SongDetailsCard = (props) => {
  const [isCardOpen, setIsCardOpen] = useState(true);

  useEffect(() => {
    // Disable scrolling when the card is open
    document.body.classList.add("overflow-hidden");
  
    // Add event listener for the "Esc" key
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        props.onStopShowingDetails();
        setIsCardOpen(false);
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
  
    return () => {
      // Remove the event listener and CSS class when the component unmounts or the card is closed
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isCardOpen]);
  
  return (
    
    <div>
      <div className="hover:cursor-auto fixed w-full h-full left-0 right-0 top-0 bottom-0 m-auto bg-black opacity-80"style={{ zIndex: 9998 }}></div>
      <div className="hover:cursor-auto fixed w-[30rem] h-[45rem] left-0 right-0 top-0 bottom-0 m-auto bg-gradient-to-b from-amber-500 to-white" style={{ zIndex: 9999 }}>
      <button
          className="absolute top-2 right-3 text-black hover:text-red-700 font-bold text-3xl focus:outline-none"
          onClick={() => {
            props.onStopShowingDetails();
            setIsCardOpen(false); // Set isCardOpen to false when the card is closed
          }}
        >
          x
        </button>
        
        <br /><img src={props.albumCover} alt="album cover" className="p-5" />
        <div className="text-black px-5 pb-5">
          <p className="text-2xl font-bold font-sans truncate">{props.songTitle}</p>
          <p className="font-semibold font-sans">{props.artistName}</p>
          <div className="flex">
            {/* content of song details card */}
            {props.songFeatures != null ? 
              [
                <div className="w-1/2 font-medium">
                  <p>Acousticness: {props.songFeatures.acousticness}</p>
                  <p>Danceability: {props.songFeatures.danceability}</p>
                  <p>Energy: {props.songFeatures.energy}</p>
                  <p>Instrumentalness: {props.songFeatures.instrumentalness}</p>
                </div>,
                <div className="w-1/2 font-medium">
                  <p>Liveness: {props.songFeatures.liveness}</p>
                  <p>Loudness: {props.songFeatures.loudness}</p>
                  <p>Speechiness: {props.songFeatures.speechiness}</p>
                  <p>Valence: {props.songFeatures.valence}</p>
                </div>
              ] : <p>No details</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SongDetailsCard;