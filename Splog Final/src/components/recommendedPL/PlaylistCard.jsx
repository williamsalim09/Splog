import React, { useState, useEffect } from 'react';
import { FaHeart, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { Alert, Button } from "@material-tailwind/react";

const PlaylistCard = (props) => {
  const { zIndex } = props;
  const [isLiked, setIsLiked] = useState(false);
  const [isDiscarded, setIsDiscarded] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [open, setOpen] = useState(false); // State variable for the alert

  useEffect(() => {
    if (isDiscarded) {
      setTimeout(() => {
        setIsAnimationComplete(true);
      }, 300); // Adjust the timeout duration as needed
    }
  }, [isDiscarded]);

  const handleLikeClick = () => {
    if (!isLiked) {
      // Make an API request to add the track to the user's liked songs library
      const trackId = props.trackId;
      axios
        .put(`https://api.spotify.com/v1/me/tracks?ids=${trackId}`, null, {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        })
        .then(() => {
          console.log('Successfully liked the song');
          setIsLiked(true);

          // Trigger the animation and discard after a delay
          setTimeout(() => {
            setIsDiscarded(true);
          }, 300); // Adjust the delay as needed
        })
        .catch((error) => {
          console.error('Error liking the song:', error);
        });
    }
  };

  if (isAnimationComplete && (isDiscarded || isLiked)) {
    return null;
  }

  const transformClass = isDiscarded ? '-translate-x-full scale-0' : isLiked ? 'translate-x-full scale-0' : 'scale-100';

  return (
    <div
      className={`border border-black rounded-md p-0 transform transition-transform ${transformClass}`}
      style={{ zIndex }}
    >
      <div className="bg-gradient-to-b from-amber-500 to-white w-[30rem] h-[auto] mx-auto p-5">
        <img className="aspect-square object-cover mb-2" src={props.albumCover} alt="album cover" />
        <h4 className="truncate text-lg text-black font-bold">{props.songTitle}</h4>
        <p className="truncate text-lg text-black font-semibold">{props.artistName}</p>
        <div className="flex justify-between items-center mt-2">
          {/* discard button */}
          <button
              onClick={() => setIsDiscarded(true)}
              className="px-4 py-2 rounded text-red-500  transition-transform hover:scale-125 hover:text-gray-900"
              style={{ pointerEvents: isDiscarded ? 'none' : 'auto' }}
            >
              <FaTrash className="w-6 h-6 inline-block" />
            </button>
  
          {/* like button */}
          <button
            onClick={handleLikeClick}
            className={`px-4 py-2 rounded ${
              isLiked || isDiscarded ? 'bg-green-100 text-green-500' : 'text-gray-600'
            } transition-transform hover:scale-125 hover:text-red-500`}
            style={{ pointerEvents: isLiked || isDiscarded ? 'none' : 'auto' }}
          >
            <FaHeart className={`w-6 h-6 inline-block`} />
          </button>

          {/* buttons end */}
        </div>
      </div>
      <br />
    </div>
  );
  
};

export default PlaylistCard;
