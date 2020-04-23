import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import queryString from "query-string";

import LoginWithGoogleButton from "../components/LoginWithGoogleButton.jsx";

// const googleConfig = require("../../config/google");

import {
  login
} from "../api/index";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      redirect: false
    };

    // this.redirToUrl = this.redirToUrl.bind(this);
  }

  // redirToUrl = () => {
  //   this.setState({ redirect: true, redirUrl: `${this.state.loginLink}` });
  // }

  componentWillMount() {
    const values = queryString.parse(this.props.location.search);
    if (values.code) {
      this.setState({
        login: true,
        code: values.code
      }, this._performLogin);
    }
  }

  _performLogin() {
    login((err, res) => {
      if (!err) {
        console.log(res);
        this.setState({
          redirect: true,
          redirectTo: res.redirectTo
        });
      }
    }, this.state.code);
  }

  _renderRedirect() {
    if (this.state.redirect) {
      // return <Redirect to={{ pathname: `/create2?moldJobId=${this.state.redirectData.MoldJobId}` }} />;
      return <Redirect
        to={{
          pathname: this.state.redirectTo
        }}
      />;
    }
    return null;
  }
  // _fetchLoginLink() {
  //   fetchLoginURL((err, res) => {
  //     if (!err) {
  //       console.log("Link: ", res);
  //       this.setState({
  //         redirect: true,
  //         loginLink: res.loginLink
  //       });
  //       window.location = res.loginLink;
  //     } else {
  //       console.log("Error: ", err);
  //     }
  //   });
  // }

  responseGoogle(response) {
    console.log(response);
  }

  render() {
    // const { clientId } = googleConfig.thinkingNinja;
    // console.log(clientId);
    // <GoogleLogin
    //   clientId={clientId}
    //   buttonText="Login"
    //   onSuccess={this.responseGoogle}
    //   onFailure={this.responseGoogle}
    //   responseType={"code"}
    //   accessType={"offline"}
    // />
    return (
      <div>
        { this._renderRedirect() }
        {
          this.state.login ? null : <LoginWithGoogleButton/>
        }
      </div>
    );
  }
}

export default Login;
