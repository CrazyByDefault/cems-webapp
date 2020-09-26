import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";

import {
  Typography,
  Container,
  Grid,
  Paper
} from "@material-ui/core";

import JoinFab from "../components/JoinFab.jsx";

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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    // this.redirect = this.redirect.bind(this);
  }

  componentDidMount() {
  }

  redirect(url) {
    this.setState({ redirect: url });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h2" align="center" gutterBottom>
                Campus Energy Monitoring System (CEMS)
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "orange", paddingTop: "4vh", paddingBottom: "4vh" }}
                onClick={() => { this.redirect("iith"); }}
              >
                <Typography variant="h4">
                  IITH
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#03a9f4", paddingTop: "4vh", paddingBottom: "4vh" }}
                onClick={() => { this.redirect("vvit"); }}
              >
                <Typography variant="h4">
                  VVIT
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#4db6ac", paddingTop: "4vh", paddingBottom: "4vh" }}
                onClick={() => { this.redirect("ouce"); }}
              >
                <Typography variant="h4">
                  OUCE
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#d4e157", paddingTop: "4vh", paddingBottom: "4vh" }}
                onClick={() => { this.redirect("gnits"); }}
              >
                <Typography variant="h4">
                  GNITS
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#4caf50", paddingTop: "4vh", paddingBottom: "4vh" }}
                onClick={() => { this.redirect("pvpsit"); }}
              >
                <Typography variant="h4">
                  PVPSIT
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#4fc3f7", paddingTop: "4vh", paddingBottom: "4vh" }}
                onClick={() => { this.redirect("rvrjc"); }}
              >
                <Typography variant="h4">
                  RVRJC
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#795548", paddingTop: "4vh", paddingBottom: "4vh" }}
                onClick={() => { this.redirect("bvrit-hyd"); }}
              >
                <Typography variant="h4">
                  BVRIT Hyd
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#01579b", paddingTop: "4vh", paddingBottom: "4vh" }}
                onClick={() => { this.redirect("svce"); }}
              >
                <Typography variant="h4">
                  SVCE
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#9fa8da", paddingTop: "4vh", paddingBottom: "4vh" }}
                onClick={() => { this.redirect("bvrit-narsapur"); }}
              >
                <Typography variant="h4">
                  BVRIT Narsapur
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <JoinFab />
        {
          this.state.redirect ? <Redirect to={this.state.redirect} /> : null
        }
      </div>
    );
  }
}

export default withStyles(styles)(Home);
