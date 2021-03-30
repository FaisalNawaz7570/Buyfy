import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const OrderForm = ({ user }) => {
    var [fullName, setFullName] = useState("");
    var [email, setEmail] = useState("");
    var [phone, setPhone] = useState("");
    var [address, setAddress] = useState("");
  useEffect(() => {
    //CDM
    var { fullName, email, phone, address } = user;
    setFullName(fullName ? fullName : "")
    setEmail(email ? email : "")
    setPhone(phone ? phone : "")
    setAddress(address ? address : "")
  });
  //receiver's full name
  //... email
  //...phone
  //... complete address
 
  var handleSubmit = (e) => {
    e.preventDefault();
    var shippingInfo = {
      fullName,
      email,
      phone,
      address,
    };
    console.log(shippingInfo);
  };
  return (
    <div>
      <h1>Order Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          placeholder="Receiver's Full Name"
        />
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Receiver's Email"
        />
        <input
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          placeholder="Receiver's Phone"
        />
        <input
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          placeholder="Receiver's Address"
        />
        <button type="submit">PAY</button>
      </form>
    </div>
  );
};
var mapState = (state) => ({
  user: state.auth,
});
export default connect(mapState)(OrderForm);
