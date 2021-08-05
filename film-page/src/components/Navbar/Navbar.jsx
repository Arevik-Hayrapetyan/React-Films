import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MovieIcon from "@material-ui/icons/Movie";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";
import { useHistory } from "react-router";
import "../Navbar/Navbar.css"

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#dd33fa",
    position: "fixed",
    zIndex: 100,
  },
  textColor: {
    color: "white",
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const history = useHistory();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (value === "movies") history.push("/");
    if (value === "favorites") history.push("/favorites");
    if (value === "login") history.push("/login");
    if (value === "search") history.push("/search");
  }, [value]);

  return (
    <div onClick={() => window.scroll(0, 0)}>
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Movies"
        value="movies"
        className={classes.textColor}
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        className={classes.textColor}
        icon={<FavoriteIcon />}
      />

      <BottomNavigationAction
        label="Login"
        value="login"
        className={classes.textColor}
        icon={<LockOpenIcon />}
      />

      <BottomNavigationAction
        label="Search"
        value="search"
        className={classes.textColor}
        icon={<SearchIcon />}
      />
    </BottomNavigation>
    </div>
  );
}
