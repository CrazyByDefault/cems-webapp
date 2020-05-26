import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import {
  Typography,
  Container
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
  }

  componentDidMount() {
  }


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h4" align="center" gutterBottom>
                  Campus Energy Management System (CEMS)
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "orange", paddingTop: "4vh", paddingBottom: "4vh" }}
              >
                <Typography variant="h5">
                  IITH
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#03a9f4", paddingTop: "4vh", paddingBottom: "4vh" }}
              >
                <Typography variant="h5">
                  VVIT
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#4db6ac", paddingTop: "4vh", paddingBottom: "4vh" }}
              >
                <Typography variant="h5">
                  OUCE
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#d4e157", paddingTop: "4vh", paddingBottom: "4vh" }}
              >
                <Typography variant="h5">
                  GNITS
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#4caf50", paddingTop: "4vh", paddingBottom: "4vh" }}
              >
                <Typography variant="h5">
                  PVPSIT
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#4fc3f7", paddingTop: "4vh", paddingBottom: "4vh" }}
              >
                <Typography variant="h5">
                  RVRJC
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#795548", paddingTop: "4vh", paddingBottom: "4vh" }}
              >
                <Typography variant="h5">
                  BVRIT Hyderabad
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#01579b", paddingTop: "4vh", paddingBottom: "4vh" }}
                p={4}
              >
                <Typography variant="h5">
                  SVCE
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#9fa8da", paddingTop: "4vh", paddingBottom: "4vh" }}
              >
                <Typography variant="h5">
                  BVRIT Narsapur
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <JoinFab />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
