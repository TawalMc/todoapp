import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
