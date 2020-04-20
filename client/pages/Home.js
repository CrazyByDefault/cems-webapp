import React, { Component } from "react";
import CollegeCard from "../components/CollegeCard";

class Home extends Component {
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
                name="IITH"
                urlPrefix="iith"
                headerBgColor="w3-metro-dark-red"
                bgColor="w3-metro-orange"
                style={{
                  paddingTop: "10px"
                }}
              />
              <CollegeCard
                name="VVIT"
                urlPrefix="vvit"
                headerBgColor="w3-flat-pomegranate"
                bgColor="w3-flat-carrot"
                style={{
                  paddingTop: "20px"
                }}
              />
              <CollegeCard
                name="OUCE"
                urlPrefix="ouce"
                headerBgColor="w3-win8-olive"
                bgColor="w3-win8-steel"
              />
              <CollegeCard
                name="GNITS Campus"
                urlPrefix="gnits"
                headerBgColor="w3-metro-dark-blue"
                bgColor="w3-flat-peter-river"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="w3-container" align="center">
            <div className="w3-row-padding w3-section">
              <CollegeCard
                name="PVPSIT"
                urlPrefix="pvpsit"
                headerBgColor="w3-win8-brown"
                bgColor="w3-win8-taupe"
              />
              <CollegeCard
                name="Your Campus"
                urlPrefix="your"
                headerBgColor="w3-win8-olive"
                bgColor="w3-win8-steel"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
