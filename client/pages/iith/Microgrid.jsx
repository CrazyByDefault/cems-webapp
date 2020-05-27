import React, { Component } from "react";
// import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";

import {
  Container,
  Typography
} from "@material-ui/core";

class About extends Component {
  render() {
    return (
      <Grid container>
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
    );
  }
}

export default About;
