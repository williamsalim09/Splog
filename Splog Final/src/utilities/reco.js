import { getGenres } from "./genres";

export const getSeeds = (data) => {
  //get artist id
  let artistId = [];

  for (let i = 0; i < data.length; i++) {
    artistId.push(data[i].artists[0].id)
  }

  const artistIdString = artistId.toString()

  return artistIdString;
}