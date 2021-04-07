import React, { useState } from "react";
import CheckoutList from "../../Components/CheckoutList/CheckoutList";
import { connect } from "react-redux";
import { calculateTotal } from "./../../Utility/checkout";
import OrderForm from "./../../Components/OrderForm/OrderForm";
import "./Checkout.css";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";

const Checkout = ({ total }) => {
  var [shipFormShown, setShipFormShown] = useState(false);
  return (
    <div className="checkout-page-container">
      <div className="checkout"> 
        <Header fontSize={35} fontWeight="bold">Shopping Cart</Header>
      <CheckoutList />
      <div className="checkout-bottom-content">
      <Header fontSize={35} fontWeight="bold">Total: $ {total}</Header>
      <Button style={{justifySelf: "end", borderRadius: "30px"}} fontSize={20} fontWeight="semi-bold" background="white" color="black">Proceed & Pay</Button>
      </div>
      {/* {shipFormShown && <OrderForm />}
      <button onClick={() => setShipFormShown(!shipFormShown)}>Proceed & Pay </button> */}
      </div>
    </div>
  );
};
var mapState = (state) => ({
  total: calculateTotal(state.cart),
});
export default connect(mapState)(Checkout);
