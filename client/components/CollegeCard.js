import React from "react";
import { Redirect } from "react-router-dom";

class CollegeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };

    this.redirToUrl = this.redirToUrl.bind(this);
  }

  redirToUrl = (url) => {
    this.setState({ redirect: true, redirUrl: `${this.props.urlPrefix}/${url}` });
  }

  render() {
    return (
      <div
        className="w3-quarter"
        style={{
          paddingTop: "20px"
        }}
      >
        {
          this.state.redirect ? <Redirect to={this.state.redirUrl} /> : null
        }
        <img src={`/img/${this.props.urlPrefix}.png`} width="30%" onClick={() => this.redirToUrl("overview")} />
        <div
          className="w3-card  w3-hover-shadow"
          style={{
            paddingTop: "10px"
          }}
        >
          <header className={`w3-container ${this.props.headerBgColor}`}>
            <h4>{ this.props.name }</h4>
          </header>

          <div className={`w3-container ${this.props.bgColor}`}>
            <p onClick={() => this.redirToUrl("overview")}>
              <i
                className="fa fa-1x fa-globe"
                aria-hidden="true"
                style={{
                  paddingTop: "8px"
                }}
              />
              Overview
            </p>
            <p onClick={() => this.redirToUrl("microgrid")}>
              <i className="fa fa-plug" aria-hidden="true" /> Mircrogrid
            </p>
            <p onClick={() => this.redirToUrl("keyinfo")}>
              <i className="fa fa-key" aria-hidden="true" /> Key Info
            </p>
            <p onClick={() => this.redirToUrl("realtime")}>
              <i className="fa fa-clock-o" aria-hidden="true" /> Realtime data
            </p>
            <p onClick={() => this.redirToUrl("history")}>
              <i className="fa fa-database" aria-hidden="true" /> Historical
                data
            </p>
            <p onClick={() => this.redirToUrl("casestudies")}>
              <i className="fa fa-lightbulb-o" aria-hidden="true" /> Case
                Studies
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CollegeCard;
