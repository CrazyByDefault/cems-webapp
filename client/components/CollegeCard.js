import React from "react";

class CollegeCard extends React.Component {
  render() {
    return (
      <div
        className="w3-quarter"
        style={{
          paddingTop: "20px"
        }}
      >
        <a href="http://cems.iith.ac.in/iith/iithoverview.html">
          {" "}
          <img src="iith.png" width="30%" />{" "}
        </a>
        <div
          className="w3-card  w3-hover-shadow"
          style={{
            paddingTop: "10px"
          }}
        >
          <header className="w3-container w3-metro-dark-red">
            <h4>Indian Institute of Technolgy Hyderabad</h4>
          </header>
          <div className="w3-container w3-metro-orange">
            <p>
              <a href="http://cems.iith.ac.in/iith/iithoverview.html">
                <i
                  className="fa fa-1x fa-globe"
                  aria-hidden="true"
                  style={{
                    paddingTop: "8px"
                  }}
                />{" "}
                Overview
              </a>
            </p>
            <p>
              <a href="http://cems.iith.ac.in/iith/iithmicrogrid.html">
                <i className="fa fa-plug" aria-hidden="true" /> Mircrogrid
              </a>
            </p>
            <p>
              <a href="http://cems.iith.ac.in/iith/iithkeyinfo.html">
                <i className="fa fa-key" aria-hidden="true" /> Key Info
              </a>
            </p>
            <p>
              <a href="http://cems.iith.ac.in/iith/realtime">
                <i className="fa fa-clock-o" aria-hidden="true" /> Realtime data
              </a>
            </p>
            <p>
              <a href="http://cems.iith.ac.in/iith/iithhistory.html">
                <i className="fa fa-database" aria-hidden="true" /> Historical
                data
              </a>
            </p>
            <p>
              <a href="http://cems.iith.ac.in/iith/iithcasestudies.html">
                <i className="fa fa-lightbulb-o" aria-hidden="true" /> Case
                Studies
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CollegeCard;
