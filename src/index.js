import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "normalize.css";
import App from "./components/App";
import NotFound from "./components/NotFound";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("app"));
