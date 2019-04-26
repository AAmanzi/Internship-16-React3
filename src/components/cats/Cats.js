import React from "react";
import { Switch, Route } from "react-router-dom";
import CatsDisplay from "./CatsDisplay";
import CatDetails from "./CatDetails";
import CatCreate from "./CatCreate";
import CatUpdate from "./CatUpdate";

const Cats = () => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/cats"
          render={props => <CatsDisplay {...props} />}
        />
        <Route
          exact
          path="/cats/create"
          render={props => <CatCreate {...props} />}
        />
        <Route
          exact
          path="/cats/:id"
          render={props => <CatDetails {...props} />}
        />
        <Route
          exact
          path="/cats/update/:id"
          render={props => <CatUpdate {...props} />}
        />
      </Switch>
    </div>
  );
};

export default Cats;
