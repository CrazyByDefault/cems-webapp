import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import moment from "moment";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

import {
  Typography,
  // Container,
  Grid,
  Paper
} from "@material-ui/core";

import {
  withStyles
} from "@material-ui/core/styles";

import BackFab from "../components/BackFab.jsx";

import {
  fetchPowerForGraph,
  fetchVoltageForGraph,
  fetchCurrentForGraph,
  fetchPhasePowerForGraph,
  fetchPowerFactorForGraph,
  fetchCumulativeEnergyForGraph
} from "../api/index";


const styles = (theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  }
});

const dateFormatter = (item) => moment(item).format("HH:mm");
const timeFormatter = (item) => moment(item).format("DD-MM HH:mm:ss");

const CustomizedAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{dateFormatter(payload.value)}</text>
    </g>
  );
};

const CustomTooltip = ({
  active, payload, label, unit
}) => {
  if (active) {
    // console.log(payload);
    return (
      <Paper>
        <Typography variant="body1" align="center" gutterBottom>Time: {`${timeFormatter(label)}`}</Typography>
        {payload.map((item) => (
          <Typography key={item.stroke} variant="body1" align="center" gutterBottom>{parseFloat(item.value).toFixed(4)} {`${unit}`}</Typography>
        ))}
      </Paper>
    );
  }

  return null;
};

class Graph extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({
        panel: this.props.location.state
      });
      this._fetchData(this.props.location.state);
    } else {
      this.setState({
        redirect: true,
        redirectTo: "/iith/realtime"
      });
    }
    setInterval(async () => {
      this._fetchData(this.props.location.state);
    }, 5 * 1000);
  }

  _fetchData(panel) {
    this._fetchActivePower(panel);
    this._fetchCE(panel);
    this._fetchVoltage(panel);
    this._fetchPhasePower(panel);
    this._fetchCurrent(panel);
    this._fetchPF(panel);
  }

  _fetchActivePower(panel) {
    fetchPowerForGraph((e, res) => {
      if (!e) {
        const data = res;
        data.max = Math.max(...res.map((o) => o.y));
        data.min = Math.min(...res.map((o) => o.y));
        this.setState({ data });
      }
    }, panel);
  }

  _fetchVoltage(panel) {
    fetchVoltageForGraph((e, res) => {
      if (!e) {
        const voltage = res;

        const maxR = Math.max(...res.map((o) => o.r));
        const maxY = Math.max(...res.map((o) => o.y));
        const maxB = Math.max(...res.map((o) => o.b));
        voltage.max = Math.max(maxR, maxY, maxB);

        const minR = Math.min(...res.map((o) => o.r));
        const minY = Math.min(...res.map((o) => o.y));
        const minB = Math.min(...res.map((o) => o.b));
        voltage.min = Math.min(minR, minY, minB);
        this.setState({ voltage });
      }
    }, panel);
  }

  _fetchCurrent(panel) {
    fetchCurrentForGraph((e, res) => {
      if (!e) {
        const current = res;

        const maxR = Math.max(...res.map((o) => o.r));
        const maxY = Math.max(...res.map((o) => o.y));
        const maxB = Math.max(...res.map((o) => o.b));
        current.max = Math.max(maxR, maxY, maxB);

        const minR = Math.min(...res.map((o) => o.r));
        const minY = Math.min(...res.map((o) => o.y));
        const minB = Math.min(...res.map((o) => o.b));
        current.min = Math.min(minR, minY, minB);
        this.setState({ current });
      }
    }, panel);
  }

  _fetchPhasePower(panel) {
    fetchPhasePowerForGraph((e, res) => {
      if (!e) {
        const power = res;

        const maxR = Math.max(...res.map((o) => o.r));
        const maxY = Math.max(...res.map((o) => o.y));
        const maxB = Math.max(...res.map((o) => o.b));
        power.max = Math.max(maxR, maxY, maxB);

        const minR = Math.min(...res.map((o) => o.r));
        const minY = Math.min(...res.map((o) => o.y));
        const minB = Math.min(...res.map((o) => o.b));
        power.min = Math.min(minR, minY, minB);

        this.setState({ power });
      }
    }, panel);
  }

  _fetchPF(panel) {
    fetchPowerFactorForGraph((e, res) => {
      if (!e) {
        const pf = res;
        pf.max = 1.25;
        pf.min = -1.25;
        this.setState({ pf });
      }
    }, panel);
  }

  _fetchCE(panel) {
    fetchCumulativeEnergyForGraph((e, res) => {
      if (!e) {
        const ce = res;
        ce.max = Math.max(...res.map((o) => o.y));
        ce.min = Math.min(...res.map((o) => o.y));
        const ceFinal = ce.map((item, i) => {
          const newItem = {};
          newItem.x = item.x;
          newItem.y = i === 0 ? 0 : item.y - ce[i - 1].y;
          newItem.row2 = item.row2;
          return newItem;
        });
        this.setState({ ce: ceFinal });
      }
    }, panel);
  }

  _renderGraph(dataSource, stroke, unit) {
    // const stroke = "#"+Math.floor(Math.random()*16777215).toString(16);
    console.log("rendering ", dataSource, " graph");
    return (
      <ResponsiveContainer width="98%" height={250} style={{ marginRight: 0 }}>
        <LineChart
          data={this.state[dataSource]}
          margin={{
            top: 15,
            bottom: 15,
            left: 5,
            right: 5
          }}
        >
          <XAxis dataKey="x" tickFormatter={dateFormatter} tick={<CustomizedAxisTick />}/>
          <YAxis unit={unit} type="number" domain={[this.state[dataSource].min, this.state[dataSource].max]} scale="linear"/>
          <Tooltip content={<CustomTooltip unit={unit} />} />
          <Line dataKey="y" stroke={stroke} dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }

  _renderGraphMultiline(dataSource, unit) {
    // const stroke = "#"+Math.floor(Math.random()*16777215).toString(16);
    console.log("rendering ", dataSource, " graph");
    return (
      <ResponsiveContainer width="98%" height={250} style={{ marginRight: 0 }}>
        <LineChart
          data={this.state[dataSource]}
          margin={{
            top: 15,
            bottom: 15,
            left: 5,
            right: 5
          }}
        >
          <XAxis dataKey="x" tickFormatter={dateFormatter} tick={<CustomizedAxisTick />}/>
          <YAxis unit={unit} type="number" domain={[this.state[dataSource].min, this.state[dataSource].max]} scale="linear"/>
          <Tooltip content={<CustomTooltip unit={unit} />} />
          <Line dataKey="r" stroke="red" dot={false}/>
          <Line dataKey="y" stroke="green" dot={false}/>
          <Line dataKey="b" stroke="blue" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }

  _renderRedirect() {
    if (this.state.redirect) {
      return <Redirect
        to={{
          pathname: this.state.redirectTo
        }}
      />;
    }
    return null;
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        { this._renderRedirect() }
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              Realtime Graphs for {this.state.panel}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h5">Power</Typography>
              {
                this.state.power ? this._renderGraphMultiline("power", "KWh") : <Loader type="Puff" color="grey" height={40} width={40} />
              }
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h5">Voltage</Typography>
              {
                this.state.voltage ? this._renderGraphMultiline("voltage", "V") : <Loader type="Puff" color="grey" height={40} width={40} />
              }
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h5">Current</Typography>
              {
                this.state.current ? this._renderGraphMultiline("current", "A") : <Loader type="Puff" color="grey" height={40} width={40} />
              }
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h5">Energy</Typography>
              {
                this.state.ce ? this._renderGraph("ce", "DeepPink", "KW") : <Loader type="Puff" color="grey" height={40} width={40} />
              }
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h5">Power Factor</Typography>
              {
                this.state.pf ? this._renderGraph("pf", "black", "") : <Loader type="Puff" color="grey" height={40} width={40} />
              }
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h5">Total Power</Typography>
              {
                this.state.data ? this._renderGraph("data", "DarkTurquoise", "KWh") : <Loader type="Puff" color="grey" height={40} width={40} />
              }
            </Paper>
          </Grid>
        </Grid>
        <BackFab history={this.props.history}/>
      </div>
    );
  }
}

export default withStyles(styles)(Graph);
