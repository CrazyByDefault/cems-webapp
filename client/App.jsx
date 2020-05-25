import React, { Component } from "react";
import {
  Route, BrowserRouter as Router, Switch
} from "react-router-dom";
// import PrivateRoute from "./helpers/PrivateRoutes.jsx";
import Page from "./components/site/Page.jsx";
// import Graph from "./pages/Graph.jsx";
// import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";

class App extends Component {
  render() {
    console.log("App.jsx");
    return (
      <Page>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Page>
    );
  }
}

export default App;
