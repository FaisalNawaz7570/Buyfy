import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Header from "./../Header/Header";
import { connect } from 'react-redux';
import { signout } from './../../Redux/auth/authActions';
import Cart from "../Cart/Cart";

const MenuItem = ({ children, to="#", ...restProps }) => {
  return (
    <div>
      <div {...restProps} style={{padding: "0.8em 2em", cursor: "pointer"}} className="menuItem">
        <Link to={to}>
          <Header
            style={{ cursor: "pointer", display: "inline", color:"black", }}
            fontSize={18}
            fontWeight="semi-bold"
          >
            {children}
          </Header>
        </Link>
      </div>
    </div>
  );
};

const Navbar = ({auth, signout}) => {
  var [isNavbarVisible, setNavbarVisibility] = useState(false)
  return (
    <div className="navbar">
      <MenuItem to="/">BUYFY</MenuItem>
      <MenuItem to="/category">SHOP</MenuItem>
      <MenuItem to="/test">TEST</MenuItem>
      <div style={{padding: "0.8em 2em ",cursor: "pointer"}}>
      <Header
            style={{ cursor: "pointer", display: "inline", color:"black" }}
            fontSize={18}
            fontWeight="semi-bold"
            onClick={() => setNavbarVisibility(!isNavbarVisible)}
          >
            CART
          </Header>
          {isNavbarVisible ? <Cart /> : null}
      </div>
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
