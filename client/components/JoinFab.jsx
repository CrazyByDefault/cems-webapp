import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

class JoinFab extends Component {
  render() {
    return (
      <Fab
        variant="extended"
        style={{
          marginRight: "1vh",
          position: "absolute",
          bottom: "5vh",
          right: "2vh"
        }}
      >
        <AddIcon style={{ margin: "0.7vh" }} />
        Join CEMS
      </Fab>
    );
  }
}

export default JoinFab;
