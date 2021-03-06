import React, { Component } from "react";
import * as api from "../api";

class MaterialUIApiCall extends Component {
  state = {
    monthlyDownloads: "",
  };

  materialInvoker = () => {
    api.fetchMaterialUi().then(({ downloads }) => {
      this.setState({ monthlyDownloads: downloads });
    });
  };

  componentDidMount = () => {
    this.materialInvoker();
  };

  render() {
    return (
      <div style={{ color: "white" }}>
        <h5>Downloads</h5>
        <p>Last Month: {this.state.monthlyDownloads} </p>
      </div>
    );
  }
}

export default MaterialUIApiCall;
