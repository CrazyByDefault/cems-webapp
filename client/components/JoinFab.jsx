import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

class JoinFab extends Component {
  render() {
    return (
      <Fab
        variant="extended"
        style={{
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed",
        }}
      >
        <AddIcon style={{ margin: "0.7vh" }} />
        Join CEMS
      </Fab>
    );
  }
}

export default JoinFab;
