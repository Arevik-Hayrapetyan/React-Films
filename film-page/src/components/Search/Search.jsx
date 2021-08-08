import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "../Search/Search.css";
import SingleCard from "../SingleCard/SingleCard";
import { useEffect, useState } from "react";
import SearchData from "../../data/searchData";

export default function Search() {
  // if (!this.state.isValidLogin) {
  //     return <Redirect to={Routes.login().path} />;
  //   }
  const [searchMovie, setSearchMovie] = useState("");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    SearchData(searchMovie).then((data) => {
      setInfo(data.results);
      console.log(data.results);
    });
  }, [searchMovie]);

  return (
    <div>
      <div>Search Movies</div>
      <div className="search">
        <TextField
          id="filled-basic"
          label="Search"
          variant="filled"
          onChange={(event) => setSearchMovie(event.target.value)}
        />
        <Button onClick={SearchData}>
          <SearchIcon />
        </Button>
      </div>
      <div className="movie-wrapper">
        {info &&
          info.map((item) => (
            <SingleCard
              key={item.id}
              id={item.id}
              poster_path={item.poster_path}
              release_date={item.release_date}
              vote_count={item.vote_count}
              title={item.title || item.name}
            />
          ))}
      </div>
    </div>
  );
}
