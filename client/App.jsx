import React, { Component } from "react";
import {
  Route, BrowserRouter as Router, Switch
} from "react-router-dom";
import "antd/dist/antd.min.css";
import PrivateRoute from "./helpers/PrivateRoutes.jsx";
import Page from "./components/site/Page.jsx";
import Graph from "./pages/Graph.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home";
import IITHRealtime from "./pages/IITHRealtime";
import Calendar from "./pages/Calendar.jsx";

class App extends Component {
  render() {
    console.log("App.jsx");
    return (
      <Page>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/iith/realtime" component={IITHRealtime} />
            <Route exact path="/iith/graph" component={Graph} />
            <PrivateRoute exact path="/calendar" component={Calendar} />
          </Switch>
        </Router>
      </Page>
    );
  }
}

export default App;
