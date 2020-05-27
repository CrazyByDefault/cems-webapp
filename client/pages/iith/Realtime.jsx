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

class Realtime extends Component {
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
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Typography variant="h2" align="center" gutterBottom>
                Realtime Data
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Paper
                className={classes.paper}
                style={{ paddingTop: "15vh", paddingBottom: "15vh" }}
              >
                <Typography variant="h4">
                  IITH Substations
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                className={classes.paper}
                style={{ background: "orange", paddingTop: "12vh", paddingBottom: "12vh" }}
                onClick={() => { this.redirect("realtime/Block_A"); }}
              >
                <Typography variant="h4">
                  Block_A
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                className={classes.paper}
                style={{ background: "orange", paddingTop: "12vh", paddingBottom: "12vh" }}
                onClick={() => { this.redirect("realtime/Block_B"); }}
              >
                <Typography variant="h4">
                  Block_B
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

export default withStyles(styles)(Realtime);
