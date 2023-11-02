import axios from "axios";
import { useEffect } from "react";

// for connecting to spotify api
const clientId = "df5e3aaf10a34427ab0b9e310672b581"
const redirectUrl = "http://localhost:5173/"
//const redirectUrl = "https://rczzh.github.io/splog2-dev/"
const apiUrl = "https://accounts.spotify.com/authorize"
const scopes = [
  "user-read-email",
  "user-read-private",
  "user-top-read",
  "user-library-modify"

]

const Login = (props) => {
  const getReturnedParams = (hash) => {
    const stringAfterHash = hash.substring(1)
    const paramsInUrl = stringAfterHash.split("&")
    const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
      const [key, value] = currentValue.split("=")
      accumulator[key] = value
      return accumulator
    }, {})
    return paramsSplitUp
  }

  useEffect(() => {
    if (window.location.hash) {
      const {
        access_token,
        expires_in,
        token_type
      } = getReturnedParams(window.location.hash)

      localStorage.clear()
      localStorage.setItem("accessToken", access_token)
      localStorage.setItem("expiresIn", expires_in)
      localStorage.setItem("tokenType", token_type)

      axios.get("https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10", {
        headers: {
          Authorization: "Bearer " + access_token,
        }
      })
      .then(response => {
        props.onGetShortTermSongsData(response.data)
      })
      .catch(error => {
        console.log(error)
      })

      axios.get("https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10", {
        headers: {
          Authorization: "Bearer " + access_token,
        }
      })
      .then(response => {
        props.onGetArtistsData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    }
  },[])

  const loginHandler = () => {
    window.location = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
  }

  return (
    <button className = "hover:cursor-pointer hover:text-gray-50 hover:scale-125  "onClick={loginHandler}>Login</button>
  )
}

export default Login;