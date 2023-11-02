import { useEffect, useState } from "react";
import Login from "./Login";
import LandingBanner from "./LandingBanner";

const Landing = (props) => {

  const getShortTermSongsData = (data) => {
    props.onGetSongsData(data)
  }
  
  const getArtistsData = (data) => {
    props.onGetArtistsData(data)
  }

  return (
    <div>
      <div className="mx-auto w-3/4 py-4 flex justify-between text-2xl font-black font-sans text-amber-500 hover: cursor-pointer">
        <p>Splog</p>
        <Login
          onGetShortTermSongsData={getShortTermSongsData}
          onGetArtistsData={getArtistsData}
        />
      </div>
      <LandingBanner/>
    </div>
  )
}

export default Landing;