import React from "react";
import { Link } from "react-router-dom";
import Home from "../../components/Home/Home";
import CustomInput from "../../components/InputFields/SimpleTextField";

import Grid from "@material-ui/core/Grid";

// styles
import useStyles from "./style";
import { Button, Typography } from "@material-ui/core";
import SignButton from "../../components/Button/SignButton";

// context
export const SubmitButtonContext = React.createContext();
export const HandleInputChange = React.createContext();

function Component(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <div className={classes.titleContaier}>
        <Typography className={classes.pageTitle}>Sign Up</Typography>
      </div>
      <CustomInput targetId="mail-input" label="E-mail" type="mail" />
      <CustomInput targetId="pswd-input" label="Password" type="pswd" />
      <CustomInput targetId="pswd-confirm-input" label="Password" type="pswd" />
      <SignButton text="Sign Up" />
    </Grid>
  );
}

let num = 0;

function SignUp() {
  const submitClick = () => {
    console.log(`num: ${num++}`);
  };

  const handleInputChange = (e, inputType) => {
    console.log(`Event: ${e.target.value}; Type: ${inputType}`);
  };

  return (
    <SubmitButtonContext.Provider value={submitClick}>
      <HandleInputChange.Provider value={handleInputChange}>
        <Home
          toText="Already member?"
          toTitle="Sign In"
          to="signin"
          child={() => <Component />}
        />
      </HandleInputChange.Provider>
    </SubmitButtonContext.Provider>
  );
}

export default SignUp;
