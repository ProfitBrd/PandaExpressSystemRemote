import React, {useState}from "react";
import Tabs from "../components/Tabs";
import {Component} from 'react';

class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI = () => {
      fetch("http://localhost:3000/order_history?id=2")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }, () => console.log(res)));
  }
  render() {
    return (
      <div>
      <p className="App-intro">{this.state.apiResponse}</p>
          <button onClick={this.callAPI}>View Order History</button>        
      </div>
    )
  }
}

export default Sales; 

