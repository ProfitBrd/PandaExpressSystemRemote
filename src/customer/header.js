import React from "react";
import Logo from './pandaLogo.png';
import "./header.css";
import "./menuContainer.css";
import { useNavigate, Link } from 'react-router-dom';



function header() {

  return (
    <div className="header">
        <img src={Logo} className="img" width="25%" />
        <div className="addToCart">
        <button><Link to="/CustomerMenu" className="optionBtn"> Back to Cart </Link></button>;
        </div>

    </div>


  );
}

export default header;