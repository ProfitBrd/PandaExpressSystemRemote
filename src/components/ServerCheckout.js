import React from 'react'
import ServerDishChoiceCurrentOrder from "./ServerDishChoiceCurrentOrder";
import '../index.css';
import ServerDishChoiceButton from './ServerDishChoiceButton';
import { useNavigate } from 'react-router-dom';

const ServerCheckout = () => {
  let navigate = useNavigate();
  return (
    <div class = "CheckoutScreen">
        <div class = "ServerCheckoutOrder"><ServerDishChoiceCurrentOrder /></div>
        <div class = "ServerCheckoutButton" id = "ServerCheckout"><ServerDishChoiceButton Name = "Checkout" /></div>
        <div class = "ServerCheckoutButton" id = "ServerGoBack" onClick={() => {navigate("/ServerMenu")}}><ServerDishChoiceButton Name = "Go Back" /></div>
    </div>
    )
}

export default ServerCheckout
