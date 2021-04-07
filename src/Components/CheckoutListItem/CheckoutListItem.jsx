import React from "react";
import { connect } from "react-redux";
import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";
import {
  addProductToCart,
  removeProductFromCart,
  deleteProductFromCart,
} from "./../../Redux/cart/cartActions";
import "./CheckoutListItem.css";

const CheckoutListItem = ({
  addProductToCart,
  removeProductFromCart,
  deleteProductFromCart,
  ...product
}) => {
  var { title, cost, quantity, id } = product;
  return (
    <div className="checkout-list-item">
      <div className="chekout-item-product">
        <div className="chekout-item-product-image"></div>
        <Paragraph fontSize={20} fontWeight="semi-bold">
          Product Cart
        </Paragraph>
      </div>
      <div className="chekout-item-quantity center" style={{ flexFlow: "row" }}>
        <Button
          fontWeight="bold"
          color="black"
          background="white"
          style={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            transform: "translateX(5px)",
          }}
        >
          +
        </Button>
        <Button fontWeight="bold" color="black" background="white">
          3
        </Button>
        <Button
          fontWeight="bold"
          color="black"
          background="white"
          style={{
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
            transform: "translateX(-5px)",
          }}
        >
          -
        </Button>
      </div>
      <div className="chekout-item-price center">
        <Paragraph fontSize={20} fontWeight="semi-bold">$ 240</Paragraph>
      </div>
      <div className="chekout-item-cross center">
      <Paragraph style={{cursor: "pointer"}} fontSize={25} fontWeight="semi-bold">x</Paragraph>

      </div>
      {/* <h1>
        {title} - {cost} - <button onClick={() => deleteProductFromCart(id)}>X</button>
      </h1>
      <h3>
        {" "}
        <button onClick={() => addProductToCart(product)}>+</button> {quantity}{" "}
        <button onClick={() => removeProductFromCart(id)}>-</button>
      </h3> */}
    </div>
  );
};
var actions = {
  addProductToCart,
  removeProductFromCart,
  deleteProductFromCart,
};
export default connect(null, actions)(CheckoutListItem);
