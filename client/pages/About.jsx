import React, { Component } from "react";
// import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import {
  Container,
  Typography
} from "@material-ui/core";

import JoinFab from "../components/JoinFab.jsx";

class About extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Container style={{ paddingTop: "10vh", paddingBottom: "8vh" }} >
            <Typography variant="h2" align="center" gutterBottom>
              About
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container>
            <Typography variant="body1" gutterBottom>
              The campus energy monitoring system (CEMS) group is a research collaboration initiated in 2019, to address key challenges in the area of energy monitoring, control, management and optimization.

              The core idea is initiated by the power group at IIT Hyderabad via an indigenously developed solution for campus energy monitoring. Since then the solution has been shared, developed and enhanced through active collaboration among several campuses in India
            </Typography>
            <Typography gutterBottom>
              As of May 2020. researchers from the following institutes are members of CEMS group. <br/><br/>

              IIT Hyderabad <br/>
              VVIT <br/>
              OUCE <br/>
              GNITS <br/>
              PVPSIT <br/>
              BVRIT Hyderabad <br/>
              SVCE <br/>
              RVRJC <br/>
              BVRIT Narsapur <br/>
              ---
            </Typography>
          </Container>
        </Grid>
        <JoinFab />
      </Grid>
    );
  }
}

export default About;
