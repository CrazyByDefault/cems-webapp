import React from "react";
import Header from "../components/IITHHeader";
import {
  fetchBlockTotal
} from "../api";

class IITHRealtime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blocksData: []
    };
    this.requestPlot = this.requestPlot.bind(this);
  }

  componentDidMount() {
    fetchBlockTotal((err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({ blocksData: data });
      }
    });
  }

  requestPlot = () => {
    fetchBlockTotal((err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        this.setState({ blocksData: data });
      }
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <p
          style={{
            paddingTop: "10px"
          }}
        ></p>
        <div
          className="row w3-flat-silver"
          align="left"
          style={{
            paddingLeft: "10px"
          }}
        >
          <p>
            <a href="http://cems.iith.ac.in/home.html">
              <i className="fa fa-home" aria-hidden="true" /> Home &gt;
            </a> &nbsp;
            <a href="http://cems.iith.ac.in/iith/iithoverview.html">
              <i
                className="fa fa-1x fa-university"
                aria-hidden="true"
                style={{
                  paddingTop: "8px"
                }}
              />
              IITH &gt;
            </a> &nbsp;
            <a href="http://cems.iith.ac.in/iith/iithoverview.html">
              <i
                className="fa fa-1x fa-globe"
                aria-hidden="true"
                style={{
                  paddingTop: "8px"
                }}
              />
              Overview &gt;
            </a> &nbsp;
            <a href="http://cems.iith.ac.in/iith/iithmicrogrid.html">
              <i className="fa fa-plug" aria-hidden="true" /> Mircrogrid &gt;
            </a> &nbsp;
            <a href="http://cems.iith.ac.in/iith/iithkeyinfo.html">
              <i className="fa fa-key" aria-hidden="true" /> Key Info &gt;
            </a> &nbsp;
            <a href="http://cems.iith.ac.in/iith/realtime">
              <i className="fa fa-clock-o" aria-hidden="true" /> Realtime data &gt;
            </a> &nbsp;
            <a href="http://cems.iith.ac.in/iith/iithhistory.html">
              <i className="fa fa-database" aria-hidden="true" /> Historical
              data &gt;
            </a> &nbsp;
            <a href="http://cems.iith.ac.in/iith/iithcasestudies.html">
              <i className="fa fa-lightbulb-o" aria-hidden="true" /> Case
              Studies
            </a>
          </p>
        </div>
        <p
          style={{
            paddingTop: "20px"
          }}
        ></p>
        <div className="row" align="center">
          <h3> Realtime Data </h3>
        </div>
        <p
          style={{
            paddingTop: "20px"
          }}
        ></p>
        <div className="row">
          <div className="col-sm-6">
            <table
              align="center"
              className="table table-striped table-dark table-bordered"
            >
              <thead></thead>
              <tbody align="center">
                <tr>
                  <td id="r0" colSpan={5}>

                    Time Stamp: loading ... !
                  </td>
                </tr>
                <tr>
                  <td colSpan={5}>Data Updated Every 1 minute</td>
                </tr>
                <tr>
                  <td vertical-align="bottom" rowSpan={4}>

                    Block <br /> <font size={6}> A </font>
                  </td>
                  <td colSpan={3}>Total Power Consumption in kW</td>
                  <td id="atot" onClick={this.requestPlot(this)}>

                  </td>
                </tr>
                <tr>
                  <td>Time</td>
                  <td id="ats" />
                  <td>no. of meters / 46</td> <td id="anom"> </td>
                </tr>
                <tr>
                  <td colSpan={2}>

                    <i className="fa fa-plug" aria-hidden="true">

                      Plug loads
                    </i>
                  </td>
                  <td colSpan={2}>

                    <i className="fa fa-lightbulb-o" aria-hidden="true">

                      Lighting loads
                    </i>
                  </td>
                </tr>
                <tr>
                  <td>West Wing</td>
                  <td>East Wing</td>
                  <td>West Wing</td>
                  <td>East Wing</td>
                </tr>
                <tr>
                  <td>Terrace</td>
                  <td id="r38"></td>
                  <td> - </td>
                  <td id="r39"></td>
                  <td id="r45"></td>
                </tr>
                <tr>
                  <td>7th Floor</td>
                  <td id="r30" onClick={this.requestPlot(this)} />
                  <td id="r31" onClick={this.requestPlot(this)} />
                  <td id="r21" />
                  <td id="r22" />
                </tr>
                <tr>
                  <td>6th Floor</td>
                  <td id="r34" />
                  <td id="r29" />
                  <td id="r19" />
                  <td id="r20" />
                </tr>
                <tr>
                  <td>5th Floor</td>
                  <td id="r33" />
                  <td id="r48" />
                  <td id="r17" />
                  <td id="r18" />
                </tr>
                <tr>
                  <td>4th Floor</td>
                  <td id="r46" />
                  <td id="r47" />
                  <td id="r14" />
                  <td id="r15" />
                </tr>
                <tr>
                  <td>3rd Floor</td>
                  <td id="r27"> </td>
                  <td id="r28"> </td>
                  <td id="r11" />
                  <td id="r12" />
                </tr>
                <tr>
                  <td>2nd Floor</td>
                  <td id="r24" />
                  <td id="r43" />
                  <td id="r7" />
                  <td id="r10" />
                </tr>
                <tr>
                  <td>1st Floor </td>
                  <td id="r41"> </td>
                  <td id="r42"> </td>
                  <td id="r1"> </td>
                  <td id="r2"> </td>
                </tr>
                <tr>
                  <td>Ground Floor</td>
                  <td id="r26" />
                  <td id="r32" />
                  <td id="r13" />
                  <td id="r16" />
                </tr>
                <tr>
                  <td>UPS1</td>
                  <td id="r4" />
                </tr>
                <tr>
                  <td>UPS2</td>
                  <td id="r5" />
                </tr>
                <tr>
                  <td>Lift</td>
                  <td id="r3" />
                </tr>
                <tr>
                  <td>HVAC</td>
                  <td id="r23" />
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-6">
            <table
              align="center"
              className="table table-striped table-dark table-bordered"
            >
              <thead></thead>
              <tbody align="center">
                <tr>
                  <td vertical-align="bottom" rowSpan={3}>

                    Block <br /> <font size={6}> C </font>
                  </td>
                  <td colSpan={4}>Total Power Consumption in Watts</td>
                </tr>
                <tr>
                  <td colSpan={2}>

                    <i className="fa fa-plug" aria-hidden="true">

                      Plug loads
                    </i>
                  </td>
                  <td colSpan={2}>

                    <i className="fa fa-lightbulb-o" aria-hidden="true">

                      Lighting loads
                    </i>
                  </td>
                </tr>
                <tr>
                  <td>West Wing</td>
                  <td>East Wing</td>
                  <td>West Wing</td>
                  <td>East Wing</td>
                </tr>
                <tr>
                  <td>Terrace</td>
                  <td id="r91" />
                  <td id="r92" />
                  <td id>-</td>
                  <td id>-</td>
                </tr>
                <tr>
                  <td>7th Floor</td>
                  <td id="r89" />
                  <td id="r88" />
                  <td id="r56" />
                  <td id>-</td>
                </tr>
                <tr>
                  <td>6th Floor</td>
                  <td id="r86" />
                  <td id="r87" />
                  <td id="r54" />
                  <td id="r55">-</td>
                </tr>
                <tr>
                  <td>5th Floor</td>
                  <td id="r85" />
                  <td id="r100" />
                  <td id="r52" />
                  <td id="r53" />
                </tr>
                <tr>
                  <td>4th Floor</td>
                  <td id="r99" />
                  <td id="r84" />
                  <td id="r50" />
                  <td id="r51" />
                </tr>
                <tr>
                  <td>3rd Floor</td>
                  <td id="r98"> </td>
                  <td id="r83" />
                  <td id="r76" />
                  <td id="r49" />
                </tr>
                <tr>
                  <td>2nd Floor</td>
                  <td id="r96" />
                  <td id="r97" />
                  <td id="r74" />
                  <td id="r75" />
                </tr>
                <tr>
                  <td>1st Floor</td>
                  <td id="r81" />
                  <td id="r82" />
                  <td id="r72" />
                  <td id="r73" />
                </tr>
                <tr>
                  <td>Ground Floor</td>
                  <td id="r94" />
                  <td id="r95" />
                  <td id="r70" />
                  <td id="r71" />
                </tr>
                <tr>
                  <td>UPS1</td>
                  <td id="r78" />
                </tr>
                <tr>
                  <td>UPS2</td>
                  <td id="r79" />
                </tr>
                <tr>
                  <td>Lift</td>
                  <td id="r77" />
                </tr>
                <tr>
                  <td>AHU</td>
                  <td id="r93" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <table
              align="center"
              className="table table-striped table-dark table-bordered"
            >
              <tbody align="center">
                <tr>
                  <td colSpan={2}>
                    <font size={4}>Legend</font>
                  </td>
                </tr>
                <tr>
                  <td id="l1" />
                  <td>Realtime data (delay 5.1 min)</td>
                </tr>
                <tr>
                  <td id="l2" />
                  <td>Data ( 5.1 min & 6 min) old</td>
                </tr>
                <tr>
                  <td id="l3" />
                  <td>Data ( 6 min & 8 min) old</td>
                </tr>
                <tr>
                  <td id="l4" />
                  <td>Data older than 8 min</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-4">
            <table
              align="center"
              className="table table-striped table-dark table-bordered"
            >
              <tbody align="center">
                <tr>
                  <td colSpan={3}>
                    <font size={4}>Data Collection Boards Status</font>
                  </td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <font size={4} id="ts0">
                      Time Stamp
                    </font>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Board No.</td>
                  <td>Block_Panel_Board</td>
                </tr>
                <tr id="br1">
                  <td id="b1" />
                  <td id="bd1">Board 1</td>
                  <td id="bd1-loc">Block_Panel_Board</td>
                </tr>
                <tr id="br2">
                  <td id="b2" />
                  <td id="bd2">Board 2</td>
                  <td id="bd2-loc">Block_Panel_Board</td>
                </tr>
                <tr id="br3">
                  <td id="b3" />
                  <td id="bd3">Board 3</td>
                  <td id="bd3-loc">Block_Panel_Board</td>
                </tr>
                <tr id="br4">
                  <td id={11} />
                  <td id="bd4">Board 4</td>
                  <td id="bd4-loc">Block_Panel_Board</td>
                </tr>
                <tr id="br5">
                  <td id="b2" />
                  <td id="bd5">Board 5</td>
                  <td id="bd5-loc">Block_Panel_Board</td>
                </tr>
                <tr id="br6">
                  <td id="b3" />
                  <td id="bd6">Board 6</td>
                  <td id="bd6-loc">Block_Panel_Board</td>
                </tr>
                <tr id="br7">
                  <td id={12} />
                  <td id="bd7">Board 7</td>
                  <td id="bd7-loc">Block_Panel_Board</td>
                </tr>
                <tr id="br8">
                  <td id={13} />
                  <td id="bd8">Board 8</td>
                  <td id="bd8-loc">Block_Panel_Board</td>
                </tr>
                <tr id="br9">
                  <td id={14} />
                  <td id="bd9">Board 9</td>
                  <td id="bd9-loc">Block_Panel_Board</td>
                </tr>
                <tr id="br10">
                  <td id={14} />
                  <td id="bd10" />
                  <td id="bd10-loc" />
                </tr>
                <tr id="br11">
                  <td id={14} />
                  <td id="bd11" />
                  <td id="bd11-loc" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <canvas id="myChart2" width={1000} height={500} />
        <br />
      </div>
    );
  }
}

export default IITHRealtime;
