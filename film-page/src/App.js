  
import "./App.css";
import LabelBottomNavigation from "./components/Navbar";
import {
  BrowserRouter,
  Switch,
  Route,
  
} from "react-router-dom";
import Container from '@material-ui/core/Container'
import ErrorPage from "./components/ErrorPage";
import Favorite from "./components/Favorite";
import Login from "./components/Login";
import Movies from "./components/Movies/Movies";
import Search from "./components/Search";


function App() {
  return (
    <BrowserRouter>
      <LabelBottomNavigation/>
    <div className="App" display="flex">
    <Container>
      <Switch>
        <Route exact path='/' component = {Movies}/>
        <Route path='/favorites' component = {Favorite}/>
        <Route path='/login' component = {Login}/>
        <Route path='/search' component = {Search}/>
        <Route path='*' component = {ErrorPage}/>
      </Switch>
    </Container>

    </div>
    </BrowserRouter>
  );
}

export default App;