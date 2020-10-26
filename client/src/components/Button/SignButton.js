import React, { useContext } from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { SubmitButtonContext } from '../../pages/signup/signup';

const ConnectButton = withStyles((theme) => ({
  root: {
    color: "rgb(66,92,90)",
    backgroundColor: "#FFCEA2",
    height: 50,
    width: 250,
    borderRadius: 15,
    textTransform: "none",
    '&:hover': {
      backgroundColor: "#ffac33",
    },
  },
}))(Button);

export default function SignButton(props) {
  const submit = useContext(SubmitButtonContext)
  
  return (
    <div>
      <ConnectButton variant="contained" onClick={submit}>
        {props.text}
      </ConnectButton>
    </div>
  );
}
