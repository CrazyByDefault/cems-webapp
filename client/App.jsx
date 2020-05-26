import React, { Component } from "react";
import "typeface-roboto";
import {
  Route, BrowserRouter as Router, Switch
} from "react-router-dom";
// import PrivateRoute from "./helpers/PrivateRoutes.jsx";
import Page from "./components/site/Page.jsx";
// import Graph from "./pages/Graph.jsx";
// import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import IITHBlockARealTime from "./pages/IITHBlockARealTime.jsx";
import About from "./pages/About.jsx";

class App extends Component {
  render() {
    console.log("App.jsx");
    return (
      <Page>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/iith/realtime/Block_A" component={IITHBlockARealTime} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
      </Page>
    );
  }
}

export default App;
