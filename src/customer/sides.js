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
                        <Link to="/CustomerMenu/entrees" className="optionBtn"> Entrees </Link>
                        <Link to="/CustomerMenu/sides" className="optionBtn"> Sides </Link>
                        <Link to="/CustomerMenu/apps" className="optionBtn"> Appetizers </Link>
                        {/* <Link to="/" className="optionBtn"> A la Carte </Link>        */}
                    </div>
                    <main>
                        <ItemBox itemImg = {mixedVeg} itemName = {"mixed_vegetables"} itemTitle = {"Mixed Vegetables"} itemType = {"2"} />
                        <ItemBox itemImg = {chowMein} itemName = {"chow_mein"} itemTitle = {"Chow Mein"} itemType = {"2"} />
                        <ItemBox itemImg = {friedRice} itemName = {"fried_rice"} itemTitle = {"Fried Rice"} itemType = {"2"} />
                        <ItemBox itemImg = {whiteRice} itemName = {"white_steamed_rice"} itemTitle = {"White Steamed Rice"} itemType = {"2"} />
                        <ItemBox itemImg = {brownRice} itemName = {"brown_steamed_rice"} itemTitle = {"Brown Steamed Rice"} itemType = {"2"} />
                    </main>
                </div>
            </div>
        </>
    );
}

export default sides;
