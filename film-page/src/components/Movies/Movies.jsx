import MoviesData from "../../data/data";
import { useEffect, useState, useRef } from "react";
import SingleCard from "../SingleCard/SingleCard";
import "../Movies/Movies.css";
import loadingImg from "../../assets/images/loading.gif";
import Button from "@material-ui/core/Button";
import { Redirect, useHistory } from "react-router-dom";
import { setItems, getItems } from "../../helpers/localStorage";

export default function Movies() {

  const [info, setInfo] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [isLogin] = useState(getItems("isLogin"));

  useEffect(() => {
    MoviesData(pageNumber).then((data) => {
      console.log(data);
      setInfo((prev) => [...prev, ...data]);
    });
    setLoading(true);
  }, [pageNumber]);

  function loadMore() {
    setPageNumber((prevPage) => prevPage + 1);
  }

  const pageEnd = useRef();

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 1 }
      );
      observer.observe(pageEnd.current);
    }
  });
  let history = useHistory();

  const handleMovie = (id, title, poster_path, overview) => (ev) => {
    setItems("movie", [...movie, { id, title, poster_path, overview }]);
    setMovie([...movie, { id, title, poster_path, overview }]);
    ev.stopPropagation();
    history.push(`/movie/${id}`);
  };

  return isLogin? (
    <div className="movies">
      <span className="movie-title">Suggested movies</span>
      <div className="movie-wrapper">
        {info &&
          info.map((item) => (
            <div
              onClick={handleMovie(
                item.id,
                item.title,
                item.poster_path,
                item.overview
              )}
            >
              <SingleCard
                key={item.id}
                id={item.id}
                poster_path={item.poster_path}
                release_date={item.release_date}
                vote_count={item.vote_count}
                title={item.title}
              />
            </div>
          ))}
        <div className="loading">
          <img src={loadingImg} className="loadingImg" alt="loading" />
          <Button
            onClick={loadMore}
            ref={pageEnd}
            variant="contained"
            color="primary"
          >
            Load more
          </Button>
        </div>
      </div>
    </div>
  ):(<Redirect to="/login" />)
}
