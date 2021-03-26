import React from "react";
import CheckoutList from "../../Components/CheckoutList/CheckoutList";
import { connect } from 'react-redux';
import { calculateTotal } from './../../Utility/checkout';

const Checkout = ({total}) => {
  return (
    <div>
      <h1>Checkout Page</h1>
      <CheckoutList/>
      <h3>total cost - {total}</h3>
      <button>PAY NOW {total} </button>
    </div>
  );
};
var mapState = (state) => ({
   total: calculateTotal(state.cart)
})
export default connect(mapState)(Checkout);
