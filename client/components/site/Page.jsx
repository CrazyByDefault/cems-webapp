import React from "react";
import PropTypes from "prop-types";

import {
  CssBaseline,
  Box
} from "@material-ui/core";

import { createMuiTheme, ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";
import PageHeader from "./PageHeader.jsx";

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
      }
    };
    this._handleToggleTheme = this._handleToggleTheme.bind(this);
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

  render() {
    console.log("Page.jsx");

    let muiTheme = createMuiTheme(this.state.theme);
    muiTheme = responsiveFontSizes(muiTheme);
    console.log(muiTheme);
    return (
      <ThemeProvider theme={muiTheme}>
        <CssBaseline/>
        <PageHeader toggleDarkMode={this._handleToggleTheme}/>
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
