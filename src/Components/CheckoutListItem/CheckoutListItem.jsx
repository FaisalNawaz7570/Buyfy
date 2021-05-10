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
  var { title, cost, quantity, id, coverPhoto } = product;
  return (
    <div className="checkout-list-item">
      <div className="chekout-item-product">
        <div className="chekout-item-product-image" style={{background:`url(${coverPhoto})`, backgroundSize: "100% 100%, cover"}}></div>
        <Paragraph fontSize={18} fontWeight="semi-bold">
          {title}
        </Paragraph>
      </div>
      <div className="chekout-item-quantity center" style={{ flexFlow: "row" }}>
        <Button
          fontWeight="semi-bold"
          color="black"
          background="white"
          style={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            transform: "translateX(5px)",
            padding: "0.5em 1.2em"
          }}
          onClick={() => addProductToCart(product)}
        >
          +
        </Button>
        <Button style={{padding: "0.5em 1.2em"}} fontWeight="semi-bold" color="black" background="white">
          {quantity}
        </Button>
        <Button
          fontWeight="semi-bold"
          color="black"
          background="white"
          style={{
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
            padding: "0.5em 1.2em",
            transform: "translateX(-5px)",
          }}
          onClick={() => removeProductFromCart(id)}
        >
          -
        </Button>
      </div>
      <div className="chekout-item-price center">
        <Paragraph fontSize={18} fontWeight="semi-bold">$ {cost}</Paragraph>
      </div>
      <div className="chekout-item-cross center">
      <Paragraph style={{cursor: "pointer"}}  onClick={() => deleteProductFromCart(id)} fontSize={20} fontWeight="semi-bold">x</Paragraph>

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
