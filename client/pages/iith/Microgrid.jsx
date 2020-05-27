import React, { Component } from "react";
// import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";

import {
  Container,
  Typography
} from "@material-ui/core";

import NavBar from "./NavBar.jsx";

class About extends Component {
  render() {
    return (
      <Container>
        <NavBar/>
        <Grid>
          <Grid item xs={12}>
            <Container style={{ paddingTop: "10vh", paddingBottom: "8vh" }} >
              <Typography variant="h2" align="center" gutterBottom>
                About IITH
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Image
                src="/img/iith-hv-grid.png"
                aspectRatio={(16 / 9)}
              />
            </Container>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default About;
