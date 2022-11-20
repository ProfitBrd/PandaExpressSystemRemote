import React from "react";
import Logo from './pandaLogo.png';
import "./header.css";
import "./menuContainer.css";
import { useNavigate, Link } from 'react-router-dom';



function header(props) {

  return (
    <div className="header">
        <img src={Logo} className="img" width="25%" />
        <div className="addToCart">
        <button onClick={() => props.goBack()}>Back to Cart</button>;
        </div>
        
        <div className="options">
                <button className="optionBtn" onClick={() => props.callback("entrees")}> Entrees </button>
                <button className="optionBtn" onClick={() => props.callback("sides")}> Sides </button>
                <button className="optionBtn" onClick={() => props.callback("appetizers")}> Appetizers </button>
                {/* <Link to="/" className="optionBtn"> A la Carte </Link> */}
        </div>
    </div>


  );
}

export default header;