import React from "react";
import { Route, Switch } from "react-router-dom";
import Lander from "./containers/Lander";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ Lander } />
    </Switch>
  );
}