import React, { Component } from "react";
import "typeface-roboto";
import {
  Route, BrowserRouter as Router, Switch
} from "react-router-dom";
// import PrivateRoute from "./helpers/PrivateRoutes.jsx";
import Page from "./components/site/Page.jsx";
import Graph from "./pages/Graph.jsx";
// import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import IITHBlockARealTime from "./pages/IITHBlockARealTime.jsx";
import About from "./pages/About.jsx";
import IITHAbout from "./pages/iith/About.jsx";
import IITHMicrogrid from "./pages/iith/Microgrid.jsx";
import IITHStudent from "./pages/iith/Student.jsx";
import IITHHistorical from "./pages/iith/Historical.jsx";
import CollegeHome from "./pages/CollegeHome.jsx";

class App extends Component {
  render() {
    console.log("App.jsx");
    return (
      <Page>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/:college" component={CollegeHome} />
            <Route exact path="/iith/about" component={IITHAbout} />
            <Route exact path="/iith/microgrid" component={IITHMicrogrid} />
            <Route exact path="/iith/student" component={IITHStudent} />
            <Route exact path="/iith/historical" component={IITHHistorical} />
            <Route exact path="/iith/realtime/graph/" component={Graph} />
            <Route exact path="/iith/realtime/Block_A" component={IITHBlockARealTime} />
          </Switch>
        </Router>
      </Page>
    );
  }
}

export default App;
