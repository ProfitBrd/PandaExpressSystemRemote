import React from 'react'
import CustomerDishChoiceButton from "./CustomerDishChoiceButton";
import CustomerDishChoiceCurrentOrder from "./CustomerDishChoiceCurrentOrder";
import '../index.css';

const CustomerMenu = () => {
  return (
    <div class = "CustomerMenuGrid">
        <div class = "CustomerMenuDishChoiceButton" id = "Bowl"><CustomerDishChoiceButton Name = "Bowl"/></div>
        <div class = "CustomerMenuDishChoiceButton" id = "Plate"><CustomerDishChoiceButton Name = "Plate"/></div>
        <div class = "CustomerMenuDishChoiceButton" id = "BiggerPlate"><CustomerDishChoiceButton Name = "Bigger Plate"/></div>
        <div class = "CustomerMenuDishChoiceButton" id = "IndividualItems"><CustomerDishChoiceButton Name = "Indiv. Items"/></div>
    
        <div class = "CustomerMenuCurrentOrder">
            <div><CustomerDishChoiceCurrentOrder /></div>
        </div>
    </div>
  )
}

export default CustomerMenu
