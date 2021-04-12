import React from "react";
import SignupFrom from "../../Components/SignupFrom/SignupFrom";
import SigninFrom from "../../Components/SigninForm/SigninForm";
import SignoutBtn from "../../Components/SignoutBtn/SignoutBtn";
import GoogleSigninBtn from "../../Components/GoogleSigninBtn/GoogleSigninBtn";
import "./Authentication.css";
import AuthForm from "../../Components/AuthForm/AuthForm";
import Header from "./../../Components/Header/Header";

const Authentication = () => {
  return (
    <div className="authentication">
      <div className="auth-left center">
        <Header
          style={{ textAlign: "center" }}
          color="white"
          fontSize={120}
          fontWeight="extra-bold"
        >
          JUST <br /> DO <br /> IT
        </Header>
      </div>
      <div className="auth-right center" style={{ alignItems: "start" }}>
        <AuthForm />
      </div>
      {/* <h1>Authentication Page</h1>
      <SignupFrom />
      <SigninFrom />
      <GoogleSigninBtn />
      <SignoutBtn /> */}
    </div>
  );
};

export default Authentication;
