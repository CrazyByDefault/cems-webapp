import React, { Component } from "react";
import {
  Route, BrowserRouter as Router, Switch
} from "react-router-dom";
import "antd/dist/antd.min.css";
import PrivateRoute from "./helpers/PrivateRoutes.jsx";
import Page from "./components/site/Page.jsx";
import Graph from "./pages/Graph.jsx";

class App extends Component {
  render() {
    console.log("App.jsx");
    return (
      <Page>
        <Router>
          <Switch>
            <Route exact path="/" component={Graph} />
            <PrivateRoute exact path="/privateGraphs" component={Graph} />
          </Switch>
        </Router>
      </Page>
    );
  }
}

export default App;
