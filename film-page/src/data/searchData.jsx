export default async function SearchData(searchMovie) {
  return await fetch(
    `
      https://api.themoviedb.org/3/search/movie?api_key=44a241f7d782bbeccc5377583f163cd9&&query=${searchMovie}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data.results)
      return data
    });
}
