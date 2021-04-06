import React from "react";
import { Link } from "react-router-dom";
import CartList from "../CartList/CartList";
import { connect } from 'react-redux';
import { generateOrder } from './../../Redux/order/orderActions';
import "./Cart.css"
import Header from "../Header/Header";
import Button from "../Button/Button";

const Cart = ({generateOrder}) => {
  console.log(generateOrder)
  return (
    <div className="cart">
      {/* <h1>cart</h1> */}
      <Header fontWeight="bold" fontSize={24}>CART</Header>
      <CartList />

      {/* <button onClick = {generateOrder} >CheckOut</button> */}
      <Button fontSize={20} background="rgba(0,0,0,0.6)" style={{letterSpacing: "5px", width:"100%"}}>CHECKOUT</Button>

    </div>
  );
};
var actions = {
  generateOrder
}
export default connect(null, actions)(Cart);
