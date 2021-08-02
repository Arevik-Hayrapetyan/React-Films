import Button from "@material-ui/core/Button";
import MovieIcon from '@material-ui/icons/Movie';
import LockOpenIcon from "@material-ui/icons/LockOpen";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

export const homeButton = (
  <Button color="primary" value="Home" fontSize="large">
    <MovieIcon />
    Home
  </Button>
);

export const loginButton = (
  <Button color="primary" value="Login" fontSize="large">
    <LockOpenIcon />
    Login
  </Button>
);

export const search = (
  <div>
    <div>
      <SearchIcon />
      <InputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  </div>
);
export const favorite = (
  <Button color="primary" value="Login" fontSize="large">
    Favorite
  </Button>
);
