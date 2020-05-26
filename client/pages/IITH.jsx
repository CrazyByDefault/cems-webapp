import React, { Component } from "react";

import {
  Typography,
  Container,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Paper
} from "@material-ui/core";

import {
  fetchIITHActivePower
} from "../api/index";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this._fetchData();
  }

  _fetchData() {
    fetchIITHActivePower((err, res) => {
      if (!err) {
        console.log(res);
        this.setState({
          data: res
        });
      }
    });
  }

  render() {
    return (
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Realtime
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableRow>
              <TableCell>
                Hi
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Container>
    );
  }
}

export default Home;
