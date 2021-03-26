import React from "react";
import { Link } from "react-router-dom";
import CartList from "../CartList/CartList";

const Cart = () => {
  return (
    <div>
      <h1>cart</h1>
      <CartList />
      <Link to="/checkout">
        <button>CheckOut</button>
      </Link>
    </div>
  );
};

export default Cart;
