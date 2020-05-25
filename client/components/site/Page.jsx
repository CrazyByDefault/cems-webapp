import React from "react";
import PropTypes from "prop-types";

import {
  CssBaseline,
  Toolbar,
  Box
} from "@material-ui/core";

import {
  // makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";

import PageHeader from "./PageHeader.jsx";
import NavDrawer from "./NavDrawer.jsx";

export default class Page extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      theme: {
        palette: {
          primary: {
            main: "#ed7d31"
          },
          type: "light",
        },
        typography: {
          fontFamily: "Roboto"
        }
      },
      isDrawerOpen: false
    };
    this._handleToggleTheme = this._handleToggleTheme.bind(this);
    this._handleToggleNavDrawer = this._handleToggleNavDrawer.bind(this);
  }

  _handleToggleTheme() {
    const { theme } = this.state;
    // (theme.palette.type === "light")
    if (theme.palette.type === "light") {
      this.setState({
        theme: { ...theme, palette: { ...theme.palette, type: "dark" } }
      });
    } else {
      this.setState({
        theme: { ...theme, palette: { ...theme.palette, type: "light" } }
      });
    }
  }

  _handleToggleNavDrawer() {
    const { isDrawerOpen } = this.state;
    // (theme.palette.type === "light")
    if (isDrawerOpen) {
      this.setState({
        isDrawerOpen: false
      });
    } else {
      this.setState({
        isDrawerOpen: true
      });
    }
  }

  render() {
    console.log("Page.jsx");

    let muiTheme = createMuiTheme(this.state.theme);
    muiTheme = responsiveFontSizes(muiTheme);
    console.log(muiTheme);

    return (
      <ThemeProvider theme={muiTheme}>
        <CssBaseline/>
        <PageHeader toggleDarkMode={this._handleToggleTheme} toggleNavDrawer={this._handleToggleNavDrawer}/>
        <Toolbar/>
        <NavDrawer open={this.state.isDrawerOpen} closeDrawer={this._handleToggleNavDrawer}/>
        <Box m={2}>
          {this.props.children}
        </Box>
      </ThemeProvider>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node,
};
