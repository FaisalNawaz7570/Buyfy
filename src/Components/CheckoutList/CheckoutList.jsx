import React from "react";
import { connect } from "react-redux";
import CheckoutListItem from "../CheckoutListItem/CheckoutListItem";
import Paragraph from "../Paragraph/Paragraph";
import "./CheckoutList.css"

const CheckoutList = ({cartItems}) => {
    console.log(cartItems)
  return (
    <div className="checkout-list">
      <div className="checkout-list-item checkout-list-item-extends">
        <Paragraph fontWeight="semi-bold" fontSize={20}>Product</Paragraph>
        <Paragraph fontWeight="semi-bold" fontSize={20}>Quantity</Paragraph>
        <Paragraph fontWeight="semi-bold" fontSize={20}>Price</Paragraph>
      </div>
      {cartItems.map((item) => <CheckoutListItem key={item.id} {...item}/>)}
    </div>
  );
};
var mapState = (state) => ({
  cartItems: state.cart,
});
export default connect(mapState)(CheckoutList);

