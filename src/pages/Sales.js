import React, {useState}from "react";
import {Component} from 'react';
import OrderHistory from '../components/OrderHistory';
import Sidebar from '../components/Sidebar'

class Sales extends Component {

  render() {
    return (
      <div>
        <Sidebar />
        <OrderHistory />
        <h2>Order History</h2>
        <table>
          <tr>
            <td>transaction_id</td>
            <td>employee_id</td>
            <td>date</td>
            <td>type_of_dish</td>
            <td>entree_dish</td>
            <td>entree_amt_servings</td>
            <td>side_ingredients</td>
            <td>side_amt_servings</td>
            <td>appetizer_ingredients</td>
            <td>appetizer_amt_servings</td>
            <td>price</td>
          </tr>
        </table>
        <div className="Footer">
        Footer
        </div>
      </div>
    )
  }
}

export default Sales; 
