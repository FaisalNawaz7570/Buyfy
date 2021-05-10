import React, { useState } from "react";
import CheckoutList from "../../Components/CheckoutList/CheckoutList";
import { connect } from "react-redux";
import { calculateTotal } from "./../../Utility/checkout";
import OrderForm from "./../../Components/OrderForm/OrderForm";
import "./Checkout.css";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import { openModal } from './../../Redux/modal/modalAction';

const Checkout = ({ total, openModal }) => {
  var [shipFormShown, setShipFormShown] = useState(false);
  return (
    <div className="checkout-page-container">
      <div className="checkout">
        <Header fontSize={28} fontWeight="bold">
          Shopping Cart
        </Header>
        <CheckoutList />
        <div className="checkout-bottom-content">
          <Header fontSize={28} fontWeight="bold">
            Total: $ {total}
          </Header>
          <Button
            onClick={() =>
              openModal({
                modalType: "addressFormModal",
              })
            }
            style={{ justifySelf: "end", borderRadius: "30px" }}
            fontSize={18}
            fontWeight="semi-bold"
            background="lightBlue"
            color="black"
          >
            Proceed & Pay
          </Button>
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
var actions = {
  openModal
}
export default connect(mapState, actions)(Checkout);
