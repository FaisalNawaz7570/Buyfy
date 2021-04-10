import React, { useState } from "react";
import { connect } from "react-redux";
import { signin } from "../../Redux/auth/authActions";
import "./SigninForm.css";
import TextField from "@material-ui/core/TextField";
import Button from "../Button/Button";

const SigninFrom = ({ signin }) => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var handleFormSubmit = (e) => {
    e.preventDefault();
    var cred = {
      email,
      password,
    };
    setEmail("");
    setPassword("");
    signin(cred);
  };
  return (
    <form className="sign-in-form" onSubmit={handleFormSubmit}>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="standard-basic"
        style={{ width: "100%" }}
        label="Email"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="standard-basic"
        style={{ width: "100%" }}
        label="Password"
      />
      <Button
        type="submit"
        fontSize={16}
        fontWeight="semi-bold"
        background="rgba(0,0,0,0.7)"
        style={{ width: "70%", marginTop: "2em" }}
      >
        Sign in
      </Button>
      {/* <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="email" />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="text" placeholder="password" />
        <button type="submit">Signin</button> */}
    </form>
  );
};
var actions = {
  signin,
};
export default connect(null, actions)(SigninFrom);
