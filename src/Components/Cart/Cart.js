import React from "react";
import CartList from "../CartList/CartList";

const Cart = () => {
  return (
    <div>
      <h1>cart</h1>
      <CartList />
      <button>CheckOut</button>
    </div>
  );
};

export default Cart;
