import React from "react";
import { connect } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
  deleteProductFromCart
} from "./../../Redux/cart/cartActions";

const CheckoutListItem = ({
  addProductToCart,
  removeProductFromCart,
  deleteProductFromCart,
  ...product
}) => {
  var { title, cost, quantity, id } = product;
  return (
    <div>
      <h1>
        {title} - {cost} - <button onClick={() => deleteProductFromCart(id)}>X</button>
      </h1>
      <h3>
        {" "}
        <button onClick={() => addProductToCart(product)}>+</button> {quantity}{" "}
        <button onClick={() => removeProductFromCart(id)}>-</button>
      </h3>
    </div>
  );
};
var actions = {
  addProductToCart,
  removeProductFromCart,
  deleteProductFromCart
};
export default connect(null, actions)(CheckoutListItem);

