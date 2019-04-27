import React from "react";
import { Switch, Route } from "react-router-dom";
import DogsDisplay from "./DogsDisplay";
import DogDetails from "./DogDetails";
import DogCreate from "./DogCreate";
import DogUpdate from "./DogUpdate";

const Dogs = () => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/dogs"
          render={props => <DogsDisplay {...props} />}
        />
        <Route
          exact
          path="/dogs/create"
          render={props => <DogCreate {...props} />}
        />
        <Route
          exact
          path="/dogs/:id"
          render={props => <DogDetails {...props} />}
        />
        <Route
          exact
          path="/dogs/update/:id"
          render={props => <DogUpdate {...props} />}
        />
      </Switch>
    </div>
  );
};

export default Dogs;
