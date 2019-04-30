import React, { Component } from "react";
import Grid from "./components/Grid";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import "./styles/GridLayout.css";
import "./styles/KPI.css";
import "./App.css";

const kpiConfig = {
  grid: {
    cols: 12,
    rowHeight: 50,
    width: 1024
  },
  elements: [
    {
      name: "KPI 1",
      positionX: 0,
      positionY: 0,
      height: 3,
      width: 5,
      type: "kpi",
      props: {
        primaryValue: {
          value: 241900,
          prefix: "$",
          suffix: ""
        },
        secondaryValue: {
          value: 100,
          prefix: "$",
          suffix: "M"
        },
        title: "Hello World"
      }
    },
    {
      name: "KPI 2",
      positionX: 5,
      positionY: 0,
      height: 5,
      width: 5,
      type: "kpi",
      props: {
        primaryValue: {
          value: 25900,
          prefix: "$",
          suffix: "K"
        },
        title: "Hello World"
      }
    }
  ]
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kpiConfig: kpiConfig
    };

    this.onGridChange = this.onGridChange.bind(this);
  }

  onGridChange(config) {
    console.log("onGridChange", config);
    // this.setState({
    //   kpiConfig: config
    // });
  }

  render() {
    return (
      <div className="App">
        <header className="App-body">
          <Grid config={kpiConfig} onGridChange={this.onGridChange} />
        </header>
      </div>
    );
  }
}

export default App;
