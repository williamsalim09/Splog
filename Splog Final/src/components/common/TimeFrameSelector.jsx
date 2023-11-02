// backend file to fetch data with API. props.type shows what type of data it's taking.
import axios from "axios"
import { useState, useEffect } from "react"

const TimeFrameSelector = (props) => {
  const [token, setToken] = useState("")

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"))
    }
  }, [])

  const timeFrameSelectHandler = () => {
    if (props.type == "song") {
      if (props.term == "short") {
        axios.get("https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10", {
          headers: {
            Authorization: "Bearer " + token,
          }
        })
        .then(response => {
          props.onGetShortTermSongsData(response.data)
        })
        .catch(error => {
          console.log("Error")
        })
      }
  
      if (props.term == "medium") {
        axios.get("https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=10", {
          headers: {
            Authorization: "Bearer " + token,
          }
        })
        .then(response => {
          props.onGetMediumTermSongsData(response.data)
        })
        .catch(error => {
          console.log("Error")
        })
      }
  
      if (props.term == "long") {
        axios.get("https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10", {
          headers: {
            Authorization: "Bearer " + token,
          }
        })
        .then(response => {
          props.onGetLongTermSongsData(response.data)
        })
        .catch(error => {
          console.log("Error")
        })
      }
    }

    if (props.type == "artist") {
      if (props.term == "short") {
        axios.get("https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10", {
          headers: {
            Authorization: "Bearer " + token,
          }
        })
        .then(response => {
          props.onGetShortTermArtistsData(response.data)
        })
        .catch(error => {
          console.log("Error")
        })
      }
  
      if (props.term == "medium") {
        axios.get("https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10", {
          headers: {
            Authorization: "Bearer " + token,
          }
        })
        .then(response => {
          props.onGetMediumTermArtistsData(response.data)
        })
        .catch(error => {
          console.log("Error")
        })
      }
  
      if (props.term == "long") {
        axios.get("https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10", {
          headers: {
            Authorization: "Bearer " + token,
          }
        })
        .then(response => {
          props.onGetLongTermArtistsData(response.data)
        })
        .catch(error => {
          console.log("Error")
        })
      }
    }

    if (props.type == "genre") {
      if (props.term == "short") {
        axios.get("https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10", {
          headers: {
            Authorization: "Bearer " + token,
          }
        })
        .then(response => {
          console.log(response.data)
          props.onGetShortTermGenres(response.data)
        })
        .catch(error => {
          console.log("Error")
        })
      }

      if (props.term == "medium") {
        axios.get("https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10", {
          headers: {
            Authorization: "Bearer " + token,
          }
        })
        .then(response => {
          console.log(response.data)
          props.onGetMediumTermGenres(response.data)
        })
        .catch(error => {
          console.log("Error")
        })
      }

      if (props.term == "long") {
        axios.get("https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10", {
          headers: {
            Authorization: "Bearer " + token,
          }
        })
        .then(response => {
          console.log(response.data)
          props.onGetLongTermGenres(response.data)
        })
        .catch(error => {
          console.log("Error")
        })
      }
    }

    if (props.type == "combined") {
      if (props.term == "short") {
        let data = [];

        axios.get("https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10", {
          headers: {
            Authorization: "Bearer " + token,
          }
        })
        .then(response => {
          data.push(response.data)
          return axios.get("https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10", {
            headers: {
              Authorization: "Bearer " + token,
            }
          })
        })
        .then(response => {
          data.push(response.data)
          props.onGetShortTermData(data)
        })
        .catch(error => {
          console.log("Error")
        })
      }

      if (props.term == "medium") {
        let data = [];

        axios.get("https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10", {
            headers: {
              Authorization: "Bearer " + token,
            }
          })
          .then(response => {
            data.push(response.data)
            return axios.get("https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=10", {
              headers: {
                Authorization: "Bearer " + token,
              }
            })
          })
          .then(response => {
            data.push(response.data)
            props.onGetMediumTermData(data)
          })
          .catch(error => {
            console.log("Error")
          })
      }

      if (props.term == "long") {
        let data = [];

        axios.get("https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10", {
          headers: {
            Authorization: "Bearer " + token,
          }
        })
        .then(response => {
          data.push(response.data)
          return axios.get("https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10", {
            headers: {
              Authorization: "Bearer " + token,
            }
          })
        })
        .then(response => {
          data.push(response.data)
          props.onGetLongTermData(data)
        })
        .catch(error => {
          console.log("Error")
        })
      }
    }
  }

  return (
    <button
      className="pl-4 text-black font-medium font-sans cursor-pointer transition-transform transform hover:scale-105 hover:text-white"
      onClick={timeFrameSelectHandler}
    >
      {props.termTitle}
    </button>
  )
}

export default TimeFrameSelector;