const mostFrequent = (arr, num) => {
  const map = {};
  let keys = [];

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++;
    } else {
      map[arr[i]] = 1;
    }
  }

  for (let i in map) {
    keys.push(i);
  }

  keys = keys.sort((a, b) => {
    if (map[a] === map[b]) {
      if (a > b) {
          return 1;
      } else {
          return -1;
      }
    }
    else {
      return map[b] - map[a];
    }
  }).slice(0, num);

  return keys;
};

export const getGenres = (data) => {
  // combines all genres into a single array
  let genres = [];

  for (let i = 0; i < data.items.length; i++) {
    genres.push(...data.items[i].genres)
  }

  // finds the top 5 most common genres in the array
  const topGenres = mostFrequent(genres, 5)
  return topGenres;
}