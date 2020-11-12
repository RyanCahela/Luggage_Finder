import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Gallery from "./pages/Gallery";
import AddLuggage from "./pages/AddLuggage";
import DataStore from "./DataStore.js";

function addLuggageToDataStore(newLuggage = {}) {
  console.log(newLuggage);
  DataStore.add(newLuggage);
}

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/gallery" />
        </Route>
        <Route path="/gallery">
          <Gallery dataStore={DataStore} />
        </Route>
        <Route path="/add">
          <AddLuggage addLuggageToDataStore={addLuggageToDataStore} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
