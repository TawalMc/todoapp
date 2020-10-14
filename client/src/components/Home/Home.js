import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// styles
const useStyles = makeStyles(theme => ({
    container: {
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(66,92,90,0.8)",
        paddingTop: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
    },
    welcomeContainer: {
        borderBottom: "2px solid #FFCEA2",
    },
    welcomeText: {
        fontFamily: ["Old English Text MT", "Harlow Solid Italic", "Algerian"],
        fontSize: 25,
        color: "#FFCEA2",
        fontWeight: "bold",
    },
    divider: {
        height: 100,
        width: "2px",
        backgroundColor: "#FFCEA2"
    }
}));

const Home = (props) => {
    const classes = useStyles(); 

    return (
        <Grid container className={classes.container}>
            <div className={classes.welcomeContainer}>
                <Typography className={classes.welcomeText} >Welcome to TodoApp</Typography>
            </div>
            <div className={classes.divider} >
            </div>
            {props.child()}
        </Grid>
    );
}

export default Home;