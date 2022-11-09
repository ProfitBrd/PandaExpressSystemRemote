import React from 'react'
import CustomerDishChoiceCurrentOrder from "./CustomerDishChoiceCurrentOrder";
import '../index.css';
import CustomerDishChoiceButton from './CustomerDishChoiceButton';
import { useNavigate } from 'react-router-dom';
import CustomerTotalPrice from './CustomerTotalPrice';

// var apiResponse = "t";
// const callAPI = () => {
//   fetch("http://localhost:3000/roster?id=3")
//       .then(console.log("recieved"))
//       .then(res => res.text())
//       .then(console.log(res))
//   //     .then(res => { apiResponse = res });
//   // console.log("API RESPONSE: " + apiResponse);

// }


const CustomerCheckout = () => {
  
  let navigate = useNavigate();
  return (
    <div class = "CheckoutScreen">
        <div class = "CustomerCheckoutOrder"><CustomerDishChoiceCurrentOrder /></div>
        <div class = "CustomerCheckoutButton" id = "Checkout"><CustomerDishChoiceButton Name = "Checkout" /></div>
        <div class = "CustomerCheckoutButton" id = "GoBack" onClick={() => {navigate("/")}}><CustomerDishChoiceButton Name = "Go Back" /></div>
        <div class = "CustomerCheckoutButton" id = "Checkout"><CustomerTotalPrice /></div>
    </div>
    )
    
}
// onClick={console.log("HELLO: " + callAPI())}

export default CustomerCheckout
