import Home from "../components/Home";
import Favorite from "../components/Favorite";

import Login from "../components/Login";
import ErrorPage from "../components/ErrorPage";
import { homeButton } from "./NavbarButtons";
import { postButton } from "./NavbarButtons";
import { loginButton } from "./NavbarButtons";
import {search} from "./NavbarButtons"
import {favorite} from "./NavbarButtons"


export const Routes = {
  home: () => ({ path: "/", text: homeButton, component: Home }),
  favorite: () => ({
    path: "/favorite",
    text: favorite,
    component: Favorite,
  }),
  search: () => ({path: "/search", text: search}),
  login: () => ({ path: "/login", text: loginButton, component: Login }),
  error: () => ({ path: "*", text: "", component: ErrorPage }),
};