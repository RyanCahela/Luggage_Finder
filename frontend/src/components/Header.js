import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Grid container direction="row">
          <Grid item>
            <h1>Header</h1>
          </Grid>
          <Grid item>
            <Link color="inherit" component={RouterLink} to="/gallery">
              Gallery
            </Link>
          </Grid>
          <Grid item>
            <Link color="inherit" component={RouterLink} to="/add">
              Add Luggage
            </Link>
          </Grid>
        </Grid>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  );
}

export default Header;
