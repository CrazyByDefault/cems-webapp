import React from "react";

class IITHHeader extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <img src="/img/iith.png" width="70%" />
          </div>
          <div className="col-sm-10" align="left">
            <p
              style={{
                paddingTop: "10px"
              }}
            ></p>
            <h2> Campus Energy Monitoring System </h2>
            <p
              style={{
                paddingTop: "10px"
              }}
            >
              Indian Institute of Technology Hyderabad (IITH)
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default IITHHeader;
