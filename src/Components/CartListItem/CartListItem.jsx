import React from "react";
import { connect } from "react-redux";
import Paragraph from "../Paragraph/Paragraph";
import {
  addProductToCart,
  removeProductFromCart,
  deleteProductFromCart,
} from "./../../Redux/cart/cartActions";
import "./CartListItem.css";

const CartListItem = ({
  addProductToCart,
  removeProductFromCart,
  deleteProductFromCart,
  ...product
}) => {
  var { title, cost, quantity, id, coverPhoto } = product;
  return (
    <div className="cart-list-item">
      <div style={{background: `url(${coverPhoto})`, backgroundSize: "100% 100%, cover"}} className="cart-item-img"></div>
      <div className="cart-item-description">
        <Paragraph fontSize={15} fontWeight="semi-bold">
          {title}
        </Paragraph>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Paragraph
            fontSize={18}
            fontWeight="regular"
            style={{ marginRight: "5px" }}
          >
            ${cost} X {quantity} =
          </Paragraph>{" "}
          <Paragraph fontSize={18} fontWeight="semi-bold">
            ${cost * quantity}
          </Paragraph>
        </div>
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
export default connect(null, actions)(CartListItem);
