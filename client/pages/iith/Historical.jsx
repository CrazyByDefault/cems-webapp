import React, { Component } from "react";
// import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";

import {
  Container,
  Typography
} from "@material-ui/core";

import NavBar from "./NavBar.jsx";

class Historical extends Component {
  render() {
    return (
      <Container>
        <NavBar/>
        <Grid>
          <Grid item xs={12}>
            <Container style={{ paddingTop: "10vh", paddingBottom: "8vh" }} >
              <Typography variant="h2" align="center" gutterBottom>
                Historical Data
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Image
                src="/img/iithaprmay.png"
                aspectRatio={(16 / 9)}
                style={{ margin: "10vh" }}
              />
              <br/>
              <Image
                src="/img/iith-apr-loadcurve.png"
                aspectRatio={(16 / 9)}
                style={{ margin: "10vh" }}
              />
            </Container>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Historical;
