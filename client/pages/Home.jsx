import React, { Component } from "react";

import {
  Typography,
  Container
} from "@material-ui/core";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Campus Energy Management System (CEMS)
        </Typography>
      </Container>
    );
  }
}

export default Home;
