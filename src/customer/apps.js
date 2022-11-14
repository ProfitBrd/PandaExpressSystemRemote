import React from "react";
import ItemBox from "./itemBox";
import "./menuContainer.css";
import { Link } from "react-router-dom";
// item images
import ceRoll from './ceRoll.png';
import cShrimp from './cShrimp.png';

function apps() {
    return (
        <>
            <div className="menuContainer">
                <div className="menuItems">
                    
                    <div className="options">
                        <Link to="/CustomerMenu/entrees" className="optionBtn"> Entrees </Link>
                        <Link to="/CustomerMenu/sides" className="optionBtn"> Sides </Link>
                        <Link to="/CustomerMenu/apps" className="optionBtn"> Appetizers </Link>
                        {/* <Link to="/" className="optionBtn"> A la Carte </Link> */}
                    </div>
                    
                    <main>
                        <ItemBox itemImg = {ceRoll} itemName = {"chicken_egg_roll"} itemTitle = {"Chicken Egg Roll"} itemType = {"3"} />
                        <ItemBox itemImg = {cShrimp} itemName = {"crispy_shrimp"} itemTitle = {"Crispy Shrimp"} itemType = {"3"} />
                    </main>
                </div>
            </div>
        </>
    );
}

export default apps;
