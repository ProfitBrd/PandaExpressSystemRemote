import React, {useState}from "react";
import Tabs from "../components/Tabs";
import EmployeeTabs from "../components/EmployeeTabs";
import {Component} from 'react';

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  getSummary = () => {
      fetch("http://localhost:3000/roster?id=2")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }, () => console.log(res)));
  }
  render() {
    return (
      <div className="Right">
      <EmployeeTabs />
      <p className="App-intro">{this.state.apiResponse}</p>
          <button onClick={this.getSummary}>Get Employee 2</button>
      </div>
    )
  }
}

export default Employee; 

