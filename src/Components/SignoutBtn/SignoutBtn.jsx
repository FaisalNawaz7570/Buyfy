import React from "react";
import { connect } from "react-redux";
import { signout } from "../../Redux/auth/authActions";

const SignoutBtn = ({ signout }) => {
  return (
    <div>
        <h5>Sign Out</h5>
      <button onClick={signout}>Sign Out</button>
    </div>
  );
};
var actions = {
  signout,
};

export default connect(null, actions)(SignoutBtn);
