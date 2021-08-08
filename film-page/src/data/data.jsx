export default async function MoviesData(pageNumber) {
  return await fetch(
    `
    https://api.themoviedb.org/3/trending/all/day?api_key=44a241f7d782bbeccc5377583f163cd9&page=${pageNumber}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.results);
      return data.results;
    });
}

