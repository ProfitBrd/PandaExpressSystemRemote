import React from "react";
import Logo from './pandaLogo.png';
import "./header.css";
import { useNavigate } from 'react-router-dom';



function header() {

  return (
    <div className="header">
        <img src={Logo} className="img" width="25%" />
        <div className="addToCart">
          <button onClick= "/CustomerLandingPage" > Back to Cart </button>;
        </div>

    </div>


  );
}

export default header;