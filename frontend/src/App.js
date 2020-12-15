import React, { useState, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddLuggage from "./pages/AddLuggage";
import SignedIn from "./pages/SignedIn";
import Auth from "./pages/Auth";
import Grid from "@material-ui/core/Grid";

function addLuggageToDataStore(newLuggage = {}) {
  console.log(newLuggage);
}

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Grid item>
            <Auth />
          </Grid>
        </Route>
        <Route path="/gallery">
          <Grid item xs={12}>
            <Gallery />
          </Grid>
        </Route>
        <Route path="/add">
          <Grid item xs={12}>
            <AddLuggage addLuggageToDataStore={addLuggageToDataStore} />
          </Grid>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
