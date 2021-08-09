import React from "react";
import "../SingleCard/SingleCard.css";

const SingleCard = ({ id, poster_path, title, release_date, vote_count }) => {
  return (
    <div className="media">
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="Movie" />
      <div>
        {title}
        <br />
        <span>{release_date}</span>
        <br />
        <span>Vote:{vote_count}</span>
      </div>
    </div>
  );
};
export default SingleCard;
