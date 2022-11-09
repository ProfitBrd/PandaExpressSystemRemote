import React from "react";
import ItemBox from "./itemBox";
import { Link } from "react-router-dom";
// item images
import hsChicken from './hsChicken.png';
import oChicken from './oChicken.png';
import bpaSteak from './bpaSteak.png';
import sbChicken from './sbChicken.png';
import sfChicken from './sfChicken.png';
import bpChicken from './bpChicken.png';
import gtChicken from './gtChicken.png';
import beijBeef from './beijBeef.png';
import hwShrimp from './hwShrimp.png';
import mChicken from './mChicken.png';
import epTofu from './epTofu.png';

import "./menuContainer.css";


function entrees() {
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
                        <ItemBox itemImg = {hsChicken} className = "img" itemName = {"honey_seasame_chicken"} itemPrice = {"$1"} itemType = {"1"} />
                        <ItemBox itemImg = {oChicken} className = "img" itemName = {"orange_chicken"} itemPrice = {"$2"} itemType = {"1"}/>
                        <ItemBox itemImg = {bpaSteak} className = "img" itemName = {"black_pepper_angus_steak"} itemPrice = {"$3"} itemType = {"1"} />
                        <ItemBox itemImg = {sbChicken} className = "img" itemName = {"string_bean_chicken_breast"} itemPrice = {"$4"} itemType = {"1"} />
                        <ItemBox itemImg = {sfChicken} className = "img" itemName = {"sweetfire_chicken_breast"} itemPrice = {"$5"} itemType = {"1"} />
                        <ItemBox itemImg = {bpChicken} className = "img" itemName = {"black_pepper_chicken"} itemPrice = {"$6"} itemType = {"1"} />
                        <ItemBox itemImg = {gtChicken} className = "img" itemName = {"grilled_teriyaki_chicken"} itemPrice = {"$7"} itemType = {"1"} />
                        <ItemBox itemImg = {beijBeef} className = "img" itemName = {"bejing_beef"} itemPrice = {"$8"} itemType = {"1"} />
                        <ItemBox itemImg = {hwShrimp} className = "img" itemName = {"honey_walnut_shrimp"} itemPrice = {"$9"} itemType = {"1"} />
                        <ItemBox itemImg = {mChicken} className = "img" itemName = {"mushroom_chicken"} itemPrice = {"$10"} itemType = {"1"} />
                        <ItemBox itemImg = {epTofu} className = "img" itemName = {"eggplant_tofu"} itemPrice = {"$11"} itemType = {"1"} />
                    </main>
                </div>
            </div>
        </>
    );
}


export default entrees;
