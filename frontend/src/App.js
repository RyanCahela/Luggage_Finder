import React, { useState, useContext } from "react";
import {
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import Gallery from "./components/pages/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddLuggage from "./components/pages/AddLuggage";
import Signup from "./components/modals/Signup";
import Home from "./components/pages/Home";
import Grid from "@material-ui/core/Grid";

function App() {
  const history = useHistory();
  const location = useLocation();

  //to display previous page behind popup dialogs
  const [dialogBackground, setDialogBackground] = useState(location);
  const [isShowDialog, setIsShowDialog] = useState(false);

  console.log("App.js location", location);
  console.log("isShowDialog", isShowDialog);

  return (
    <>
      <Header dialogFunctions={{ setDialogBackground, setIsShowDialog }} />
      <Switch location={isShowDialog ? dialogBackground : location}>
        <Route exact path="/">
          <Grid item>
            <Home />
          </Grid>
        </Route>
        <Route path="/gallery">
          <Grid item xs={12}>
            <Gallery />
          </Grid>
        </Route>
        <Route path="/add">
          <Grid item xs={12}>
            <AddLuggage />
          </Grid>
        </Route>
        <Route path="/dialog">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
      <Signup
        dialogValues={{ isShowDialog, dialogBackground }}
        dialogFunctions={{ setIsShowDialog }}
      />
      <Footer />
    </>
  );
}

export default App;
