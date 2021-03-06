import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import App from "./mainApp";
import * as serviceWorker from "./serviceWorker";
import Header from "./appHeader";
import "./header.css";

const routing = (
  <Router>
    <div>
      <div className="header-basic-light">
        <div className="header-limiter">
          <Header />
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={App} />
        {/* <Route path="/users" component={Users} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
        {/* <Route component={Notfound} /> */}
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
