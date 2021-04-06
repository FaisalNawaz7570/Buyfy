import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Header from "./../Header/Header";
import { connect } from 'react-redux';
import { signout } from './../../Redux/auth/authActions';

const MenuItem = ({ children, to="#", ...restProps }) => {
  return (
    <div>
      <div {...restProps} className="menuItem">
        <Link to={to}>
          <Header
            style={{ cursor: "pointer", display: "inline", color:"white" }}
            fontSize={20}
            fontWeight="bold"
          >
            {children}
          </Header>
        </Link>
      </div>
    </div>
  );
};

const Navbar = ({auth, signout}) => {
  return (
    <div className="navbar">
      <MenuItem to="/">BUYFY</MenuItem>
      <MenuItem to="/category">SHOP</MenuItem>
      <MenuItem>CART</MenuItem>
      {auth ? <MenuItem onClick={signout} to="/authentication">LOGOUT</MenuItem> : <MenuItem to="/authentication">LOGIN</MenuItem>}
    </div>
  );
};
var mapState = (state) => ({
  auth: state.auth
})
var actions = {
  signout
}
export default connect(mapState, actions)(Navbar);
