import React from 'react'
import CustomerDishChoiceCurrentOrder from "./customer/CustomerDishChoiceCurrentOrder";
import '../index.css';
import CustomerDishChoiceButton from './CustomerDishChoiceButton';
import { useNavigate } from 'react-router-dom';
import CustomerTotalPrice from './CustomerTotalPrice';
import CustomerCheckoutButton from './CustomerCheckoutButton';


const CustomerCheckout = (props) => {
  
  return (
    <div class = "CheckoutScreen">
        <div id = "Checkout"><CustomerCheckoutButton /></div>
        <div class = "CustomerCheckoutButton" id = "GoBack" onClick={() => {props.homeView()}}><CustomerDishChoiceButton Name = "Go Back" /></div>
        <div id = "Price">{`Final total: ${props.price}`}</div>
    </div>
    )
    
}

export default CustomerCheckout
