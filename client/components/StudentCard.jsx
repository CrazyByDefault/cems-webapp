import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
});

class StudentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h3" variant="h5">
              {this.props.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {this.props.branch}
            </Typography>
            <br/>
            <Typography variant="body1" color="textPrimary">
              Project Link: {this.props.doclink}
            </Typography>
            <Typography variant="body2" color="textPrimary">
              {this.props.contact}
            </Typography>
          </CardContent>
        </div>
      </Card>
    );
  }
}

export default withStyles(styles)(StudentCard);
