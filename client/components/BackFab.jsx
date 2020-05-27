import React, { Component } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Fab from "@material-ui/core/Fab";

class BackFab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this._goback = this._goback.bind(this);
  }

  _goback() {
    this.props.history.goBack();
  }

  render() {
    return (
      <Fab
        variant="extended"
        style={{
          margin: 0,
          top: "auto",
          left: 20,
          bottom: 20,
          right: "auto",
          position: "fixed",
        }}
        onClick={this._goback}
      >
        <ArrowBackIcon style={{ margin: "0.7vh" }} />
      </Fab>
    );
  }
}

export default BackFab;
