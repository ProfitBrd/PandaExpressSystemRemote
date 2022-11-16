import React from "react";
import ItemBox from "./itemBox";
import { Link } from "react-router-dom";
// entree images
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
// side images
import mixedVeg from './mixedVeg.png';
import chowMein from './chowMein.png';
import friedRice from './friedRice.png';
import whiteRice from './whiteRice.png';
import brownRice from './brownRice.png';
// app images
import ceRoll from './ceRoll.png';
import cShrimp from './cShrimp.png';


function menuContainer() {
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
                <ItemBox itemImg = {hsChicken} className = "img" itemName = {"honey_seasame_chicken"} itemTitle = {"Honey Seasame Chicken"} itemType = {"1"} />
                <ItemBox itemImg = {oChicken} className = "img" itemName = {"orange_chicken"} itemTitle = {"Orange Chicken"} itemType = {"1"}/>
                <ItemBox itemImg = {bpaSteak} className = "img" itemName = {"black_pepper_angus_steak"} itemTitle = {"Black Pepper Angus Steak"} itemType = {"1"} />
                <ItemBox itemImg = {sbChicken} className = "img" itemName = {"string_bean_chicken_breast"} itemTitle = {"String Bean Chicken Breast"} itemType = {"1"} />
                <ItemBox itemImg = {sfChicken} className = "img" itemName = {"sweetfire_chicken_breast"} itemTitle = {"Sweetfire Chicken Breast"} itemType = {"1"} />
                <ItemBox itemImg = {bpChicken} className = "img" itemName = {"black_pepper_chicken"} itemTitle = {"Black Pepper Chicken"} itemType = {"1"} />
                <ItemBox itemImg = {gtChicken} className = "img" itemName = {"grilled_teriyaki_chicken"} itemTitle = {"Grilled Teriyaki Chicken"} itemType = {"1"} />
                <ItemBox itemImg = {beijBeef} className = "img" itemName = {"bejing_beef"} itemTitle = {"Bejing Beef"} itemType = {"1"} />
                <ItemBox itemImg = {hwShrimp} className = "img" itemName = {"honey_walnut_shrimp"} itemTitle = {"Honey Walnut Shrimp"} itemType = {"1"} />
                <ItemBox itemImg = {mChicken} className = "img" itemName = {"mushroom_chicken"} itemTitle = {"Mushroom Chicken"} itemType = {"1"} />
                <ItemBox itemImg = {epTofu} className = "img" itemName = {"eggplant_tofu"} itemTitle = {"Eggplant Tofu"} itemType = {"1"} />   
                <ItemBox itemImg = {mixedVeg} itemName = {"mixed_vegetables"} itemTitle = {"Mixed Vegetables"} itemType = {"2"} />
                <ItemBox itemImg = {chowMein} itemName = {"chow_mein"} itemTitle = {"Chow Mein"} itemType = {"2"} />
                <ItemBox itemImg = {friedRice} itemName = {"fried_rice"} itemTitle = {"Fried Rice"} itemType = {"2"} />
                <ItemBox itemImg = {whiteRice} itemName = {"white_steamed_rice"} itemTitle = {"White Steamed Rice"} itemType = {"2"} />
                <ItemBox itemImg = {brownRice} itemName = {"brown_steamed_rice"} itemTitle = {"Brown Steamed Rice"} itemType = {"2"} />      
                <ItemBox itemImg = {ceRoll} itemName = {"chicken_egg_roll"} itemTitle = {"Chicken Egg Roll"} itemType = {"3"} />
                <ItemBox itemImg = {cShrimp} itemName = {"crispy_shrimp"} itemTitle = {"Crispy Shrimp"} itemType = {"3"} />   
            </main>
        </div>
      </div>
    </>
  );
}

export default menuContainer;
