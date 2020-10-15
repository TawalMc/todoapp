import React from "react";
import { Link } from "react-router-dom";
import Home from "../../components/Home/Home";
import CustomInput from "../../components/InputFields/SimpleTextField";

import Grid from "@material-ui/core/Grid";

// styles
import useStyles from "./style";
import { Typography } from "@material-ui/core";
import SignButton from "../../components/Button/SignButton";

function Component() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <div className={classes.titleContaier}>
        <Typography className={classes.pageTitle}>Sign In</Typography>
      </div>
      <CustomInput targetid="mail-input" label="E-mail" type="mail" />
      <CustomInput targetid="pswd-input" label="Password" type="pswd" />

      <SignButton text="Sign In" />
    </Grid>
  );
}

function SignIn() {
  return (
    <Home
      toText="Not member?"
      toTitle="Sign Up"
      to=""
      child={() => <Component />}
    />
  );
}

export default SignIn;
