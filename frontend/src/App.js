import React, from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Gallery from "./pages/Gallery";
import AddLuggage from "./pages/AddLuggage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/gallery" />
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
