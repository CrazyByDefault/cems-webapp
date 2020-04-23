import React, { Component } from "react";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

import {
  fetchLoginURL
} from "../api/index";

class LoginWithGoogleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }

  Login() {
    fetchLoginURL((err, res) => {
      if (!err) {
        console.log(res.loginLink);
        window.location = (res.loginLink);
      } else {
        console.log(err);
      }
    });
  }

  render() {
    return (
      <Button type="primary" shape="round" icon={<GoogleOutlined />} onClick={this.Login}>
        Sign in
      </Button>
    );
  }
}

export default LoginWithGoogleButton;
