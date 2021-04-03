import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from './../../Redux/auth/authActions';

const SignupFrom = ({signup}) => {
  var [fullName, setFullName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var handleFormSubmit = (e) => {
    e.preventDefault();
    var cred = {
      fullName, email, password
    }
    signup(cred)
    setFullName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
        <h1>SignUp</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          type="text"
          placeholder="full name"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          placeholder="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="text"
          placeholder="password"
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

var actions = {
  signup
}


export default connect(null, actions)(SignupFrom);
