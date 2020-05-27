import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";

import {
  Typography,
  Container,
  Grid,
  Paper
} from "@material-ui/core";

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

class CollegeHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      college: this.props.match.params.college
    };
  }

  redirect(url) {
    this.setState({ redirect: url });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Typography variant="h2" align="center" gutterBottom>
                {`${this.state.college.toUpperCase()} Home Page`}
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "orange", paddingTop: "4vh", paddingBottom: "4vh" }}
                onClick={() => { this.redirect(`${this.state.college}/about`); }}
              >
                <Typography variant="h4">
                  About <br/>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#03a9f4", paddingTop: "4vh", paddingBottom: "4vh" }}
                onClick={() => { this.redirect(`${this.state.college}/microgrid`); }}
              >
                <Typography variant="h4">
                  Campus Microgrid
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#4db6ac", paddingTop: "4vh", paddingBottom: "4vh" }}
                onClick={() => { this.redirect(`${this.state.college}/student`); }}
              >
                <Typography variant="h4">
                  Student Projects
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#d4e157", paddingTop: "4vh", paddingBottom: "4vh" }}
                onClick={() => { this.redirect(`${this.state.college}/casestudies`); }}
              >
                <Typography variant="h4">
                  Case Studies
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#4caf50", paddingTop: "4vh", paddingBottom: "4vh" }}
              >
                <Typography variant="h4">
                  RealTime Data
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper
                className={classes.paper}
                style={{ background: "#4fc3f7", paddingTop: "4vh", paddingBottom: "4vh" }}
                onClick={() => { this.redirect(`${this.state.college}/historical`); }}
              >
                <Typography variant="h4">
                  Historical Data
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        {
          this.state.redirect ? <Redirect to={this.state.redirect} /> : null
        }
      </div>
    );
  }
}

export default withStyles(styles)(CollegeHome);
