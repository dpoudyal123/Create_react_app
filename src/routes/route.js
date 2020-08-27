import React from "react";
import { Route, Switch } from "react-router-dom";
import URI from "./uri";

function Routes() {
  return (
    <div>
      <Switch>
        <Route path={URI.LANDING} exact>
          <p>Landing</p>
        </Route>
        <Route path={URI.TABLES}>
          <p>Tables</p>
        </Route>
        <Route path={URI.OTHER}>
          <p>Other</p>
        </Route>
        <Route path="*">
          <p>Landing</p>
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
