import React from "react";
import {
  Layout, Menu
} from "antd";

const { Header } = Layout;

class PageHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    const cookie = document.cookie
      .split(";")
      .reduce((res, c) => {
        const [key, val] = c.trim().split("=").map(decodeURIComponent);
        const allNumbers = str => /^\d+$/.test(str);
        try {
          return Object.assign(res, { [key]: allNumbers(val) ? val : JSON.parse(val) });
        } catch (e) {
          return Object.assign(res, { [key]: val });
        }
      }, {});
    this.state = {
      logged: cookie.CAT || cookie.UAT,
      metadata: {
        sex: "male"
      }
    };

    this.logout = this.logout.bind(this);
  }

  logout = function () {
    console.log("LOGGING OUT");
    document.cookie = "CAT=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = "UAT=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    window.location.replace(`${window.location.origin}`);
  };

  render() {
    const logoStyle = {
      width: "120px",
      height: "53px",
      background: "rgba(255, 255, 255, 0.2)",
      backgroundImage: "url('/img/logo.jpg')",
      margin: "13px 32px 14px 0",
      float: "left",
    };
    return (
      <Header style={{ height: "80px", background: "#ffffff" }}>
        <a href="/"><div style={logoStyle} /></a>
        <Menu
          theme="light"
          mode="horizontal"
          style={{ lineHeight: "80px", float: "right" }}
          onClick={this.logout}
        >
          {
            window.location.pathname !== "/"
              ? <Menu.Item key="logout">Logout</Menu.Item>
              : <Menu.Item key="login">Login</Menu.Item>
          }
        </Menu>
      </Header>
    );
  }
}


export default PageHeader;
