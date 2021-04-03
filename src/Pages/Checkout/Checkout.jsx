import React, {useState} from "react";
import CheckoutList from "../../Components/CheckoutList/CheckoutList";
import { connect } from "react-redux";
import { calculateTotal } from "./../../Utility/checkout";
import OrderForm from "./../../Components/OrderForm/OrderForm";

const Checkout = ({ total }) => {
  var [shipFormShown, setShipFormShown] = useState(false)
  return (
    <div>
      <h1>Checkout Page</h1>
      <CheckoutList />
      <h3>total cost - {total}</h3>
      {shipFormShown && <OrderForm />}
      <button onClick={() => setShipFormShown(!shipFormShown)}>Proceed & Pay </button>
    </div>
  );
};
var mapState = (state) => ({
  total: calculateTotal(state.cart),
});
export default connect(mapState)(Checkout);
