import React, { Component } from "react";
import Login from "../login";
import Admin from "../admin";


import { HashRouter, Route, Switch } from "react-router-dom";

export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Admin>
            <Switch>
              <Route path="/" component={Login} />
            </Switch>
          </Admin>
        </Switch>
      </HashRouter>
    );
  }
}
