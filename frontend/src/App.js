import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddLuggage from "./pages/AddLuggage";
import SignedIn from "./pages/SignedIn";
import DataStore from "./DataStore.js";
import Auth from "./pages/Auth";

function addLuggageToDataStore(newLuggage = {}) {
  console.log(newLuggage);
  DataStore.add(newLuggage);
}

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Auth />
        </Route>
        <Route path="/signedIn">
          <SignedIn />
        </Route>
        <Route path="/gallery">
          <Gallery dataStore={DataStore} />
        </Route>
        <Route path="/add">
          <AddLuggage addLuggageToDataStore={addLuggageToDataStore} />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
