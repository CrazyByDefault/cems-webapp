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
                src="/img/iithoverview-image.jpg"
                aspectRatio={(16 / 9)}
              />
              <Typography gutterBottom>
                IIT Hyderabad is one among the 2nd generation of IITs started by the Govt. of India.
                Today IITH offers 9 B.Tech programs, 16 M.Tech programs, 3 M.Sc programs, 5 M.Phil programs, 1 M.Des program and Ph.D. programs in all branches of engineering, science, liberal arts and design.
                The very foundation of IIT Hyderabad is based on research and innovation. The vibrant research culture is evident from the number of patents and publications that IITH has. At IITH students are given with a plethora of choices, which they diligently choose with the help of a faculty advisor. Courses that last for a semester are almost a foregone story at IITH. From 14-15 academic year onwards all B.Tech programs started offering courses that are of smaller credits; called the fractal academics; very carefully designed to keep the enthusiasm of the students and to keep them in pace with the state of the art from 1st semester till 8th semester.
                IITH in the past couple of years has been highly successful in building tie-ups with leading academic institutions around the globe. IITH enjoys a very special relationship with Japanese Universities and Industries that goes beyond academic and research collaborations. In fact, some of the iconic buildings in IITH campus will carry the signature of Japanese architecture. IITH is creating a unique holistic educational ecosystem that offers interactive learning, a highly, flexible academic structure, cutting-edge research, strong industry collaboration, and entrepreneurship. It is providing an environment wherein students and faculty are not afraid to translate their dreams into realities.
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default About;
