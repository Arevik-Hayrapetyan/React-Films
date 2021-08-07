export default async function SearchData(pageNumber) {
  return await fetch(
    `
      https://api.themoviedb.org/3/search/company?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNumber}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.results);
      return data.results;
    });
}
