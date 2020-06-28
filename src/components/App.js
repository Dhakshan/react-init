/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import PG_Dashboard from "./pages/dashboard/PG_Dashboard";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  
  render() {
    return (
      <div className="app mnvh">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dashboard" component={PG_Dashboard} />
          <Route exact path="*" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
