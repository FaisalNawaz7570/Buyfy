import React from "react";
import { Link } from "react-router-dom";
import CartList from "../CartList/CartList";
import { connect } from 'react-redux';
import { generateOrder } from './../../Redux/order/orderActions';

const Cart = ({generateOrder}) => {
  console.log(generateOrder)
  return (
    <div>
      <h1>cart</h1>
      <CartList />

      <button onClick = {generateOrder} >CheckOut</button>
    </div>
  );
};
var actions = {
  generateOrder
}
export default connect(null, actions)(Cart);
