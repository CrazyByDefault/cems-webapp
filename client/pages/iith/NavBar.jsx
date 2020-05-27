import React, { Component } from "react";
// import { withStyles } from "@material-ui/core/styles";

import {
  Tabs,
  Tab,
  AppBar
} from "@material-ui/core";

import {
  Home,
  Power,
  Book,
  Apps,
  EmojiObjects,
  Timelapse,
  Storage
} from "@material-ui/icons";

class About extends Component {
  _setRedirect(path) {
    window.location.replace(`${window.location.origin}${path}`);
  }

  render() {
    return (
      <AppBar position="static" color="default" style={{ width: "parent" }}>
        <Tabs
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Home" icon={<Home />} onClick={() => this._setRedirect("/")} />
          <Tab label="IITH Home" icon={<Apps />} onClick={() => this._setRedirect("/iith")} />
          <Tab label="Microgrid" icon={<Power />} onClick={() => this._setRedirect("/iith/microgrid")} />
          <Tab label="Students" icon={<Book />} onClick={() => this._setRedirect("/iith/student")}/>
          <Tab label="Case Studies" icon={<EmojiObjects />} onClick={() => this._setRedirect("/iith/casestudies")}/>
          <Tab label="Realtime" icon={<Timelapse />} onClick={() => this._setRedirect("/iith/realtime")}/>
          <Tab label="Historical Data" icon={<Storage />} onClick={() => this._setRedirect("/iith/historical")}/>
        </Tabs>
      </AppBar>
    );
  }
}

export default About;
