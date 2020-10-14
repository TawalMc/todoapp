import React from "react";

import {
  makeStyles,
  withStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

const theme = createMuiTheme({
  palette: {
    primary: {
       main: "#FFCEA2"
    },
  },
});

const CustomOutlinedInput = withStyles({
  root: {
    "& fieldset": {
      borderColor: "#FFCEA2",
      borderWidth: 1,
    },
    "& .Mui-focused": {
      "& fieldset": {
        borderColor: "#FFCEA2",
      },
    },
  },
  input: {
    color: "#FFCEA2",
    fontSize: 20,
  },
})(OutlinedInput);

const CustomInputLabel = withStyles({
    root: {
        color: "#FFCEA2"
    }
})(InputLabel)



const useStyles = makeStyles({
    root: {    
        marginBottom: theme.spacing(2)
    },
    inputLabel: {
        fontSize: 20
    }
})

const CustomInput = (props) => {
  const classes = useStyles()
  
  function IconToDisplay({type}) {
      if(type == "mail") {
          return <AlternateEmailOutlinedIcon style={{ color: "#FFCEA2" }} />
      }
      else if (type == "pswd") {
          return <LockOutlinedIcon style={{ color: "#FFCEA2" }} />
      }
      else if (type == "data") {
          return <PermIdentityOutlinedIcon style={{ color: "#FFCEA2" }} />
      }
  } 

  return (
    <ThemeProvider theme={theme}>
      <FormControl variant="outlined" color="primary" className={classes.root} >
        <CustomInputLabel htmlFor={props.targetId} className={classes.inputLabel}>{props.label}</CustomInputLabel>
        <CustomOutlinedInput
          id={props.targetId}
          type={props.type === "pswd" ? "password" : "text"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="remember icon role" edge="end">
                <IconToDisplay type={props.type}/>
              </IconButton>
            </InputAdornment>
          }
          labelWidth={props.type === "pswd" ? 100 : 70}
        />
      </FormControl>
    </ThemeProvider>
  );
};

export default CustomInput;