import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import Calculator from "./Calculator/Calculator";
import Exercise from "./Exercise1/Exercise";
import Exercise2 from "./Exercise2/Exercise";
// import * as serviceWorker from "./serviceWorker";
// import $ from 'jquery';

const routing = (
  <Router>
    <div id="wrapper">
      <header>
        <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/exercise-1-0">Exercise 1.0</Link>
          </li>
          <li>
            <Link to="/exercise-1-1">Exercise 1.1</Link>
          </li>
        </ul>
      </header>

      <div className="content">
        <Switch>
          <Route path="/calculator" component={Calculator} />
          <Route path="/exercise-1-0" component={Exercise} />
          <Route path="/exercise-1-1" component={Exercise2} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
