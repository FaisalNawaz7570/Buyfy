import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "./../../Redux/cart/cartActions";

const ProductCard = ({
  addProductToCart,
  removeProductFromCart,
  deleteProductFromCart,
  ...product
}) => {
  var { title, cost, id } = product;
  return (
    <div>
      <h3>
        <Link to={`/product/${id}`}>{title} </Link>- {`$${cost}`}
        <button onClick={() => addProductToCart(product)}>Add to cart</button>
      </h3>
    </div>
  );
};
var actions = {
  addProductToCart,
};
export default connect(null, actions)(ProductCard);
