import React from "react";
import { Route, Switch } from "react-router-dom";
import URI from "./uri";
import { Landing, Tables, Other } from "../pages";

function Routes() {
  return (
    <div>
      <Switch>
        <Route path={URI.LANDING} exact>
          <Landing />
        </Route>
        <Route path={URI.TABLES}>
          <Tables />
        </Route>
        <Route path={URI.OTHER}>
          <Other />
        </Route>
        <Route path="*">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
