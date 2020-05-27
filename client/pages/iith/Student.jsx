import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid
} from "@material-ui/core";

import StudentCard from "../../components/StudentCard.jsx";

import NavBar from "./NavBar.jsx";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  }
});

class Student extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Container>
          <NavBar/>
          <Grid spacing={6}>
            <Container>
              <Grid item xs={12}>
                <Container style={{ paddingTop: "10vh", paddingBottom: "8vh" }} >
                  <Typography variant="h2" align="center" gutterBottom>
                    Student Contributions
                  </Typography>
                </Container>
              </Grid>
              <Grid item xs={6} md={3}>
                <StudentCard
                  name="Shashank Varanasi"
                  branch="ES"
                  doclink="example.com"
                  contact="+91 8179303345"
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <StudentCard
                  name="Bhanu Prakash"
                  branch="ES"
                  doclink="example.com"
                  contact="+91 8179303345"
                />
              </Grid>
            </Container>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Student);
