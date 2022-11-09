import React from "react";
import ItemBox from "./itemBox";
import { Link } from "react-router-dom";
import "./menuContainer.css";
// item images
import mixedVeg from './mixedVeg.png';
import chowMein from './chowMein.png';
import friedRice from './friedRice.png';
import whiteRice from './whiteRice.png';
import brownRice from './brownRice.png';


function sides() {
    return (
        <>
            <div className="menuContainer">
                <div className="menuItems">
                    <div className="options">
                        <Link to="/entrees" className="optionBtn"> Entrees </Link>
                        <Link to="/sides" className="optionBtn"> Sides </Link>
                        <Link to="/apps" className="optionBtn"> Appetizers </Link>
                        <Link to="/" className="optionBtn"> A la Carte </Link>       
                    </div>
                    <main>
                        <ItemBox itemImg = {mixedVeg} itemName = {"mixed_vegetables"} itemPrice = {"$1"} itemType = {"2"} />
                        <ItemBox itemImg = {chowMein} itemName = {"chow_mein"} itemPrice = {"$2"} itemType = {"2"} />
                        <ItemBox itemImg = {friedRice} itemName = {"fried_rice"} itemPrice = {"$3"} itemType = {"2"} />
                        <ItemBox itemImg = {whiteRice} itemName = {"white_steamed_rice"} itemPrice = {"$4"} itemType = {"2"} />
                        <ItemBox itemImg = {brownRice} itemName = {"brown_steamed_rice"} itemPrice = {"$5"} itemType = {"2"} />
                    </main>
                </div>
            </div>
        </>
    );
}

export default sides;