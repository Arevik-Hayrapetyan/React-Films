import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "../Search/Search.css";
import SingleCard from "../SingleCard/SingleCard";
import { useEffect, useState, useRef } from "react";
import SearchData from "../../data/searchData"
import loadingImg from "../../assets/images/loading.gif";

export default function Search() {
  // if (!this.state.isValidLogin) {
  //     return <Redirect to={Routes.login().path} />;
  //   }
  const [searchMovie, setSearchMovie] = useState();
  const [info, setInfo] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    SearchData(pageNumber).then((data) => {
      console.log(data);
      setInfo((prev) => [...prev, ...data]);
    });
    
  }, [pageNumber]);

  function loadMore() {
    setPageNumber((prevPage) => prevPage + 1);
  }




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
        <Button>
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
              title={item.title}
            />
            
          ))
          }
          <div className="loading">
          <img src={loadingImg} className="loadingImg" alt="loading" />
          <Button
            onClick={loadMore}
            
            variant="contained"
            color="primary"
          >
            Load more
          </Button>
        </div>
          </div>
          </div>
   
  );

}
