import React, { Component } from "react";
import { Button } from "antd";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
  }

  render() {
    return (
      <div>
        <Button onClick={() => console.log("Button Pressed")} />
      </div>
    );
  }
}

export default Login;
