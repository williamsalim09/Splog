import { useState, useEffect } from "react";

const ArtistDetailsCard = (props) => {
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
      <div className="hover:cursor-auto fixed max-h-[45rem] w-[30rem] left-0 right-0 top-0 bottom-0 m-auto bg-gradient-to-b from-amber-500 to-white overflow-y-hidden" style={{ zIndex: 9999 }}>
        {/* Set overflow-y-hidden to disable scrolling */}
        <button
          className="absolute top-2 right-3 text-black hover:text-red-700 font-bold text-3xl focus:outline-none"
          onClick={() => {
            props.onStopShowingDetails();
            setIsCardOpen(false); // Set isCardOpen to false when the card is closed
          }}
        >
          x
        </button>
        <br />
        <img src={props.artistImage} alt="artist img" className="p-5 aspect-square object-cover" />
        <div className="text-black px-5 pb-5">
          <p className="text-2xl font-bold font-sans truncate overflow-ellipsis">
            {props.artistName}'s Top 10 Tracks
          </p>
          <div className="flex">
            <div className="w-1/2 p-4"> {/* Added padding here */}
            {/* Lists artist's top 10 tracks in 2 columns */}
              <ul>
                {props.artistTracks != null ? (
                  props.artistTracks.slice(0, 5).map((track, index) => (
                    <li className="font-medium truncate overflow-ellipsis" key={index}>
                      {index + 1}. {track.name}
                    </li>
                  ))
                ) : (
                  <li>No data</li>
                )}
              </ul>
            </div>
            <div className="w-1/2 p-4"> {/* Added padding here */}
              <ul>
                {props.artistTracks != null ? (
                  props.artistTracks.slice(5, 10).map((track, index) => (
                    <li className="font-medium truncate overflow-ellipsis" key={index}>
                      {index + 6}. {track.name}
                    </li>
                  ))
                ) : (
                  <li>No data</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  
  
};

export default ArtistDetailsCard;
