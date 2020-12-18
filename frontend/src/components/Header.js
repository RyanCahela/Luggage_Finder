import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  //stops AppBar from rendering over sibling elements
  offset: theme.mixins.toolbar,
}));

function Header({ dialogFunctions }) {
  const { setDialogBackground, setIsShowDialog } = dialogFunctions;
  const location = useLocation();
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <h1>Header</h1>
          </Grid>
          <Grid item className="">
            <Link color="inherit" component={RouterLink} to="/gallery">
              Gallery
            </Link>
          </Grid>
          <Grid item>
            <Link color="inherit" component={RouterLink} to="/add">
              Add Luggage
            </Link>
          </Grid>
          <Grid item>
            <Link
              color="inherit"
              component={RouterLink}
              to={"/dialog/signup"}
              onClick={() => {
                setDialogBackground(location);
                setIsShowDialog(true);
              }}>
              Sign Up
            </Link>
          </Grid>
        </Grid>
      </AppBar>

      {/* stops AppBar (position: fixed) from rendering on top of sibling elements */}
      <div className={classes.offset}></div>
    </>
  );
}

export default Header;
