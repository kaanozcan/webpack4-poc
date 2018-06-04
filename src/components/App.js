import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Root from "./Root";

const App = () => (
  <Router>
    <Route exact match="/" component={Root} />
  </Router>
);

export default App;
