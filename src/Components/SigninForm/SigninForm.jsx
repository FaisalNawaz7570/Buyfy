import React, { useState } from "react";
import { connect } from 'react-redux';
import { signin } from '../../Redux/auth/authActions';

const SigninFrom = ({signin}) => {
    var [email, setEmail] = useState("")
    var [password, setPassword] = useState("")
    var handleFormSubmit = (e) => {
        e.preventDefault()
        var cred = {
          email, password
        }
        setEmail("")
        setPassword("")
        signin(cred)
    }
  return (
    <div>
        <h1>SignIn</h1>
      <form onSubmit={handleFormSubmit}>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="email" />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="text" placeholder="password" />
        <button type="submit">Signin</button>
      </form>
    </div>
  );
};
var actions = {
  signin
}
export default connect(null,actions)(SigninFrom);

