import "./App.css";
import LabelBottomNavigation from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Favorite from "./components/Favorite/Favorite";
import Login from "./components/Login/Login";
import Movies from "./components/Movies/Movies";
import Movie from "./components/MovieCard/MovieCard";
import Search from "./components/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <LabelBottomNavigation />
      <div className="App" display="flex">
        <Container>
          <Switch>
            <Route exact path="/movies" component={Movies} />
            <Route path={`/movie/:movieId`} component={Movie} />
            <Route path="/favorites" component={Favorite} />
            <Route path="/login" component={Login} />
            <Route path="/search" component={Search} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
