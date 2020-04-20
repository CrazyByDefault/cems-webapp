import React, { Component } from "react";
import {
  Route, BrowserRouter as Router, Switch
} from "react-router-dom";
import "antd/dist/antd.min.css";
import PrivateRoute from "./helpers/PrivateRoutes.jsx";
import Page from "./components/site/Page.jsx";
// import Graph from "./pages/Graph.jsx";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar.jsx";

class App extends Component {
  render() {
    console.log("App.jsx");
    return (
      <Page>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/calendar" component={Calendar} />
          </Switch>
        </Router>
      </Page>
    );
  }
}

export default App;
