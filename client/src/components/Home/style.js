import { makeStyles } from "@material-ui/core/styles";
import backgroundImg from "../../images/blue_circle.jpg";

export default makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    top: 0,
    left: 0,
  },
  sideImage: {
    height: "100%",
    width: "60%",
    backgroundColor: "rgba(247, 208, 176, 0.5)",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",/* 
    position: "relative" */
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.down("sm")]: {
      visibility: "hidden"
    }
  },
  sideText: {
    color: " #FFCEA2",
    textAlign: "center",
  },
  sideWelcomeText: {
    fontSize: 60,
    fontWeight: "bold",
    fontFamily: ["Old English Text MT", "Harlow Solid Italic", "Algerian"],
  },
  sideWelcomeText_2: {
    fontStyle: "italic",
    fontSize: 15
  },
  signContainer: {
    /* width: "40%", */
    width: "40%",
    height: "100%",
    backgroundColor: "rgba(66,92,90,0.8)",
    paddingTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%"
    }
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
    backgroundColor: "#FFCEA2",
  },
  userStatusContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  statusText: {
    color: "white",
    opacity: 0.7,
    paddingTop: 4
  },
  linkButton: {
    color: "#FFCEA2",
    textTransform: "none",
  }

}));
