import React, { Component } from "react";
import logo from './Panda-Express-Logo.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "t" };
  }

  callAPI = () => {
      fetch("http://localhost:3000/roster?id=2")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }, () => console.log(res)));
  }

  render() {  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Panda Express Manager Page
          <p className="App-intro">{this.state.apiResponse}</p>
          <button onClick={this.callAPI}>Make Call</button>
        </header>
      </div>
    );
  }
}

export default App;
