import React, { Component } from "react";
import CollegeCard from "./components/CollegeCard.jsx";

export class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron" align="center">
            <h2> Multi - Campus Energy Monitoring System </h2>
          </div>
        </div>

        <div className="row">
          <div className="w3-container" align="center">
            <div className="w3-row-padding w3-section">
            <CollegeCard
              name="Indian Institute of Technolgy Hyderabad"
              urlPrefix="iith"
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
