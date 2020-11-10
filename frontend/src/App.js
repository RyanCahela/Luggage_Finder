import React from "react";
import { Route, Switch } from "react-router-dom";
import Gallery from "./pages/Gallery";
import AddLuggage from "./pages/AddLuggage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Gallery />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/add">
          <AddLuggage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
