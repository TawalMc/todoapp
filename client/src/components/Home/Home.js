import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

// styles
import useStyles from "./style"

function Home(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <div className={classes.welcomeContainer}>
        <Typography className={classes.welcomeText}>
          Welcome to TodoApp
        </Typography>
      </div>
      <div className={classes.divider}></div>
      {props.child()}

      <div className={classes.userStatusContainer}>
        <Typography className={classes.statusText}>{props.toText}</Typography>
        <Button className={classes.linkButton} href={`/${props.to}`} >{props.toTitle}</Button>
      </div>

    </Grid>
  );
}

export default Home;
