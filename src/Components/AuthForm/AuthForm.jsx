import React, { useState } from "react";
import "./AuthForm.css";
import Button from "./../Button/Button";
import SigninForm from "../SigninForm/SigninForm";
import SignupFrom from "../SignupFrom/SignupFrom";
import { connect } from 'react-redux';
import {googleSignin} from "./../../Redux/auth/authActions"

const AuthForm = ({googleSignin}) => {
  var [formType, setFormType] = useState("sign-in");
  return (
    <div className="auth-form">
      <div className="auth-form-switcher">
        <Button
          onClick={() => setFormType("sign-in")}
          style={{ position: "relative" }}
          background="white"
          color="black"
          fontWeight="regular"
          fontSize={16}
        >
          Sign in
          <div className="under-liner"></div>
        </Button>
        <Button
          onClick={() => setFormType("sign-un")}
          style={{ position: "relative", justifySelf: "end" }}
          background="white"
          color="black"
          fontWeight="regular"
          fontSize={16}
        >
          Sign up
          <div className="under-liner"></div>
        </Button>
      </div>
      <div className="auth-form-fields center">
       {formType === "sign-in" ? <SigninForm/> : <SignupFrom/>}
      </div>
      <div className="auth-form-Btn">
        <div className="separator-or">OR</div>
        <Button
        type="button"
        onClick={googleSignin}
          fontSize={16}
          fontWeight="semi-bold"
          background="rgba(0,0,0,0.7)"
          style={{ width: "70%", marginTop: "2em" }}
        >
          Google Sign-in
        </Button>
      </div>
    </div>
  );
};
var actions ={
 googleSignin
}
export default connect(null, actions)(AuthForm);
