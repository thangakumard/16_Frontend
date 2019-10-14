import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import SignupForm from "./components/auth/SignupForm";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={App} />
      <Route path="/signup" component={SignupForm} />
      <Route component={App} />
    </Switch>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
