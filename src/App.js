//rafce
import React, { Component } from "react";
import './index.css';
import CustomerMenu from "./components/CustomerMenu";
import CustomerLandingPage from "./components/CustomerLandingPage";

class App extends Component {

  render() {  
    return (
      <div>
        <CustomerLandingPage />
      </div>
    );
  }
}

export default App;