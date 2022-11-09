import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import CustomerCheckout from './CustomerCheckout';
import CustomerMenu from './CustomerMenu';

// var callAPIAsync = async () => {
//   return (await fetch("http://localhost:3000/roster?id=2")).text();
// }
const CustomerLandingPage = () => {
  // var hello = callAPIAsync();
  // console.log("BRUH" + hello);
  return (
    <Router>
        <Routes>
            <Route path = "/" element = {<CustomerMenu />}></Route>
            <Route path = "/Checkout" element = {<CustomerCheckout />}></Route>
            <Route path = "/Blah" element = {<CustomerCheckout />}></Route>
        </Routes>
    </Router>
  )
}

export default CustomerLandingPage