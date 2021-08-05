import MoviesData from "../../data/data";
import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import '../Movies/Movies.css'

export default function Movies() {
  // if (!this.state.isValidLogin) {
  //     return <Redirect to={Routes.login().path} />;
  //   }
  const [info, setInfo] = useState([]);

  useEffect(() => {
    MoviesData().then((data) => {
        console.log(111)
        console.log(data)
        setInfo(data);
      });
  }, []);

  console.log(info)
  return (
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
        ))}
    </div>
  );
}
