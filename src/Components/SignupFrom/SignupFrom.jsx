import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "./../../Redux/auth/authActions";
import TextField from "@material-ui/core/TextField";
import Button from "../Button/Button";
import "./SignupForm.css";

const SignupFrom = ({ signup }) => {
  var [fullName, setFullName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var handleFormSubmit = (e) => {
    e.preventDefault();
    var cred = {
      fullName,
      email,
      password,
    };
    signup(cred);
    setFullName("");
    setEmail("");
    setPassword("");
  };
  return (
    <form className="sign-up-form" onSubmit={handleFormSubmit}>
      <TextField
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        id="standard-basic"
        style={{ width: "100%" }}
        label="FullName"
      />
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
  signup,
};

export default connect(null, actions)(SignupFrom);
