import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./components/HomePage";
import Education from "./components/Education";
import Work from "./components/Work";
import NavBarFunc from "./components/NavBarFunc";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          {HomePage()}
        </Route>
        <Route path="/education">{Education()}</Route>
        <Route path="/work">{Work}</Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
