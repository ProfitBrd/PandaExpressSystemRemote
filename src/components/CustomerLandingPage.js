import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import CustomerCheckout from './CustomerCheckout';
import CustomerMenu from './CustomerMenu';

const CustomerLandingPage = () => {
  return (
    <Router>
        <Routes>
            <Route path = "/" element = {<CustomerMenu />}></Route>
            <Route path = "/Checkout" element = {<CustomerCheckout />}></Route>
        </Routes>
    </Router>
  )
}

export default CustomerLandingPage