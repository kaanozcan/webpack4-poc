import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Home from "./Home";
import BundleLoader from "./BundleLoader";

const Root = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" render={(props) => (
      <BundleLoader
        resolve={() => import(/*webpackChunkName: "about"*/"./About")}
        resolveSync={() => require("./About").default}>
        {(Page) => <Page {...props}/>}
      </BundleLoader>
    )} />
    <Route exact path="/contact" render={(props) => (
      <BundleLoader
        resolve={() => import(/*webpackChunkName: "contact"*/"./Contact")}
        resolveSync={() => require("./Contact").default}>
        {(Page) => <Page {...props}/>}
      </BundleLoader>
    )} />
  </Switch>
);

export default Root;
