import React from "react";
import SignupFrom from "../../Components/SignupFrom/SignupFrom";
import SigninFrom from "../../Components/SigninForm/SigninForm";
import SignoutBtn from "../../Components/SignoutBtn/SignoutBtn";
import GoogleSigninBtn from "../../Components/GoogleSigninBtn/GoogleSigninBtn";

const Authentication = () => {
  return (
    <div>
      <h1>Authentication Page</h1>
      <SignupFrom />
      <SigninFrom />
      <GoogleSigninBtn />
      <SignoutBtn />
    </div>
  );
};

export default Authentication;
