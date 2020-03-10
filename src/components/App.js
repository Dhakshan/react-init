/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import PG_Dashboard from "./pages/dashboard/PG_Dashboard";
import PG_LazyLoadImage from "./pages/lazyLoadImage/PG_LazyLoadImage";
import PG_LLI_ISO from "./pages/intersectionobserver/PG_LLI_ISO";
import PG_LazyLoadFnComponent from "./pages/lazyLoadFNComponent/PG_LazyLoadFnComponent";

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
          <Route exact path="/lazyloadimage" component={PG_LazyLoadImage} />
          <Route exact path="/intersectionobserver" component={PG_LLI_ISO} />
          <Route exact path="/lazyloadfn" component={PG_LazyLoadFnComponent} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
