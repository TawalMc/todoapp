import React from "react";
import { Link } from "react-router-dom";
import Home from "../../components/Home/Home";
import CustomInput from "../../components/InputFields/SimpleTextField";

import Grid from "@material-ui/core/Grid";

// styles
import useStyles from "./style";
import { Button, Typography } from "@material-ui/core";
import SignButton from "../../components/Button/SignButton";

function Component() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <div className={classes.titleContaier}>
        <Typography className={classes.pageTitle}>Sign Up</Typography>
      </div>
      <CustomInput targetid="mail-input" label="E-mail" type="mail" />
      <CustomInput targetid="pswd-input" label="Password" type="pswd" />
      <CustomInput targetid="pswd-confirm-input" label="Password" type="pswd" />
      <SignButton text="Sign Up" />
    </Grid>
  );
}

function SignUp() {
  return (
    <Home
      toText="Already member?"
      toTitle="Sign In"
      to="signin"
      child={() => <Component />}
    />
  );
}

export default SignUp;
