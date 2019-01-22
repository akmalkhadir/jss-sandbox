import React from "react";
import withStyles from "react-jss";

// define styles as a constant
//
const styles = {
  myButton: {
    color: "aliceblue",
    background: "#1d304f",
    fontFamily: "Verdana",
    boxSizing: "border-box",
    borderRadius: 5,
    padding: "0.5em 2em",
    border: "0.1em solid #1d304f",
    margin: {
      top: 10
    },
    "&:hover": {
      fontStyle: "italic",
      background: "#FFFFFF",
      color: "#1d304f"
    }
  },
  myLabel: {
    fontSize: "1.5em"
  }
};

const Button = ({ classes, children }) => (
  <button className={classes.myButton}>
    <span className={classes.myLabel}>{children}</span>
  </button>
);

// withStyles Higher Order Component is used to inject styles into the component
export default withStyles(styles)(Button);
