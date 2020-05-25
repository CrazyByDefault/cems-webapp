import React from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Hidden
} from "@material-ui/core";

import {
  Menu as MenuIcon,
  AccountCircle,
  Brightness4 as Brightness4Icon
} from "@material-ui/icons";

class PageHeader extends React.Component {
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
      anchorEl: null
    };

    this.logout = this.logout.bind(this);
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

  render() {
    // const [auth, setAuth] = React.useState(true);
    // const handleChange = (event) => {
    //   setAuth(event.target.checked);
    // };
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.props.toggleMenu}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" align="center" style={{ flexGrow: 1 }}>
            <Hidden smDown>
              Campus Energy Management System (CEMS)
            </Hidden>
            <Hidden mdUp>
              CEMS
            </Hidden>
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={this.state.anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.props.toggleDarkMode}>
                <ListItemIcon>
                  <Brightness4Icon fontSize="Medium" />
                </ListItemIcon>
                <ListItemText primary="Toggle DarkTheme" />
              </MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}


export default PageHeader;
