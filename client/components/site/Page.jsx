import React from "react";
import PropTypes from "prop-types";

import { Layout } from "antd";

const { Content, Footer } = Layout;


export default class Page extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    console.log("Page.jsx");

    return (
      <Layout className="layout">
        <Content style={{ padding: "0 50px" }}>
          {this.props.children}
        </Content>
        <Footer style={{ textAlign: "center" }}>CEMS IITH 2020</Footer>
      </Layout>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node,
};
