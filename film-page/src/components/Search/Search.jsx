import React from "react";
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SingleCard from "../SingleCard/SingleCard";
import SearchData from "../../data/searchData";
import { getItems } from "../../helpers/localStorage";
import "../Search/Search.css";

export default function Search() {
  const [searchMovie, setSearchMovie] = useState("");
  const [info, setInfo] = useState([]);
  const [isLogin] = useState(getItems("isLogin"));

  useEffect(() => {
    SearchData(searchMovie).then((data) => {
      setInfo(data.results);
    });
  }, [searchMovie]);

  return isLogin ? (
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
  ) : (
    <Redirect to="/login" />
  );
}
