import React from "react";

import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Toolbar
} from "@material-ui/core";


class NavDrawer extends React.Component {
  constructor(props, context) {
    super(props, context);
    const cookie = document.cookie
      .split(";")
      .reduce((res, c) => {
        const [key, val] = c.trim().split("=").map(decodeURIComponent);
        const allNumbers = (str) => /^\d+$/.test(str);
        try {
          return Object.assign(res, { [key]: allNumbers(val) ? val : JSON.parse(val) });
        } catch (e) {
          return Object.assign(res, { [key]: val });
        }
      }, {});
    this.state = {
      logged: cookie.UAT,
      anchorEl: null,
    };

    this.logout = this.logout.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  logout = function () {
    console.log("LOGGING OUT");
    document.cookie = "CAT=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = "UAT=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    window.location.replace(`${window.location.origin}`);
  };

  handleMenu = (event) => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  toggleDrawer = () => {
    this.props.closeDrawer();
  };

  _setRedirect(path) {
    window.location.replace(`${window.location.origin}/${path}`);
  }

  render() {
    // const [auth, setAuth] = React.useState(true);
    // const handleChange = (event) => {
    //   setAuth(event.target.checked);
    // };
    return (
      <div>
        <SwipeableDrawer
          anchor="left"
          open={this.props.open}
          style={{ zIndex: 0 }}
          onClose={this.props.closeDrawer}
          onOpen={this.props.closeDrawer}
        >
          <Toolbar/>
          <div
            style={{ width: 240 }}
            onClick={this.props.closeDrawer}
            onKeyDown={this.props.closeDrawer}
          >
            <List>
              <ListItem>
                <ListItemText primary="Home" onClick={() => { this._setRedirect(""); }} />
              </ListItem>
            </List>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}


export default NavDrawer;
