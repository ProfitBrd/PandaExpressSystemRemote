import React, {useState}from "react";
import Tabs from "../components/Tabs";
import {Component} from 'react';

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  getSummary = () => {
      fetch("http://localhost:3000/inventory/summary")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }, () => console.log(res)));
  }
  getItemPrice = () => {
      fetch("http://localhost:3000/inventory/summary")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }, () => console.log(res)));
  }
  render() {
    return (
      <div className="Right">
      <Tabs />
      <p className="App-intro">{this.state.apiResponse}</p>
          <button onClick={this.getSummary}>Get Current Inventory</button>
      </div>
    )
  }
}

export default Inventory; 

