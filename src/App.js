import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Cats from "./components/cats/Cats";
import Dogs from "./components/dogs/Dogs";
import MainScreen from "./components/MainScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <MainScreen />} />
          <Route path="/cats" render={props => <Cats {...props} />} />
          <Route path="/dogs" render={props => <Dogs {...props} />} />
          <Route path="/404" render={() => <div>not found</div>} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
