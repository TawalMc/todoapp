import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    container: {
        width: "95%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    titleContaier: {
        borderTop: "2px solid #FFCEA2",
        marginBottom: theme.spacing(4),
    },
    pageTitle: {
        fontFamily: ["Old English Text MT", "Harlow Solid Italic", "Algerian"],
        fontSize: 25,
        color: "#FFCEA2",
    }
}));