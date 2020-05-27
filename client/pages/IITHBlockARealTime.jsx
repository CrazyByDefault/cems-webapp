import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import {
  Typography,
  Container,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Paper
} from "@material-ui/core";

import {
  withStyles
} from "@material-ui/core/styles";

import {
  fetchIITHBlockActivePower,
  fetchBlockTotal
} from "../api/index";

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


class IITHBlockARealTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this._fetchBlockTotal();
    this._fetchData();
    setInterval(async () => {
      this._fetchData();
    }, 30 * 1000);
  }

  _fetchData() {
    fetchIITHBlockActivePower((err, res) => {
      if (!err) {
        // console.log(res);
        this.setState({
          data: res,
          timeUpdated: (new Date()).toLocaleString()
        });
      }
    }, "A");
  }

  _fetchBlockTotal() {
    fetchBlockTotal((err, res) => {
      if (!err) {
        this.setState({
          blockTotal: res
        });
      }
    }, "A");
  }

  getValuetoDisplay(panel) {
    let color = null;
    if (this.state.data) {
      const data = this.state.data.find((el) => el.panel === panel);
      if (data.time_elapsed < 300) {
        color = "#22C09F";
      } else if (data.time_elapsed < 420) {
        color = "#FFDE7B";
      } else if (data.time_elapsed < 480) {
        color = "#F99C3E";
      } else {
        color = "#FF6F61";
      }
      return [data.power, color];
    }
    return [null, null];
  }

  renderCell(panel) {
    const [data, color] = this.getValuetoDisplay(panel);
    return (
      <TableCell align="center" style={{ background: color }} onClick={() => { this._setRedirect(panel); }}>
        {data}
      </TableCell>
    );
  }

  _setRedirect(panel) {
    this.setState({
      redirect: true,
      redirectPanel: panel
    });
  }

  _renderRedirect() {
    if (this.state.redirect) {
      return <Redirect
        to={{
          pathname: "/iith/realtime/graph",
          state: this.state.redirectPanel
        }}
      />;
    }
    return null;
  }

  render() {
    return (
      <Container>
        { this._renderRedirect() }
        <Typography variant="h5" align="center" gutterBottom>
          IITH Block A - Realtime
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <StyledTableRow>
                <TableCell align="center" colSpan={5}>
                  { this.state.timeUpdated ? this.state.timeUpdated : "Time Stamp: loading ... !" }
                </TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center" colSpan={5}>
                  Data Updated Every 30 seconds
                </TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center" rowSpan={4}>
                  A
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  Total Power Consumption in kW
                </TableCell>
                <TableCell align="center">
                  { this.state.blockTotal ? Math.round(parseFloat(this.state.blockTotal.total_p)) : null }
                </TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">
                  Time
                </TableCell>
                <TableCell align="center">
                  { this.state.blockTotal ? this.state.blockTotal.tstamp : null }
                </TableCell>
                <TableCell align="center">
                  No. of meters / 46
                </TableCell>
                <TableCell align="center">
                  { this.state.blockTotal ? this.state.blockTotal.no_of_meters : null }
                </TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center" colSpan={2}>
                  Plug loads
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Lighting loads
                </TableCell>
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">
                  West Wing
                </TableCell>
                <TableCell align="center">
                  East Wing
                </TableCell>
                <TableCell align="center">
                  West Wing
                </TableCell>
                <TableCell align="center">
                  East Wing
                </TableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <TableCell align="center">
                  Terrace
                </TableCell>
                {this.renderCell("IIT_A_Normal_Panel_8_102")}
                <TableCell align="center">
                  -
                </TableCell>
                {this.renderCell("IIT_A_Normal_Panel_8_103")}
                {this.renderCell("IIT_A_Normal_Panel_8_233")}
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">
                  7th Floor
                </TableCell>
                {this.renderCell("IIT_A_Normal_Panel_3_71")}
                {this.renderCell("IIT_A_Normal_Panel_3_72")}
                {this.renderCell("IIT_A_Emergency_Panel_11_73")}
                {this.renderCell("IIT_A_Emergency_Panel_11_74")}
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">
                  6th Floor
                </TableCell>
                {this.renderCell("IIT_A_Normal_Panel_1_61")}
                {this.renderCell("IIT_A_Normal_Panel_3_62")}
                {this.renderCell("IIT_A_Emergency_Panel_11_63")}
                {this.renderCell("IIT_A_Emergency_Panel_11_64")}
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">
                  5th Floor
                </TableCell>
                {this.renderCell("IIT_A_Normal_Panel_1_51")}
                {this.renderCell("IIT_A_Normal_Panel_8_52")}
                {this.renderCell("IIT_A_Emergency_Panel_11_53")}
                {this.renderCell("IIT_A_Emergency_Panel_11_54")}
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">
                  4th Floor
                </TableCell>
                {this.renderCell("IIT_A_Normal_Panel_8_41")}
                {this.renderCell("IIT_A_Normal_Panel_8_42")}
                {this.renderCell("IIT_A_Emergency_Panel_11_43")}
                {this.renderCell("IIT_A_Emergency_Panel_11_44")}
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">
                  3rd Floor
                </TableCell>
                {this.renderCell("IIT_A_Normal_Panel_3_31")}
                {this.renderCell("IIT_A_Normal_Panel_3_32")}
                {this.renderCell("IIT_A_Emergency_Panel_11_33")}
                {this.renderCell("IIT_A_Emergency_Panel_11_34")}
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">
                  2nd Floor
                </TableCell>
                {this.renderCell("IIT_A_Normal_Panel_7_21")}
                {this.renderCell("IIT_A_Normal_Panel_8_22")}
                {this.renderCell("IIT_A_Emergency_Panel_11_23")}
                {this.renderCell("IIT_A_Emergency_Panel_11_24")}
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">
                  1st Floor
                </TableCell>
                {this.renderCell("IIT_A_Normal_Panel_8_11")}
                {this.renderCell("IIT_A_Normal_Panel_8_12")}
                {this.renderCell("IIT_A_Emergency_Panel_11_13")}
                {this.renderCell("IIT_A_Emergency_Panel_11_14")}
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">
                  Ground Floor
                </TableCell>
                {this.renderCell("IIT_A_Normal_Panel_7_3")}
                {this.renderCell("IIT_A_Normal_Panel_1_2")}
                {this.renderCell("IIT_A_Emergency_Panel_11_4")}
                {this.renderCell("IIT_A_Emergency_Panel_11_5")}
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">
                  UPS1
                </TableCell>
                {this.renderCell("IIT_A_Emergency_Panel_11_202")}
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">
                  UPS2
                </TableCell>
                {this.renderCell("IIT_A_Emergency_Panel_11_203")}
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">
                  Lift
                </TableCell>
                {this.renderCell("IIT_A_Emergency_Panel_11_201")}
              </StyledTableRow>
              <StyledTableRow>
                <TableCell align="center">
                  HVAC
                </TableCell>
                {this.renderCell("IIT_A_Normal_Panel_7_101")}
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  }
}

export default IITHBlockARealTime;
