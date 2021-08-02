import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Routes } from "../constants/routes";

export default function Navbar() {
  return (
    <Router>
      <nav>
        <ul style={{ display: "flex", listStyle: "none" }} key="1">
          {Object.values(Routes).map((fn) => {
            const { path, text } = fn();

            return (
              <li key={Math.random().toString()}>
                <Link to={path} style={{ textDecoration: "none", flex: 3 }}>
                  {text}{" "}
                </Link>
              </li>
            );
          })}
        </ul>

        <Switch>
          {Object.values(Routes).map((fn) => {
            const { path, component } = fn();

            return <Route exact path={path} component={component}  key={Math.random().toString()}/>;
          })}
        </Switch>
      </nav>
    </Router>
  )}