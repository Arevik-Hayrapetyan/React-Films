export default async function  MoviesData() {

  return await fetch(
    `
    https://api.themoviedb.org/3/discover/movie?api_key=44a241f7d782bbeccc5377583f163cd9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=&with_watch_monetization_types=flatrate`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.results)
      return data.results
    });
}

