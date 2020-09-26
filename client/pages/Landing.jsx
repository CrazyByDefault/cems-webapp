import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import ReactGoogleSlides from "react-google-slides";

import {
  Typography,
  Container,
  Grid,
  // Paper
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

const SlideShow = () => {
  const iFrameWidth = window.innerWidth > 640 ? 640 : window.innerWidth * 0.7;
  return (
    <ReactGoogleSlides
      width={iFrameWidth}
      height={iFrameWidth * 0.75}
      style={{ maxWidth: "80vw" }}
      slidesLink="https://docs.google.com/presentation/d/18O1IeoFpXJwQo3e42ZvAniBb3PSF75UnKakm6BywP84"
      slideDuration={5}
      showControls
      loop
    />
  );
};


class Landing extends Component {
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
                Campus Energy Monitoring System
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" align="center" gutterBottom>
                Welcome to the Research Collaboration Portal for Energy Monitoring, Control, Management and Optimization.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <SlideShow />
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

export default withStyles(styles)(Landing);
