import React, { Component } from "react";
// import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";

import {
  Container,
  Typography
} from "@material-ui/core";

import NavBar from "./NavBar.jsx";

class CaseStudies extends Component {
  render() {
    return (
      <Container>
        <NavBar/>
        <Grid>
          <Grid item xs={12}>
            <Container style={{ paddingTop: "10vh", paddingBottom: "8vh" }} >
              <Typography variant="h2" align="center" gutterBottom>
                Case Studies
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Container>
                <Image
                  src="/img/casestudy/pv.png"
                  aspectRatio={(16 / 9)}
                  style={{ margin: "10vh" }}
                />
                <Image
                  src="/img/casestudy/bh.png"
                  aspectRatio={(16 / 9)}
                  style={{ margin: "10vh" }}
                />
                <Image
                  src="/img/casestudy/gh.png"
                  aspectRatio={(16 / 9)}
                  style={{ margin: "10vh" }}
                />
                <Image
                  src="/img/casestudy/fh.png"
                  aspectRatio={(16 / 9)}
                  style={{ margin: "10vh" }}
                />
              </Container>
            </Container>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default CaseStudies;
