import React from 'react'
import { useNavigate } from 'react-router-dom';
import CustomerDishChoiceButton from "./CustomerDishChoiceButton";
import CustomerDishChoiceCurrentOrder from "./CustomerDishChoiceCurrentOrder";
import '../index.css';


const CustomerMenu = () => {
  let navigate = useNavigate();
  return (
    <div class = "CustomerMenuGrid">
        <div class = "CustomerMenuDishChoiceButton" id = "Bowl"><CustomerDishChoiceButton Name = "Bowl"/></div>
        <div class = "CustomerMenuDishChoiceButton" id = "Plate"><CustomerDishChoiceButton Name = "Plate"/></div>
        <div class = "CustomerMenuDishChoiceButton" id = "BiggerPlate"><CustomerDishChoiceButton Name = "Bigger Plate"/></div>
        <div class = "CustomerMenuDishChoiceButton" id = "IndividualItems"><CustomerDishChoiceButton Name = "Indiv. Items"/></div>
        <div class = "CustomerMenuDishChoiceButton" id = "CheckoutScreen" onClick={() => {navigate("Checkout")}}><CustomerDishChoiceButton Name = "Checkout"/></div>
        
        <div class = "CustomerMenuCurrentOrder">
            <CustomerDishChoiceCurrentOrder />
        </div>
    </div>
  )
}

export default CustomerMenu
