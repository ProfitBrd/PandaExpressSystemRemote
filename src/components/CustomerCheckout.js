import React from 'react'
import CustomerDishChoiceCurrentOrder from "./CustomerDishChoiceCurrentOrder";
import '../index.css';
import CustomerDishChoiceButton from './CustomerDishChoiceButton';
import { useNavigate } from 'react-router-dom';

const CustomerCheckout = () => {
  let navigate = useNavigate();
  return (
    <div class = "CheckoutScreen">
        <div class = "CustomerCheckoutOrder"><CustomerDishChoiceCurrentOrder /></div>
        <div class = "CustomerCheckoutButton" id = "Checkout"><CustomerDishChoiceButton Name = "Checkout" /></div>
        <div class = "CustomerCheckoutButton" id = "GoBack" onClick={() => {navigate("/")}}><CustomerDishChoiceButton Name = "Go Back" /></div>
    </div>
    )
}

export default CustomerCheckout
